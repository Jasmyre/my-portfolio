import React, { ReactNode } from "react";
import Link from "next/link";
import HeaderNavButton from "./HeaderNavButton";
import { ModeToggle } from "../../mode-toggle";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface HeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}

const Header = ({ children, className = "", ...props }: HeaderProps) => {
  return (
    <div
      className={cn(
        "sticky left-0 top-0 z-[9999] w-full border-b backdrop-blur-md backdrop-brightness-125 dark:backdrop-brightness-90",
        className,
      )}
      {...props}
    >
      <div className="container mx-auto flex h-[75px] max-w-screen-xl items-center justify-between px-6 py-6 lg:h-[90px] lg:px-9">
        <div className="flex items-center justify-center lg:gap-2">
          <ModeToggle />
          <h3 className="flex flex-col items-end justify-center text-2xl font-bold underline-hover after:w-0 hover:text-foreground">
            <Link href={"/"} className="min-w-max px-2 py-1 max-[325px]:hidden">
              {children}
            </Link>
          </h3>
        </div>
        <nav className="flex flex-row items-center justify-center">
          <input
            type="checkbox"
            id="hamburgerInputBox"
            className="peer hidden"
          />
          <label
            aria-label="Hamburger Button"
            htmlFor="hamburgerInputBox"
            className="group flex h-10 w-9 cursor-pointer flex-col items-center justify-center lg:hidden peer-checked:[&>div:nth-child(1)]:rotate-[-45deg] peer-checked:[&>div:nth-child(2)]:hidden peer-checked:[&>div:nth-child(3)]:rotate-[45deg]"
          >
            <div className="signal:rotate-[-45deg] h-[2px] w-[50%] origin-left translate-y-[0.45rem] rounded-sm bg-foreground transition-all duration-100"></div>
            <div className="signal:hidden h-[2px] w-[50%] origin-center rounded-md bg-foreground transition-all duration-100"></div>
            <div className="signal:rotate-[45deg] h-[2px] w-[50%] origin-left -translate-y-[0.45rem] rounded-md bg-foreground transition-all duration-100"></div>
          </label>
          <ul className="left-[100%] top-[75px] z-10 hidden h-[calc(100vh-75px)] w-full gap-3 bg-background transition-all duration-200 peer-checked:fixed peer-checked:left-0 peer-checked:block lg:static lg:z-auto lg:flex lg:h-min lg:bg-transparent peer-checked:lg:static peer-checked:lg:flex">
            <li className="flex items-center justify-center max-lg:py-3">
              <HeaderNavButton href="#home">Home</HeaderNavButton>
            </li>
            <li className="flex items-center justify-center max-lg:py-3">
              <HeaderNavButton href="#about">About</HeaderNavButton>
            </li>
            <li className="flex items-center justify-center max-lg:py-3">
              <HeaderNavButton href="#solution">Solution</HeaderNavButton>
            </li>
            <li className="flex items-center justify-center max-lg:py-3">
              <HeaderNavButton href="#portfolio">Portfolio</HeaderNavButton>
            </li>
            <li className="flex items-center justify-center max-lg:py-3">
              <HeaderNavButton href="#contact">Contact</HeaderNavButton>
            </li>
            <li className="flex items-center justify-center max-lg:py-3">
              <Button variant={"default"} className="bg-primary">
                Download CV
              </Button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
