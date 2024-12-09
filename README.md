# RedSnake Token (RSNK)

RedSnake (RSNK) is an ERC20 token implemented using OpenZeppelin's ERC20 standard. The token has a total supply of 8,888,888,888 RSNK with 18 decimals.

**Deployed Contract Address**:  
[0xA687d3ddF6152405B428c9280EEA4fBf79fAE593](https://redbelly.routescan.io/token/0xA687d3ddF6152405B428c9280EEA4fBf79fAE593)  
**Network**: RedBelly Mainnet

## Contract Details

- **Token Name**: Red Snake
- **Token Symbol**: RSNK
- **Total Supply**: 8,888,888,888 RSNK
- **Decimals**: 18
- **Solidity Version**: 0.8.28

## Project Structure

- `contracts/`: Contains the Solidity smart contract.
- `scripts/`: Deployment scripts.
- `test/`: Test files.
- `hardhat.config.ts`: Hardhat configuration file.

## Security

- **OpenZeppelin Contracts**: Built using battle-tested contracts.
- **Comprehensive Test Coverage**: Ensures reliability.
- **Latest Solidity Version**: Utilizes security benefits.

## Features

- **Standard ERC20 functionality**: Ensures compatibility with Ethereum wallets and exchanges.
- **Fixed total supply**: 8,888,888,888 RSNK.
- **18 decimal places**: For precise transactions.
- **Security and reliability**: Built with OpenZeppelin contracts.

## Prerequisites

- **Node.js**: v14+ recommended.
- **Package Manager**: npm or yarn.
- **EVM RPC URL**: Required for deployment.
- **Etherscan API Key**: For contract verification.

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/3A-DAO/Red-Snake-RSNK.git
   cd Red-Snake-RSNK
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

## Configuration

1. **Create a `.env` file** in the root directory with the following variables:
   ```plaintext
   PRIVATE_KEY=your_wallet_private_key
   TESTNET_RPC_URL=your_testnet_rpc_url
   MAINNET_RPC_URL=your_mainnet_rpc_url
   ETHERSCAN_API_KEY=your_etherscan_api_key
   ```

## Testing

The project includes comprehensive tests for deployment and transaction scenarios.

- **Run tests**:
  ```bash
  npx hardhat test
  ```

- **Run tests with coverage report**:
  ```bash
  npx hardhat coverage
  ```

## Deployment

### Local Deployment

To deploy on a local Hardhat network:

```bash
npx hardhat node
npx hardhat run scripts/deploy.js --network localhost
```

### Testnet Deployment

To deploy on a testnet (e.g., Sepolia):

```bash
npx hardhat run scripts/deploy.js --network testnet
```

### Mainnet Deployment

To deploy on the Ethereum mainnet:

```bash
npx hardhat run scripts/deploy.js --network mainnet
```

## Contract Verification

After deployment, verify your contract on Etherscan:

```bash
npx hardhat verify --network <network> <deployed_contract_address> <constructor_arguments>
```

## License

This project is licensed under the BUSL-1.1 License.