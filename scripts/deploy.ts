const hre = require("hardhat");

async function main() {
  console.log("Deploying RedSnake Token...");

  const initialHolder = "0x7E7D1Ce9ee92B847C4c1410a51A05EDF0b4cB6C3"

  const RedSnake = await hre.ethers.getContractFactory("RedSnake");
  const redSnake = await RedSnake.deploy(initialHolder);

  await redSnake.waitForDeployment();
  const address = await redSnake.getAddress();

  console.log("RedSnake Token deployed to:", address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  }); 