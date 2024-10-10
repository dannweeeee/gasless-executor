import {
  CallWithConcurrentERC2771Request,
  GelatoRelay,
} from "@gelatonetwork/relay-sdk-viem";

import { createWalletClient, http, encodeFunctionData, Hex } from "viem";
import { privateKeyToAccount } from "viem/accounts";
import { baseSepolia } from "viem/chains";

import * as dotenv from "dotenv";
dotenv.config({ path: ".env" });

import SkateNftAbi from "../abis/GojoNftAbi";

const testSponsoredCallERC2771 = async () => {
  const privateKey = process.env.PRIVATE_KEY;
  const account = privateKeyToAccount(`0x${privateKey}`);

  const GELATO_RELAY_API_KEY = process.env.GELATO_RELAY_API_KEY as string;

  const relay = new GelatoRelay();

  const client = createWalletClient({
    account,
    transport: http(
      `https://base-sepolia.g.alchemy.com/v2/${process.env.ALCHEMY_KEY}`
    ),
    chain: baseSepolia,
  });
  console.log(account.address);

  const skateNftContractAddress = "0xA75392507414677a884ee7a59c4893f5526447c4";
  const chainId = await client.getChainId();

  //encode function data
  const data = encodeFunctionData({
    abi: SkateNftAbi,
    functionName: "mintNft",
    args: [
      "https://turquoise-biological-warbler-896.mypinata.cloud/ipfs/QmYh8LvVByfXmMUGitG8ovkJj5FZ2c7ANuYQhRddgYbQwk",
    ],
  });

  const relayRequest = {
    user: account.address,
    chainId: BigInt(chainId),
    target: skateNftContractAddress,
    data: data as Hex,
    isConcurrent: true,
  } as CallWithConcurrentERC2771Request;

  const response = await relay.sponsoredCallERC2771(
    relayRequest,
    client as any,
    GELATO_RELAY_API_KEY
  );
  console.log(`https://relay.gelato.digital/tasks/status/${response.taskId}`);
};

testSponsoredCallERC2771();
