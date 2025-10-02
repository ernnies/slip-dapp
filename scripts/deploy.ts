import { ethers } from "hardhat";

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with account:", deployer.address);

  const MocaTokenAddress = "0xYourMocaTokenAddress"; // Replace with testnet $MOCA
  const SLIPStaking = await ethers.getContractFactory("SLIPStaking");
  const slip = await SLIPStaking.deploy(MocaTokenAddress);

  await slip.deployed();
  console.log("SLIPStaking deployed to:", slip.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});