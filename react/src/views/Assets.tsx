/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import IgntAssets from "../components/assets/IgntAssets";
import IgntTransactions from "../components/transactions/IgntTransactions";
import IgntTransfer from "../components/transfer/IgntTransfer";
import LifeDonation from "../components/donation/LifeDonation";

export default function Assets() {
  return (
    <div>
      <div className="container mx-auto">
        <div className="grid grid-cols-2">
          <div>
            <IgntAssets className="px-2.5 mb-10" displayLimit={3} />
            <IgntTransactions className="px-2.5" />
          </div>
          <IgntTransfer className="px-2.5 w-4/6 mx-auto" />
          <LifeDonation className="px-2.5" />
        </div>
      </div>
    </div>
  );
}
