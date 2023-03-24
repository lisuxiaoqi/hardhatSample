const { ethers } = require("hardhat");

async function main() {
  const contractAddress = "0x4B39164fEB51DCf0aA41b79526366DC553c994a4";
  const Contract = await ethers.getContractFactory("Sample");
  const contract = await Contract.attach(contractAddress);
  const ret = await contract.set(33);
  console.log(ret) 
  const counter = await contract.get();
  console.log("Counter:", counter);
}

main()
