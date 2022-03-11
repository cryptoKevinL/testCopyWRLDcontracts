const hre = require("hardhat");
async function main() {
  const Forwarder = await hre.ethers.getContractFactory("WRLD_Forwarder_Polygon");
  const nft = await Forwarder.deploy();
  await nft.deployed();
  console.log("Forwarder deployed to:", nft.address);
}
main().then(() => process.exit(0)).catch(error => {
  console.error(error);
  process.exit(1);
});

