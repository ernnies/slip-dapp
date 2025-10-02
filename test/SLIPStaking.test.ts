import { ethers } from "hardhat";
import { expect } from "chai";

describe("SLIPStaking", function () {
  it("should create a pool", async function () {
    const SLIP = await ethers.getContractFactory("SLIPStaking");
    const [deployer] = await ethers.getSigners();
    const slip = await SLIP.deploy("0xMocaTokenAddress"); // Mock address
    await slip.createPool(["0x123", "0x456"], "0xSessionKey");
    const pool = await slip.getPool(1);
    expect(pool.active).to.be.true;
  });

  it("should allow staking", async function () {
    const SLIP = await ethers.getContractFactory("SLIPStaking");
    const slip = await SLIP.deploy("0xMocaTokenAddress");
    await slip.createPool(["0x123"], "0xSessionKey");
    await slip.stake(1, ethers.utils.parseEther("100"));
    const pool = await slip.getPool(1);
    expect(pool.stakedAmount).to.equal(ethers.utils.parseEther("100"));
  });
});