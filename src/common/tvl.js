
const sdk = require("@defillama/sdk");

import {
  ethers
} from 'ethers';
import {
  provider_avax
} from './provider-avax';


const abi = require('./abi/abi.json')

export const tvl = async () => {

  const block = await provider_avax.getBlockNumber()

  const addresses = await getProcolAddresses(43114)

  const vaultsAddresses = addresses['Vaults']

  for (let i = 0; i < vaultsAddresses.length; i++) {
    /// @dev getting balances that each of workers holding
    const stakingTokenInfos = (
      await sdk.api.abi.multiCall({
        block,
        abi: abi.userInfo,
        calls: vaultsAddresses[i]["workers"].map((worker) => {
          return {
            target: worker["stakingTokenAt"],
            params: [worker["pId"], worker["address"]],
          };
        }),
        chain,
      })
    ).output;

    // console.log('stakingTokenInfos', stakingTokenInfos);

  }
}

async function getProcolAddresses(chain) {
  if (chain == 43114) {
    return (
      await axios.get(
        "https://raw.githubusercontent.com/Apoy-Fi/apoy-protocol/main/.avalanche_mainnet.json"
      )
    ).data;
  }
}