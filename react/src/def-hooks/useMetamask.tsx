import { useClient } from "../hooks/useClient";
import { useDispatchWalletContext } from "./walletContext";
import Web3 from "web3";
const ethereum = window.ethereum;

declare global {
    interface Window {
        ethereum: any;
    }
  }

export default function () {
  const client = useClient();
  const walletStore = useDispatchWalletContext();
  
  const connectToMetamask = async (onSuccessCb: () => void, onErrorCb: () => void) => {
    if (typeof ethereum !== 'undefined') {
        console.log('MetaMask is installed!');
      } else {
        console.error('Please install MetaMask!');
      }
    try {
        onSuccessCb
        const request = await ethereum.request({ method: 'eth_requestAccounts' });
        const accounts = await ethereum.request({ method: 'eth_accounts' });
        const account = accounts[0];
        console.log(request)
    } catch (e) {
        onErrorCb()
    }
  };

  const isMetamaskAvailable = !!window.ethereum;

  const getOfflineSigner = (chainId: string) => window.ethereum.getOfflineSigner(chainId);

  const getMetamaskAccParams = async (chainId: string) => await window.ethereum.getKey(chainId);

  const listenToAccChange = (cb: EventListener) => {
    client.on("signer-changed", cb);
  };

  return {
    connectToMetamask,
    isMetamaskAvailable,
    getOfflineSigner,
    getMetamaskAccParams,
    listenToAccChange,
  };
}
