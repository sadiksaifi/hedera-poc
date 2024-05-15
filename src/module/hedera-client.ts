import { Client, PrivateKey } from "@hashgraph/sdk";

const operatorKey = PrivateKey.fromStringECDSA(
  process.env.HEDERA_OPERATOR_KEY!,
);

export const hederaClient = () => {
  if (process.env.HEDERA_NETWORK === "mainnet") {
    return Client.forMainnet().setOperator(
      process.env.HEDERA_OPERATOR_ID!,
      operatorKey,
    );
  } else {
    return Client.forTestnet().setOperator(
      process.env.HEDERA_OPERATOR_ID!,
      operatorKey,
    );
  }
};
// export const hederaClient = () => {
//   if (process.env.HEDERA_NETWORK === "mainnet") {
//     return Client.forMainnet().setOperator(
//       process.env.HEDERA_OPERATOR_ID!,
//       process.env.HEDERA_OPERATOR_KEY!,
//     );
//   } else {
//     return Client.forTestnet().setOperator(
//       process.env.HEDERA_OPERATOR_ID!,
//       process.env.HEDERA_OPERATOR_KEY!,
//     );
//   }
// };
