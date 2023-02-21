# Wallet explorer

[![NextJs version](https://img.shields.io/github/package-json/dependency-version/Alderian/wallet-explorer/next?label=NextJS)](https://nextjs.org/)
[![Alchemy SDK](https://img.shields.io/github/package-json/dependency-version/Alderian/wallet-explorer/alchemy-sdk?label=Alchemy%20SDK)](https://docs.alchemy.com/reference/alchemy-sdk-quickstart)
[![Rainbow Kit](https://img.shields.io/github/package-json/dependency-version/Alderian/wallet-explorer/@rainbow-me/rainbowkit?label=Rainbow%20Kit)](https://github.com/rainbow-me/rainbowkit)
[![License](https://img.shields.io/github/license/Alderian/wallet-explorer)](https://github.com/Alderian/wallet-explorer/blob/main/LICENSE)

This dapp uses the Alchemy SDK rigged to Alchemy's Enhanced APIs in order to display all of an address's ERC-20 token balances and owned NFTs.

Created using [create-web3-dapp](https://github.com/alchemyplatform/create-web3-dapp)

## First steps

1. Install node >= 16 (You can use [nvm](https://github.com/nvm-sh/nvm))
2. Get an [Alchemy](https://www.alchemy.com) API Key

## Development

Install dependencies

```bash
npm install
```

Fill in the environment definitions needed for this project.

Copy the .env.example file to .env

```bash
cp .env.example .env
```

fill `ALCHEMY_API_KEY="<Your-Alchemy-SDK-Key>"`with your key

## Run project

```bash
npm run dev
```

And open http://localhost:3000
