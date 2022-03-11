const hre = require("hardhat");
async function main() {
  const WRLD = await hre.ethers.getContractFactory("NFT_Worlds_Players_V1");
  //const nft = await WRLD.deploy("0x7fe3aedfc76d7c6dd84b617081a9346de81236dc", "https://gateway.pinata.cloud/ipfs/"); //real mainet values
  const nft = await WRLD.deploy("0xAC9f2bcC8d99917a36d018C93C57d92D8484DE77", "https://gateway.pinata.cloud/ipfs/");
  await nft.deployed();
  console.log("NFT WRLD players contract deployed to:", nft.address);
}
main().then(() => process.exit(0)).catch(error => {
  console.error(error);
  process.exit(1);
});

