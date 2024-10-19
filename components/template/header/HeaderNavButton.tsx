import React, { ReactNode } from "react";

import Link, { LinkProps } from "next/link";
import { Button } from "../../ui/button";

interface Props extends LinkProps {
  children: ReactNode;
}

const HeaderNavButton: React.FC<
  Props & React.HTMLAttributes<HTMLAnchorElement>
> = ({ children, href = "#" }: Props) => {
  return (
    <Link
      href={href}
      className="h-full lg:w-ful flex flex-col underline-hover max-lg:border-b"
    >
      <Button
        variant={"ghost"}
        className="rounded-none py-2 px-6 h-full w-ful hover:bg-transparent hover:font-semibold"
      >
        {children}
      </Button>
    </Link>
  );
};

export default HeaderNavButton;
