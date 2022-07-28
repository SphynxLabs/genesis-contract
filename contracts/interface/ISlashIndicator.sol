// SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;

interface ISlashIndicator {
  function clean() external;
  function sendFelonyPackage(address validator) external;
  function getSlashThresholds() external view returns (uint256, uint256);
}
