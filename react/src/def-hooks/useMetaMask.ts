import { useClient } from "../hooks/useClient";
import { useDispatchWalletContext } from "./walletContext";
import Web3 from "web3";
import { ethers } from 'ethers';

const ethereum = window.ethereum;
declare global {
    interface Window {
        ethereum: any;
    }
  }

export default function () {
  const client = useClient();
  const walletStore = useDispatchWalletContext();

  const connectToMetaMask = async (onSuccessCb: () => void, onErrorCb: () => void) => {

    if (typeof ethereum !== 'undefined') {
        // const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        // const provider = new ethers.providers.Web3Provider(window.ethereum);
        // const signer = provider.getSigner();
        // const account = await signer.getAddress();
        // console.log('Current account:', account);

        // const network = await provider.getNetwork();
        // console.log('Chain ID:', network.chainId);

      } else {       
         console.error('Please install MetaMask!');
      }
    try {
        onSuccessCb
        const request = await ethereum.request({ method: 'eth_requestAccounts' });
        const accounts = await ethereum.request({ method: 'eth_accounts' });
        const account = accounts[0];
        
    } catch (e) {
        onErrorCb()
    }
  };

  const isMetaMaskAvailable = !!window.ethereum;

  const getOfflineSigner = (chainId: string) => window.ethereum.getOfflineSigner(chainId);

  const getMetaMaskAccParams = async (chainId: string) => await window.ethereum.getKey(chainId);
  console.log(getMetaMaskAccParams)

  const listenToAccChange = (cb: EventListener) => {
    client.on("signer-changed", cb);
  };

  return {
    connectToMetaMask,
    isMetaMaskAvailable,
    getOfflineSigner,
    getMetaMaskAccParams,
    listenToAccChange,
  };
}
