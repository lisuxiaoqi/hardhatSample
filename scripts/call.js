const { ethers } = require("hardhat");

async function main() {
  const contractAddress = "0xCC92B6F613fE32407A17c4C34e2ecE2Af3A0ca1F";
  const Contract = await ethers.getContractFactory("Sample");
  const contract = await Contract.attach(contractAddress);
  const ret = await contract.set(33);
  console.log(ret) 
  const counter = await contract.get();
  console.log("Counter:", counter);
}

main()
