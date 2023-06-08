const apiURL = import.meta.env.VITE_API_COSMOS ?? "http://localhost:1317";
const rpcURL = import.meta.env.VITE_WS_TENDERMINT ?? "http://localhost:26657";
const prefix = import.meta.env.VITE_ADDRESS_PREFIX ?? "cosmos";
const awsAPI = import.meta.env.VITE_AWS_API ?? "http://44.202.118.253:3000/";
const evmosAPI = import.meta.env.VITE_EVMOS_API ?? "rest.bd.evmos.dev:1317";

export const env = {
  apiURL,
  rpcURL,
  prefix,
  awsAPI,
  evmosAPI,
};