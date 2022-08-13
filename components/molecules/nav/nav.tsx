import { useEffect, useState } from "react";
import clsx from "clsx";
import { MenuIcon } from "@heroicons/react/solid";
import { Link, NavLink, EmojiSunglasses } from "~/components";

const links = [
  {
    href: "/blog",
    children: "Blog",
  },

  {
    href: "/about",
    children: "About",
  },
  {
    href: "/contact",
    children: "Contact",
  },
];

export const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleLinkClick = () => setIsOpen(false);

  return (
    <nav className="w-full flex justify-between">
      <div className="w-full flex justify-between sm:hidden">
        <Link href="/" onClick={handleLinkClick}>
          <EmojiSunglasses width={36} height={36} />
        </Link>
        <button
          type="button"
          className="inline-flex items-center p-2 transition-colors text-sm text-black rounded-md  hover:bg-gray-100 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <MenuIcon className="w-5 h-5" />
        </button>
      </div>
      <div
        className={clsx(
          "bg-white w-full absolute top-16 left-0  sm:static sm:block sm:w-auto",
          {
            hidden: !isOpen,
          }
        )}
      >
        <div className="shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1)] sm:shadow-none mx-6 sm:mx-0 rounded-md sm:rounded-none p-2 sm:p-0">
          <ul
            className={clsx(
              "flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6"
            )}
          >
            <li className="hidden sm:block">
              <Link href="/" onClick={handleLinkClick}>
                Home
              </Link>
            </li>
            {links.map(({ href, children }) => (
              <li
                key={href}
                className="transition-colors p-2 sm:p-0 rounded-md sm:rounded-none hover:bg-gray-100 sm:hover:bg-transparent"
              >
                <NavLink
                  href={href}
                  className="inline-block w-full"
                  onClick={handleLinkClick}
                >
                  {children}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
