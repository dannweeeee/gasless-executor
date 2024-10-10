import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

export default buildModule("GojoNft", (m) => {
  const name = "GojoNft";
  const symbol = "GOJO";
  const gelatoRelay = "0xc65d82ECE367EF06bf2AB791B3f3CF037Dc0e816";

  const gojoNft = m.contract("GojoNft", [name, symbol, gelatoRelay]);

  console.log(`GojoNft deployed to ${gojoNft.id}`);

  return { gojoNft };
});
