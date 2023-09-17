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

    struct Paper{
        string PaperCid;
        bool beingProcessed;
        bool processed;
    }


    mapping(uint=>Paper) public paperIds;
    mapping(address=>uint[]) public assignedPages;
    // auditors: users with audit access i.e can blame a contributor
    constructor(address[] memory _auditors, uint reward, uint pages, string[] memory PapersCid) payable {
        require(msg.value == reward,"Transact exact reward amount");
        require(PapersCid.length == pages,"No. of pages and cid not same");
        auditors = _auditors;
        totalReward = reward;
        numPages = pages;

        for (uint i=0; i < PapersCid.length; i++) 
        {
            uint count = _pId.current();
            paperIds[count] = Paper(PapersCid[i],false,false);
            _pId.increment();
        }
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

    function addPages(string[] memory pageCids) public onlyOwner{
        numPages = numPages + pageCids.length;
        for (uint i=0; i < pageCids.length; i++) 
        {
            uint count = _pId.current();
            paperIds[count] = Paper(pageCids[i],false,false);
            _pId.increment();
        }
    }

    // user pledges pages he will complete, stakes few tokens to keep them honest and punctual
    function pledgeJob(uint qty) public payable{
        require(msg.value == 1000000000000000000, "Stake exactly 1 Token");
        //request random values for qty and assign it to users
        assignedPages[msg.sender] = [0,1,3,5];

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

// ["0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2","0x4B20993Bc481177ec7E8f571ceCaE8A9e22C02db"]
// 100000
// 5
// ["a","b","c","d","e"]