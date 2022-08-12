import { AnchorHTMLAttributes, forwardRef } from "react";
import NextLink, { LinkProps as NextLinkProps } from "next/link";
import { ExternalLinkIcon } from "@heroicons/react/solid";

import clsx from "clsx";

export interface LinkProps
  extends NextLinkProps,
    Omit<
      AnchorHTMLAttributes<HTMLAnchorElement>,
      "onClick" | "onMouseEnter" | "onMouseEnter" | "onTouchStart"
    > {
  href: string;
  showExternalIcon?: boolean;
}

export const Link: React.FC<LinkProps> = forwardRef<
  HTMLAnchorElement,
  LinkProps
>(({ href, className, showExternalIcon, children, replace, ...props }, ref) => {
  const rootClassName = clsx(className, {
    "inline-flex items-center": showExternalIcon,
  });

  return (
    <NextLink href={href} replace={replace}>
      <a className={rootClassName} ref={ref} {...props}>
        {children} {showExternalIcon && <ExternalLinkIcon width={16} />}
      </a>
    </NextLink>
  );
});

Link.displayName = "Link";

export default Link;
