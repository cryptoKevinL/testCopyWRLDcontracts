const hre = require("hardhat");
async function main() {
  const WRLD = await hre.ethers.getContractFactory("WRLD_Token_Polygon");
  //const WALLET_ADDRESS = "0x0Db0448c95cad6D82695aC27022D20633C81b387"
  const WALLET_ADDRESS = "0x35f71FEf659f3bC898433603D575DceCD6e7663c";
  const CONTRACT_ADDRESS = "0x15C368c5c9d82EF2191e0BAEb357Ac718e474055";
  const contract = WRLD.attach(CONTRACT_ADDRESS);
  await contract.getSomeTokens(WALLET_ADDRESS, 0);
  console.log("WRLD minted:", contract);
}
main().then(() => process.exit(0)).catch(error => {
  console.error(error);
  process.exit(1);
});
