// SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;

interface IBSCValidatorSet {
  function misdemeanor(address validator) external;
  function felony(address validator)external;
  function isCurrentValidator(address validator) external view returns (bool);
}
