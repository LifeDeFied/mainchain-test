import { IgntLink } from "@ignt/react-library";
import IgntAcc from "../accounts/IgntAcc";
import logo from "./igntheaderlogo.gif";
import "./IgntHeader.css";

type MenuItem = {
  label: string;
  to?: string;
  href?: string;
};

interface IgntHeaderProps {
  navItems: Array<MenuItem>;
}

export default function IgntHeader(props: IgntHeaderProps) {
  const { navItems } = props;

  return (
    <header className="flex p-5">
      <img src={logo} alt="Logo" className="mx-2.5" />
      <nav className="flex flex-1 justify-between">
        <ul className="flex items-center">
          {navItems.map((item) => (
            <li className="text-3 px-4 font-normal custom-active-link-class custom-a-tag-class" key={item.label}>
              <IgntLink item={item}></IgntLink>
            </li>
          ))}
        </ul>
        <div>
          <IgntAcc />
        </div>
      </nav>
    </header>
  );
}
