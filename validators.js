const web3 = require("web3")
const RLP = require('rlp');

// Configure
const validators = [
  {
    consensusAddr: "0x1b2cc7424d58396f6553ffc00bb4d5ea34a04000",
    feeAddr: "0x1b2cc7424d58396f6553ffc00bb4d5ea34a04000",
    bscFeeAddr: "0x1b2cc7424d58396f6553ffc00bb4d5ea34a04000",
    votingPower: 0x0000000000000064
  },
  {
    consensusAddr: "0x2de412ccf7f1abfe7f9e209730ef38839604f24b",
    feeAddr: "0x2de412ccf7f1abfe7f9e209730ef38839604f24b",
    bscFeeAddr: "0x2de412ccf7f1abfe7f9e209730ef38839604f24b",
    votingPower: 0x0000000000000064
  },
  {
    consensusAddr: "0xce787e4f61446b47b0b5bd54bd6ff34adf7f247b",
    feeAddr: "0xce787e4f61446b47b0b5bd54bd6ff34adf7f247b",
    bscFeeAddr: "0xce787e4f61446b47b0b5bd54bd6ff34adf7f247b",
    votingPower: 0x0000000000000064
  },
  // {
  //   consensusAddr: "0xd16b07d8749f26a6f4e6587ef4d24ab4fadfee4e",
  //   feeAddr: "0xd16b07d8749f26a6f4e6587ef4d24ab4fadfee4e",
  //   bscFeeAddr: "0xd16b07d8749f26a6f4e6587ef4d24ab4fadfee4e",
  //   votingPower: 0x0000000000000064
  // },
  // {
  //   consensusAddr: "0x4e30857d09b0dbf8a991eb9562a6e7d555b9f498",
  //   feeAddr: "0x4e30857d09b0dbf8a991eb9562a6e7d555b9f498",
  //   bscFeeAddr: "0x4e30857d09b0dbf8a991eb9562a6e7d555b9f498",
  //   votingPower: 0x0000000000000064
  // },
  // {
  //   consensusAddr: "0x960b99c3ae10744bf7e62f72970e1e83a88ef40b",
  //   feeAddr: "0x960b99c3ae10744bf7e62f72970e1e83a88ef40b",
  //   bscFeeAddr: "0x960b99c3ae10744bf7e62f72970e1e83a88ef40b",
  //   votingPower: 0x0000000000000064
  // }
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
