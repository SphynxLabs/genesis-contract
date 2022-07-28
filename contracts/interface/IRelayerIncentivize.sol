// SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;

interface IRelayerIncentivize {

    function addReward(address payable headerRelayerAddr, address payable packageRelayer, uint256 amount, bool fromSystemReward) external returns (bool);

}
