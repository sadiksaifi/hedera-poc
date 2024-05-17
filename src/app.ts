import { configDotenv } from "dotenv";
import { TokenCreateTransaction, TokenType, PrivateKey } from "@hashgraph/sdk";
import { hederaClient } from "./module/hedera-client.ts";
configDotenv();

async function createStablecoin() {
  const client = hederaClient();

  const treasuryKey = PrivateKey.generate();
  const adminKey = PrivateKey.generate();

  const transaction = await new TokenCreateTransaction()
    .setTokenName("MyStablecoin")
    .setTokenSymbol("MYS")
    .setTokenType(TokenType.NonFungibleUnique)
    .setTreasuryAccountId(client.operatorAccountId!)
    .setSupplyKey(treasuryKey)
    .setAdminKey(adminKey)
    .setInitialSupply(1000000)
    .setDecimals(2)
    .execute(client);

  const receipt = await transaction.getReceipt(client);
  const tokenId = receipt.tokenId;

  console.log("Stablecoin created with Token ID:", tokenId!.toString());
}

createStablecoin().catch(console.error);
