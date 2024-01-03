// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;



import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";




contract PaperStack is Ownable{

    using Counters for Counters.Counter;
    Counters.Counter private _pId;

    uint totalReward;
    uint public numPages;
    address[] public auditors;
    string public data_cid;
    mapping(address=>uint[]) public assignedPages;
    // auditors: users with audit access i.e can blame a contributor
    constructor(address[] memory _auditors, uint reward, uint pages, string memory PapersCid) {
        require(msg.value == reward,"Transact exact reward amount");
        auditors = _auditors;
        totalReward = reward;
        numPages = pages;
        data_cid = PapersCid;
        
    }

    modifier onlyAuditors(){
        bool isAuditor = false;
        for (uint i=0; i<auditors.length; i++) 
        {
            if(msg.sender == auditors[i]){
                isAuditor = true;
                break;
            }
        }
        require(isAuditor == true, "sender should be auditor");
        _;
    }


    // user pledges pages he will complete, stakes few tokens to keep them honest and punctual
    function pledgeJob(uint qty) public payable{
        require(qty <= 10, "Max 10 pages can be requested");
        //request random values for qty and assign it to users
        uint256[] memory randomValues =[1503037, 1726119, 3736581, 4538967, 4587032, 4753158, 4985369, 7210429, 7596545, 9651881];
        for (uint i=0; i<qty; i++) 
        {
            uint index = ((randomValues[i]/(block.timestamp)) % numPages) + 1;
            assignedPages[msg.sender].push(index);
        }

    } 

    function getAssignedPages(address user) view public returns(uint[] memory){
        return assignedPages[user];
    }

    // auditors can validate jobs
    function validateJob(address payable user) external payable onlyAuditors{
        // user returned his stake+reward
        uint userPages = assignedPages[user].length;
        user.transfer( (1000000000000000000+((totalReward/numPages)*userPages)));
    }

}