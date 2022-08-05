const web3 = require("web3")
const init_holders = [
  {
    address: "0x6464a9734Ed3B17e3216448d54D481aC3A89C82F",
    balance: web3.utils.toBN("500000000000000000000").toString("hex") // 500
  },
  {
    address: "0x05D30800f52012749ab74e44e20746061E8658D6",
    balance: web3.utils.toBN("500000000000000000000").toString("hex") // 500
  },
  {
    address: "0x691c2eaF3d021205Fd37EDE577526020a4B49fa8",
    balance: web3.utils.toBN("500000000000000000000").toString("hex") // 500
  }
  // {
  //   // private key is 0x9b28f36fbd67381120752d6172ecdcf10e06ab2d9a1367aac00cdcd6ac7855d3, only use in dev
  //   address: "0x9fB29AAc15b9A4B7F17c3385939b007540f4d791",
  //   balance: web3.utils.toBN("10000000000000000000000000").toString("hex")
  // }
  // {
  //   address: "0x6c468CF8c9879006E22EC4029696E005C2319C9D",
  //   balance: 10000 // without 10^18
  // }
];


exports = module.exports = init_holders
