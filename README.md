# Gasless Executor

This is a simple implementation of a gasless executor using Gelato Relay.

1. The user signs a message with their private key and sends it to the executor.
2. The executor sends the signed message to the Gelato Relay.
3. The Gelato Relay sends the signed message to the Gelato Core.
4. The Gelato Core executes the task and sends the result back to the Gelato Relay.
5. The Gelato Relay sends the result back to the executor.
6. The executor sends the result back to the user.

In this case, the result is the GojoNft.

P.S. The Gelato Relay Concurrent ERC2771 is used in this implementation.

## Deployment

The contracts are deployed on the Base Sepolia testnet.

1. Setup hardhat.config,js with the network configuration and the private key.
2. Write the deployment script in `ignition/modules/GojoNft.deploy.ts`.
3. Run the following command to deploy script.

```
npx hardhat ignition deploy ignition/modules/GojoNft.deploy.ts --network base-sepolia
```

## Contracts

[GojoNft.sol - ERC721 contract](https://sepolia.basescan.org/address/0xA75392507414677a884ee7a59c4893f5526447c4)

## Setup

`.env` file should be created in the root directory with the following content:

```
PRIVATE_KEY=<private_key>
ALCHEMY_KEY=<alchemy_key>
GELATO_RELAY_ADDRESS=<gelato_relay_address>
```

```
npm install
```

## Test

```
npm run test
```
