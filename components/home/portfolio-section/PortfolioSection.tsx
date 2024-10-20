import React from "react";
import { TypoH2, TypoMuted } from "@/components/Typography";
import Image from "next/image";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

const PortfolioSection = () => {
  return (
    <section
      className="relative text-secondary-foreground backdrop-blur-md backdrop-brightness-125 dark:backdrop-brightness-90"
      id="portfolio"
    >
      <div className="flex min-h-[90vh] flex-col items-center justify-center gap-10 bg-box section">
        <header className="text-center">
          <TypoH2>Portfolio</TypoH2>
          <TypoMuted>View my previous designs and projects</TypoMuted>
        </header>
        <div className="grid-row-3 grid h-full w-full grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:gap-6">
          <div className="group relative rounded-lg border object-cover object-center">
            <Image
              className="w-full rounded-lg"
              src={"/home/blissbrew.png"}
              alt={"my design1"}
              width={500}
              height={500}
            ></Image>
            <Card className="absolute left-0 top-0 hidden h-full max-h-full w-full flex-col group-hover:flex">
              <CardHeader>
                <CardTitle>BlissBrew</CardTitle>
                <CardDescription className="">
                  A WebDesign for a coffee shop
                </CardDescription>
              </CardHeader>
              <CardContent className="flex max-h-full flex-1 flex-wrap items-center justify-start gap-2 overflow-auto">
                <Badge>Next.JS</Badge>
                <Badge>CSS</Badge>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant={"outline"}>Source code</Button>
                <Button>Visit preview</Button>
              </CardFooter>
            </Card>
          </div>

          <div className="group relative rounded-lg border object-cover object-center">
            <Image
              className="w-full rounded-lg darken-bg"
              src={"/home/search4movies.png"}
              alt={"my design1"}
              width={500}
              height={500}
            ></Image>
            <Card className="absolute left-0 top-0 z-[9997] hidden h-full max-h-full w-full flex-col group-hover:flex">
              <CardHeader>
                <CardTitle>Search4Movies</CardTitle>
                <CardDescription className="">
                  A movie search website made with{" "}
                  <Link
                    className="text-primary underline"
                    href={"https://www.themoviedb.org/"}
                  >
                    TMDB
                  </Link>{" "}
                  API
                </CardDescription>
              </CardHeader>
              <CardContent className="flex max-h-full flex-1 flex-wrap items-center justify-start gap-2 overflow-auto">
                <Badge>Next.JS</Badge>
                <Badge>CSS</Badge>
                <Badge>API</Badge>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant={"outline"}>Source code</Button>
                <Button>Visit preview</Button>
              </CardFooter>
            </Card>
          </div>

          <div className="group relative rounded-lg border object-cover object-center">
            <Image
              className="w-full rounded-lg"
              src={"/home/scoopify.png"}
              alt={"my design1"}
              width={500}
              height={500}
            ></Image>
            <Card className="absolute left-0 top-0 hidden h-full max-h-full w-full flex-col group-hover:flex">
              <CardHeader>
                <CardTitle>Scoopify</CardTitle>
                <CardDescription className="">
                  A WebDesign template for an ice cream shop
                </CardDescription>
              </CardHeader>
              <CardContent className="flex max-h-full flex-1 flex-wrap items-center justify-start gap-2 overflow-auto">
                <Badge>JS</Badge>
                <Badge>HTML</Badge>
                <Badge>CSS</Badge>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant={"outline"}>Source code</Button>
                <Button>Visit preview</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
