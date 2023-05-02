import { useAddressContext } from "../def-hooks/addressContext";
import { IgntTabs } from "@ignt/react-library";
import IgntSend from "./IgntSend";
import "./LifeDonation.css";

interface IgntTransferProps {
  className?: string;
}
export default function LifeDonation(props: IgntTransferProps) {
  const { address } = useAddressContext();
  return (
    <IgntTabs
      tabHeaderClasses={["text-3xl", "font-semibold", "p-0", "m-0", "mb-2.5", "flex-1"]}
      tabLinkClasses={["pr-4"]}
      inactiveLinkClasses={["text-gray-400"]}
      activeLinkClasses={["custom-active-link-class"]}
      className={props.className ?? ""}
    >
      <div className="" title="Donate">
      <div className="text-left text-black opacity-75 text-md font-normal py-8">You have no tokenized assets to donate</div>
        {address && <IgntSend />}
      </div>
    </IgntTabs>
  );
}
