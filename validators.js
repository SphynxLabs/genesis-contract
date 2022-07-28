const web3 = require("web3")
const RLP = require('rlp');

// Configure
const validators = [
  {
    consensusAddr: "0x20dbfb3c0441a2ac9350f6667e83a7329aa0e4ae",
    feeAddr: "0x20dbfb3c0441a2ac9350f6667e83a7329aa0e4ae",
    bscFeeAddr: "0x20dbfb3c0441a2ac9350f6667e83a7329aa0e4ae",
    votingPower: 0x0000000000000064
  },
  {
    consensusAddr: "0xd16b07d8749f26a6f4e6587ef4d24ab4fadfee4e",
    feeAddr: "0xd16b07d8749f26a6f4e6587ef4d24ab4fadfee4e",
    bscFeeAddr: "0xd16b07d8749f26a6f4e6587ef4d24ab4fadfee4e",
    votingPower: 0x0000000000000064
  },
  {
    consensusAddr: "0x4e30857d09b0dbf8a991eb9562a6e7d555b9f498",
    feeAddr: "0x4e30857d09b0dbf8a991eb9562a6e7d555b9f498",
    bscFeeAddr: "0x4e30857d09b0dbf8a991eb9562a6e7d555b9f498",
    votingPower: 0x0000000000000064
  },
  {
    consensusAddr: "0x960b99c3ae10744bf7e62f72970e1e83a88ef40b",
    feeAddr: "0x960b99c3ae10744bf7e62f72970e1e83a88ef40b",
    bscFeeAddr: "0x960b99c3ae10744bf7e62f72970e1e83a88ef40b",
    votingPower: 0x0000000000000064
  }
];

// ===============  Do not edit below ====
function generateExtradata(validators) {
  let extraVanity =Buffer.alloc(32);
  let validatorsBytes = extraDataSerialize(validators);
  let extraSeal =Buffer.alloc(65);
  return Buffer.concat([extraVanity,validatorsBytes,extraSeal]);
}

function extraDataSerialize(validators) {
  let n = validators.length;
  let arr = [];
  for(let i = 0;i<n;i++){
    let validator = validators[i];
    arr.push(Buffer.from(web3.utils.hexToBytes(validator.consensusAddr)));
  }
  return Buffer.concat(arr);
}

function validatorUpdateRlpEncode(validators) {
  let n = validators.length;
  let vals = [];
  for(let i = 0;i<n;i++) {
    vals.push([
      validators[i].consensusAddr,
      validators[i].bscFeeAddr,
      validators[i].feeAddr,
      validators[i].votingPower,
    ]);
  }
  let pkg = [0x00, vals];
  return web3.utils.bytesToHex(RLP.encode(pkg));
}

extraValidatorBytes = generateExtradata(validators);
validatorSetBytes = validatorUpdateRlpEncode(validators);

exports = module.exports = {
  extraValidatorBytes: extraValidatorBytes,
  validatorSetBytes: validatorSetBytes,
}
