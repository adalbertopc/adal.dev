import { NavLink } from "~/components";

const links = [
  {
    href: "/",
    children: "Home",
  },
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
  return (
    <nav>
      <ul className="flex justify-center gap-6">
        {links.map(({ href, children }) => (
          <li key={href}>
            <NavLink href={href}>{children}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
