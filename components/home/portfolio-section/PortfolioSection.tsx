import React from 'react'
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
import { Badge } from '@/components/ui/badge';


const PortfolioSection = () => {
  return (
    <section className="relative bg-background" id="portfolio">
      <div className="section bg-box min-h-[90vh] flex flex-col justify-center items-center gap-10">
        <header className="text-center">
          <TypoH2>Portfolio</TypoH2>
          <TypoMuted>View my previous designs and projects</TypoMuted>
        </header>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 grid-row-3 gap-10 lg:gap-6 h-full w-full">
          <div className="group border rounded-lg object-cover object-center relative">
            <Image
              className="w-full rounded-lg"
              src={"/hero_image.png"}
              alt={"my design1"}
              width={500}
              height={500}
            ></Image>
            <Card className="absolute w-full h-full max-h-full top-0 left-0 group-hover:flex flex-col hidden">
              <CardHeader>
                <CardTitle>BlissBrew</CardTitle>
                <CardDescription className="">
                  A WebDesign for a coffee shop
                </CardDescription>
              </CardHeader>
              <CardContent className="flex justify-start items-center gap-2 flex-wrap flex-1 max-h-full overflow-auto">
                <Badge>Next.JS</Badge>
                <Badge>JS</Badge>
                <Badge>HTML</Badge>
                <Badge>CSS</Badge>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant={"outline"}>Source code</Button>
                <Button>View preview</Button>
              </CardFooter>
            </Card>
          </div>

          <div className="group border rounded-lg object-cover object-center relative">
            <Image
              className="w-full rounded-lg darken-bg"
              src={"/hero_image.png"}
              alt={"my design1"}
              width={500}
              height={500}
            ></Image>
            <Card className="absolute w-full h-full max-h-full top-0 left-0 group-hover:flex flex-col hidden z-[9997]">
              <CardHeader>
                <CardTitle>BlissBrew</CardTitle>
                <CardDescription className="">
                  A WebDesign for a coffee shop
                </CardDescription>
              </CardHeader>
              <CardContent className="flex justify-start items-center gap-2 flex-wrap flex-1 max-h-full overflow-auto">
                <Badge>Next.JS</Badge>
                <Badge>JS</Badge>
                <Badge>HTML</Badge>
                <Badge>CSS</Badge>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant={"outline"}>Source code</Button>
                <Button>View preview</Button>
              </CardFooter>
            </Card>
          </div>

          <div className="group border rounded-lg object-cover object-center relative">
            <Image
              className="w-full rounded-lg"
              src={"/hero_image.png"}
              alt={"my design1"}
              width={500}
              height={500}
            ></Image>
            <Card className="absolute w-full h-full max-h-full top-0 left-0 group-hover:flex flex-col hidden">
              <CardHeader>
                <CardTitle>BlissBrew</CardTitle>
                <CardDescription className="">
                  A WebDesign for a coffee shop
                </CardDescription>
              </CardHeader>
              <CardContent className="flex justify-start items-center gap-2 flex-wrap flex-1 max-h-full overflow-auto">
                <Badge>Next.JS</Badge>
                <Badge>JS</Badge>
                <Badge>HTML</Badge>
                <Badge>CSS</Badge>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant={"outline"}>Source code</Button>
                <Button>View preview</Button>
              </CardFooter>
            </Card>
          </div>


        </div>
      </div>
    </section>
  );
}

export default PortfolioSection