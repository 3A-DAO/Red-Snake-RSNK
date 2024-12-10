import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
// import "@nomiclabs/hardhat-etherscan";
import dotenv from "dotenv";
dotenv.config();

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.28",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  networks: {
    redbelly: {
      url: process.env.MAINNET_RPC_URL || "",
      accounts:
        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
    },
    redbelly_testnet: {
      url: process.env.TESTNET_RPC_URL || "",
      accounts:
        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
    },
  },
  etherscan: {
    apiKey: {
      redbelly: "redbelly", // apiKey is not required, just set a placeholder
    },
    customChains: [
      {
        network: "redbelly",
        chainId: 151,
        urls: {
          apiURL:
            "https://api.routescan.io/v2/network/mainnet/evm/151/etherscan",
          browserURL: "https://redbelly.routescan.io",
        },
      },
    ],
  },
};

export default config;
