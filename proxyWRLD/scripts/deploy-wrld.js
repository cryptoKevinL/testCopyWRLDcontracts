const hre = require("hardhat");
async function main() {
  const WRLD = await hre.ethers.getContractFactory("WRLD_Token_Polygon");
  //const nft = await WRLD.deploy("0x7fe3aedfc76d7c6dd84b617081a9346de81236dc", "0xa6fa4fb5f76172d178d61b04b0ecd319c5d1c0aa"); //real mainet values
  const nft = await WRLD.deploy("0xAC5C575cC357819C135DF84c48d6eAEae9287799", "0x6Dc77e11Ef57d9fBA318f3520d2BEA68A979313A");
  await nft.deployed();
  console.log("WRLD token deployed to:", nft.address);
}
main().then(() => process.exit(0)).catch(error => {
  console.error(error);
  process.exit(1);
});

