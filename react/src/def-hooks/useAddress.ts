import { useState } from "react";
import { useClient } from "../hooks/useClient";

export const useAddress = () => {
  const client = useClient();
  const [address, setAddress] = useState({
    address: "",
    shortAddress: "",
  });

  const getAddress = async () => {
    let rawAddress = "";
    let shortAddress = "";

    if (typeof window.ethereum !== "undefined") {
      // Metamask is present
      await window.ethereum.request({ method: 'eth_requestAccounts' });
      const accounts = await window.ethereum.request({ method: 'eth_accounts' });
      rawAddress = accounts[0];
      shortAddress = rawAddress.substring(0, 10) + "..." + rawAddress.slice(-4);
    } else if (client.signer) {
      // Use the client's signer object
      const [{ address: rawAddress }] = await client.signer.getAccounts();
      shortAddress = rawAddress.substring(0, 10) + "..." + rawAddress.slice(-4);
    }
    
    return {
      address: rawAddress,
      shortAddress: shortAddress,
    };
  };

  client.on("signer-changed", async () => {
    const newAddress = await getAddress();
    setAddress((oldAddress) => {
      return oldAddress.address !== newAddress.address ? newAddress : oldAddress;
    });
  });

  window.addEventListener("keplr_keystorechange", async () => {
    const newAddress = await getAddress();
    setAddress((oldAddress) => {
      return oldAddress.address !== newAddress.address ? newAddress : oldAddress;
    });
  });

  window.addEventListener("metamask_accountsChanged", async () => {
    const newAddress = await getAddress();
    setAddress((oldAddress) => {
      return oldAddress.address !== newAddress.address ? newAddress : oldAddress;
    });
  });

  (async () => {
    const newAddress = await getAddress();
    if (address.address !== newAddress.address) {
      setAddress((oldAddress) => {
        return oldAddress.address !== newAddress.address ? newAddress : oldAddress;
      });
    }
  })();

  return address;
};
