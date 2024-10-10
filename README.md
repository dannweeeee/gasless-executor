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
