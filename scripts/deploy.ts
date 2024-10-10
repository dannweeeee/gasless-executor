import hre from "hardhat";

async function main() {
  const gelatoRelayAddress = "0xc65d82ECE367EF06bf2AB791B3f3CF037Dc0e816";

  const gojoNft = await hre.viem.deployContract("GojoNft", [
    "GojoNft",
    "GOJO",
    gelatoRelayAddress,
  ]);

  console.log(`GojoNft deployed to ${gojoNft.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
