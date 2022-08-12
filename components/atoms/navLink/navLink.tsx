import { Link, LinkProps } from "~/components";
import { Router, withRouter } from "next/router";
import clsx from "clsx";

interface NavLinkProps extends LinkProps {
  router: Router;
}

export const NavLink = withRouter(
  ({ router, href, children, ...props }: NavLinkProps) => (
    <Link
      href={href}
      className={clsx({
        "font-semibold": `/${router.pathname.split("/")[1]}` === href,
      })}
      {...props}
    >
      {children}
    </Link>
  )
);
