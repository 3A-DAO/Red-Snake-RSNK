import { expect } from "chai";
import { ethers } from "hardhat";
import { RedSnake } from "../typechain-types";
import { SignerWithAddress } from "@nomicfoundation/hardhat-ethers/signers";

describe("RedSnake Token", function () {
  let RedSnakeFactory;
  let redSnake: RedSnake;
  let owner: SignerWithAddress;
  let addr1: SignerWithAddress;
  let addr2: SignerWithAddress;
  let addrs: SignerWithAddress[];

  beforeEach(async function () {
    // Get the ContractFactory and Signers here.
    RedSnakeFactory = await ethers.getContractFactory("RedSnake");
    [owner, addr1, addr2, ...addrs] = await ethers.getSigners();

    // Deploy a new RedSnake contract before each test
    redSnake = await RedSnakeFactory.deploy(owner.address) as RedSnake;
  });

  describe("Deployment", function () {
    it("Should assign the total supply of tokens to the initial holder", async function () {
      const ownerBalance = await redSnake.balanceOf(owner.address);
      expect(await redSnake.totalSupply()).to.equal(ownerBalance);
    });

    it("Should have correct total supply", async function () {
      const expectedSupply = ethers.parseUnits("8888888888", 18);
      expect(await redSnake.totalSupply()).to.equal(expectedSupply);
    });
  });

  describe("Transactions", function () {
    it("Should transfer tokens between accounts", async function () {
      // Transfer 50 tokens from owner to addr1
      const transferAmount = ethers.parseUnits("50", 18);
      await redSnake.transfer(addr1.address, transferAmount);
      expect(await redSnake.balanceOf(addr1.address)).to.equal(transferAmount);

      // Transfer 50 tokens from addr1 to addr2
      await redSnake.connect(addr1).transfer(addr2.address, transferAmount);
      expect(await redSnake.balanceOf(addr2.address)).to.equal(transferAmount);
    });

    it("Should fail if sender doesn't have enough tokens", async function () {
      const initialOwnerBalance = await redSnake.balanceOf(owner.address);
      await expect(
        redSnake.connect(addr1).transfer(owner.address, 1)
      ).to.be.revertedWithCustomError(redSnake, "ERC20InsufficientBalance");
      expect(await redSnake.balanceOf(owner.address)).to.equal(initialOwnerBalance);
    });
  });
}); 