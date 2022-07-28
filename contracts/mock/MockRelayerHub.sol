// SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;

import "../interface/IRelayerHub.sol";

contract MockRelayerHub is IRelayerHub {

  function isRelayer(address) external override view returns (bool) {
    return true;
  }
}
