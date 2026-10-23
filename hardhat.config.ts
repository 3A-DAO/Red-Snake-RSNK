import { loadPrivateKey } from './security/foundry-keystore.js';
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
        loadPrivateKey('PRIVATE_KEY', false) !== undefined ? [loadPrivateKey('PRIVATE_KEY', false)] : [],
    },
    redbelly_testnet: {
      url: process.env.TESTNET_RPC_URL || "",
      accounts:
        loadPrivateKey('PRIVATE_KEY', false) !== undefined ? [loadPrivateKey('PRIVATE_KEY', false)] : [],
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
