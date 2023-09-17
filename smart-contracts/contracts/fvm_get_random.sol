// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import { AxelarExecutable } from '@axelar-network/axelar-gmp-sdk-solidity/contracts/executable/AxelarExecutable.sol';
import { IAxelarGateway } from '@axelar-network/axelar-gmp-sdk-solidity/contracts/interfaces/IAxelarGateway.sol';
import { IAxelarGasService } from '@axelar-network/axelar-gmp-sdk-solidity/contracts/interfaces/IAxelarGasService.sol';
import { IERC20 } from '@axelar-network/axelar-gmp-sdk-solidity/contracts/interfaces/IERC20.sol';

contract fvm_random is AxelarExecutable {
    uint256[] public randomValues;
    IAxelarGasService public immutable gasService;

    constructor() AxelarExecutable(0x999117D44220F33e0441fbAb2A5aDB8FF485c54D) {
        gasService = IAxelarGasService(0xbE406F0189A0B4cf3A05C286473D23791Dd44Cc6);
    }

    // Handles calls created by setAndSend. Updates this contract's value
    function _execute(
        string calldata sourceChain_,
        string calldata sourceAddress_,
        bytes calldata payload_
    ) internal override {
        (randomValues) = abi.decode(payload_, (uint256[]));
    }

    function getRandom() view public returns(uint256[] memory){
        return randomValues;
    }
}