import { HardhatUserConfig } from "hardhat";

const config: HardhatUserConfig = {
  solidity: "0.8.20",
  networks: {
    moca_testnet: {
      url: process.env.MOCA_TESTNET_RPC || "https://testnet.mocachain.io",
      accounts: [process.env.PRIVATE_KEY || ""],
    },
  },
};

export default config;