import React, { ReactNode } from "react";
import Link from "next/link";
import HeaderNavButton from "@/components/template/header/HeaderNavButton";
import Animated from "@/components/template/Animated";
import { Button } from "@/components/ui/button";
import { Github, Linkedin } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

interface FooterProps {
  children?: ReactNode;
}

const FooterSection = ({ children }: FooterProps) => {
  return (
    <footer className="flex flex-col text-secondary-foreground backdrop-blur-md backdrop-brightness-125 dark:backdrop-brightness-90 [&>div:nth-child(odd)]:py-10">
      <div className="z-10 flex px-10">
        <div className="flex flex-1 items-center justify-center">
          <h3 className="flex w-max flex-col items-center justify-center text-2xl font-bold underline-hover after:w-0 hover:text-foreground">
            <Link href={"/"} className="min-w-max px-2 py-1 max-[325px]:hidden">
              <Animated>{children}</Animated>
            </Link>
          </h3>
        </div>

        <div className="flex-1">
          <nav className="h-full">
            <ul className="flex h-full items-center justify-center gap-4">
              <li className="flex items-center justify-center max-lg:py-3">
                <HeaderNavButton href="#home">
                  <Animated>Home</Animated>
                </HeaderNavButton>
              </li>
              <li className="flex items-center justify-center max-lg:py-3">
                <HeaderNavButton href="#about">
                  <Animated>About</Animated>
                </HeaderNavButton>
              </li>
              <li className="flex items-center justify-center max-lg:py-3">
                <HeaderNavButton href="#solution">
                  <Animated>Solution</Animated>
                </HeaderNavButton>
              </li>
              <li className="flex items-center justify-center max-lg:py-3">
                <HeaderNavButton href="#portfolio">
                  <Animated>Portfolio</Animated>
                </HeaderNavButton>
              </li>
              <li className="flex items-center justify-center max-lg:py-3">
                <HeaderNavButton href="#contact">
                  <Animated>Contact</Animated>
                </HeaderNavButton>
              </li>
            </ul>
          </nav>
        </div>

        <div className="flex flex-1 items-center justify-center">
          <div className="flex gap-4 py-0">
            <Animated>
              <Button asChild size={"icon"} variant={"outline"}>
                <Link href={"https://github.com/Jasmyre"}>
                  <Github />
                </Link>
              </Button>
            </Animated>

            <Animated>
              <Button asChild size={"icon"} variant={"outline"}>
                <Link
                  href={
                    "https://www.linkedin.com/in/jasmyre-andrei-lanuza-092a972a1/?originalSubdomain=ph"
                  }
                >
                  <Linkedin />
                </Link>
              </Button>
            </Animated>
          </div>
        </div>
      </div>

      <Separator />

      <div className="px-10">
        <p className="text-center">
          <Animated>&copy; 2024 Jasmyre Lanuza. All Rights Reserved.</Animated>
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
