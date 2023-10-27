import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const DropDown = ({ menuItem }) => {
  const [dropdownToggler, setDropdownToggler] = useState(false);
  const pathUrl = usePathname();
  return (
    <>
      <Link
        onClick={() => setDropdownToggler(!dropdownToggler)}
        className={`relative text-sm py-1.5 px-4 border border-transparent hover:text-white hover:nav-gradient flex items-center justify-between gap-3 ${
          pathUrl === menuItem.path
            ? "nav-gradient text-white"
            : "text-white/80"
        }`}
        href={`${menuItem.path ? menuItem.path : ""}`}
      >
        {menuItem.title}
        <span>
          <svg
            className="fill-current w-3 h-3 cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
          </svg>
        </span>
      </Link>

      <ul className={`dropdown ${dropdownToggler ? "flex" : ""}`}>
        {menuItem.submenu.map((item, key) => (
          <li key={key}>
            <Link
              href={item.path || "#"}
              className="flex text-sm text-white/70 hover:text-white py-2 px-4 rounded-md hover:bg-white/5"
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default DropDown;
