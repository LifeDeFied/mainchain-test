import { createBrowserRouter, Outlet } from "react-router-dom";

import IgntHeader from "../components/IgntHeader";
import Assets from "../views/Assets";
import Staking from "../views/Staking";
import Market from "../views/Market";
import Networks from "../views/Networks";
import Identity from "../views/Identity";



const items = [
  {
    label: "Assets",
    to: "/",
  },
  {
    label: "Staking",
    to: "/staking",
  },
  {
    label: "Market",
    to: "/market",
  },
  {
    label: "Networks",
    to: "/networks",
  },
  {
    label: "Identity",
    to: "/identity",
  },
];
const Layout = () => {
  return (
    <>
      <IgntHeader navItems={items} />
      <Outlet />
    </>
  );
};
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Assets /> },
      { path: "/staking", element: <Staking /> },
      { path: "/market", element: <Market /> },
      { path: "/networks", element: <Networks /> },
      { path: "/identity", element: <Identity /> },
    ],
  },
]);

export default router;
