import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum'
import { Web3Modal } from '@web3modal/html'
import { configureChains, createConfig } from '@wagmi/core'
import { bsc, bscTestnet } from "@wagmi/core/chains"

const chains = [bscTestnet, bsc]
const projectId = '107dcb4dd9a4bc4dc47626c5dd590371'

const { publicClient } = configureChains(chains, [w3mProvider({ projectId })])
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, version: 1, chains }),
  publicClient
})
const ethereumClient = new EthereumClient(wagmiConfig, chains)
export const web3modal = new Web3Modal({ projectId }, ethereumClient)

web3modal.setTheme({
    themeVariables: {
      '--w3m-font-family': 'Roboto, sans-serif',
      '--w3m-accent-color': '#F5841F',
      '--w3m-z-index': 100
    }
})

export function bytestohex() {
  let bytes = window.crypto.getRandomValues(new Uint8Array(32));
  var hexstring = '', h;
  for (var i = 0; i < bytes.length; i++) {
      h = bytes[i].toString(16);
      if (h.length == 1) { h = '0' + h; }
      hexstring += h;
  }
  let msg = "Hi there! We just need you to sign this message to confirm that you have access to this wallet."
  return msg + hexstring + Date.now();
}


export const navigation = () => {
  const links = ['']
  return
}


