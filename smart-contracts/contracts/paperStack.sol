// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";


interface fvm_random{
    function getRandom() view external returns(uint256[] memory);
}

contract PaperStack is Ownable{

    using Counters for Counters.Counter;
    Counters.Counter private _pId;

    uint totalReward;
    uint public numPages;
    address[] public auditors;
    string public data_cid;
    address fvm_random_ca = 0xA9aB19aDd1f1F7F78465d386Fc6e05275e057EF8;
    mapping(address=>uint[]) public assignedPages;
    // auditors: users with audit access i.e can blame a contributor
    constructor(address[] memory _auditors, uint reward, uint pages, string memory PapersCid) payable {
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
        require(msg.value == 1000000000000000000, "Stake exactly 1 Token");
        require(qty <= 10, "Max 10 pages can be requested");
        //request random values for qty and assign it to users
        uint256[] memory randomValues = fvm_random(fvm_random_ca).getRandom();
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