const hre = require("hardhat");
async function main() {
  const ChildChain = await hre.ethers.getContractFactory("ChildChainManagerProxy");
  const nft = await ChildChain.deploy("0x0000000000000000000000000000000000000000");
  await nft.deployed();
  console.log("ChildChainManagerProxy deployed to:", nft.address);
}
main().then(() => process.exit(0)).catch(error => {
  console.error(error);
  process.exit(1);
});

