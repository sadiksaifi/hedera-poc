import { Client, PrivateKey } from "@hashgraph/sdk";
import { configDotenv } from "dotenv";
configDotenv();

const operatorKey = PrivateKey.fromStringED25519(
  process.env.HEDERA_OPERATOR_KEY!,
);

// console.dir(operatorKey, { depth: Infinity });
export const hederaClient = () => {
  return Client.forTestnet().setOperator(
    process.env.HEDERA_OPERATOR_ID!,
    operatorKey,
  );
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
