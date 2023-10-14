const hre = require("hardhat");

async function main() {
  const owner = "0x8B8cE9DA22b1A0bBeB9f134549aBE203dBb680CB";

  const TiredLife = await hre.ethers.getContractFactory("TiredLife");
  const tiredLife = await TiredLife.deploy(owner);
  await tiredLife.waitForDeployment();

  console.log("My NFT deployed to:", tiredLife.target);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
