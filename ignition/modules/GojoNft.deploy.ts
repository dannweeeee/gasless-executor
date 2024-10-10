import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";
import { gelatoRelay1BalanceConcurrentERC2771 } from "../../config/base-sepolia-contracts";

export default buildModule("GojoNft", (m) => {
  const name = "GojoNft";
  const symbol = "GOJO";
  const gelatoRelay = gelatoRelay1BalanceConcurrentERC2771;

  const gojoNft = m.contract("GojoNft", [name, symbol, gelatoRelay]);

  console.log(`GojoNft deployed to ${gojoNft.id}`);

  return { gojoNft };
});
