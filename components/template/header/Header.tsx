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
        "w-full border-b sticky top-0 left-0 backdrop-blur-md dark:backdrop-brightness-90 backdrop-brightness-125 z-[9999]",
        className,
      )}
      {...props}
    >
      <div className="container max-w-screen-xl mx-auto flex items-center justify-between py-6 lg:px-9 px-6 lg:h-[90px] h-[75px]">
        <div className="flex lg:gap-2 justify-center items-center">
          <ModeToggle />
          <h3 className="flex flex-col justify-center items-end after:w-0 text-2xl font-bold underline-hover hover:text-foreground">
            <Link href={"/"} className="py-1 px-2 min-w-max max-[325px]:hidden">
              {children}
            </Link>
          </h3>
        </div>
        <nav className="flex flex-row justify-center items-center">
          <input
            type="checkbox"
            id="hamburgerInputBox"
            className="peer hidden"
          />
          <label
            aria-label="Hamburger Button"
            htmlFor="hamburgerInputBox"
            className="group w-9 h-10 cursor-pointer flex flex-col items-center justify-center lg:hidden  peer-checked:[&>div:nth-child(1)]:rotate-[-45deg] peer-checked:[&>div:nth-child(2)]:hidden peer-checked:[&>div:nth-child(3)]:rotate-[45deg]"
          >
            <div className="w-[50%] h-[2px] bg-foreground rounded-sm transition-all duration-100 origin-left translate-y-[0.45rem] signal:rotate-[-45deg]"></div>
            <div className="w-[50%] h-[2px] bg-foreground rounded-md transition-all duration-100 origin-center signal:hidden"></div>
            <div className="w-[50%] h-[2px] bg-foreground rounded-md transition-all duration-100 origin-left -translate-y-[0.45rem] signal:rotate-[45deg]"></div>
          </label>
          <ul className="lg:flex gap-3 lg:static peer-checked:lg:static hidden peer-checked:block peer-checked:lg:flex peer-checked:fixed left-[100%] top-[75px] peer-checked:left-0 transition-all duration-200 lg:z-auto z-10 w-full lg:h-min h-[calc(100vh-75px)] bg-background lg:bg-transparent">
            <li className="flex items-center justify-center max-lg:py-3 ">
              <HeaderNavButton href="#home">Home</HeaderNavButton>
            </li>
            <li className="flex items-center justify-center max-lg:py-3 ">
              <HeaderNavButton href="#about">About</HeaderNavButton>
            </li>
            <li className="flex items-center justify-center max-lg:py-3 ">
              <HeaderNavButton href="#solution">Solution</HeaderNavButton>
            </li>
            <li className="flex items-center justify-center max-lg:py-3 ">
              <HeaderNavButton href="#portfolio">Portfolio</HeaderNavButton>
            </li>
            <li className="flex items-center justify-center max-lg:py-3 ">
              <HeaderNavButton href="#contact">Contact</HeaderNavButton>
            </li>
            <li className="flex items-center justify-center max-lg:py-3 ">
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
