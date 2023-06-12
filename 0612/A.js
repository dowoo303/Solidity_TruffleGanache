var { Web3 } = require("web3");
var web3 = new Web3(
  "https://goerli.infura.io/v3/88cd1369d4b0478b9b44c031a628b0bf"
);

var privateKey =
  "0xe30d7cfa303f3f5f018409c094ac5363287dcd233ad4b27d5c4d8efa641b0615";
var account = web3.eth.accounts.privateKeyToAccount(privateKey);

web3.eth.accounts.wallet.add(account);
web3.eth.defaultAccount = account.address;

var abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_a",
        type: "uint256",
      },
    ],
    name: "setA",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "a",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_a",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_b",
        type: "uint256",
      },
    ],
    name: "add",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];
var c_address = "0x122C9302E49f84B237754b78992260Bf4114593e";
var contract = new web3.eth.Contract(abi, c_address);

contract.methods.a().call().then(console.log);

var tx = {
  from: account.address,
  to: c_address,
  gas: 300000,
  gasPrice: 3000000,
  data: contract.methods.setA(123456).encodeABI(),
};
var signPromise = web3.eth.accounts.signTransaction(tx, account.privateKey);

signPromise.then((signedTx) => {
  var sentTx = web3.eth.sendSignedTransaction(
    signedTx.raw || signedTx.rawTransaction
  );
  sentTx.on("receipt", (receipt) => {
    console.log(receipt);
  });
});
