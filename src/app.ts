import { InitializationRequest, Network } from "@hashgraph/stablecoin-npm-sdk";

(async () => {
  await Network.init(
    new InitializationRequest({
      network: "testnet",
      mirrorNode: {
        baseUrl: "https://testnet.mirrornode.hedera.com",
      },
      rpcNode: {
        baseUrl: "https://testnet-stablecoin.grpc.hedera.com",
      },
      backend: {
        url: "http://127.0.0.1:3001/api/",
      },
    }),
  );
})();
