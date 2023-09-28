// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface crosschain_random{
    function setRemoteValue(
        string calldata destinationChain,
        string calldata destinationAddress
    ) external payable;
}

contract automation{
    address public polygonContract;

    constructor(address ca) {
        polygonContract=ca;
    }

    function generateRamndom(string calldata dC, string calldata dA) external {
        crosschain_random(polygonContract).setRemoteValue{value: 200000000000000000}(dC,dA);
    }
    function fillGas() payable public{}

    function balanceOfContract() public view returns(uint){
        return address(this).balance;
    }
}