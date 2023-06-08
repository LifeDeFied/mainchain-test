import useCosmosBaseTendermintV1Beta1 from "../hooks/useCosmosBaseTendermintV1Beta1";
import { env } from "../env";
import { useEffect, useState } from "react";

export const useConnectionStatus = () => {
  const query = useCosmosBaseTendermintV1Beta1();
  const nodeInfo = query.ServiceGetNodeInfo({});
  const [apiConnected, setApiConnected] = useState(false);
  const [rpcConnected, setRpcConnected] = useState(false);
  const [wsConnected, setWsConnected] = useState(false);
  const [awsConnected, setAwsConnected] = useState(false);
  const [evmosConnected, setEvmConnected] = useState(false);
  
  useEffect(() => {
    setApiConnected(!nodeInfo.error);
  }, [nodeInfo]);

  const rpcCheck = async () => {
    try {
      await fetch(env.rpcURL);
      setRpcConnected(true);
      setWsConnected(true);
      setAwsConnected(true);
      setEvmConnected(true);
    } catch (e) {
      console.error(e);
      setRpcConnected(false);
      setWsConnected(false);
      setAwsConnected(false);
      setEvmConnected(false);
    } finally {
      setTimeout(rpcCheck, 10000);
    }
  };
  rpcCheck();
  return { apiConnected, rpcConnected, wsConnected, awsConnected, evmosConnected };
};
