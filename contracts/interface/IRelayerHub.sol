// SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;

interface IRelayerHub {
  function isRelayer(address sender) external view returns (bool);
}


