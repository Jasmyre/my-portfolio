import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import Image from "next/image";
import { TypoH3, TypoP } from '../../Typography';

export function ProjectCard() {
  return (
    <Drawer>
      <DrawerTrigger>
        <Image
          className="w-full rounded-lg"
          src={"/hero_image.png"}
          alt={"my design1"}
          width={500}
          height={500}
        ></Image>
      </DrawerTrigger>
      <DrawerContent className="">
        <div className="max-w-screen-xl mx-auto">
          <DrawerHeader>
            <div className="text-center">
              <DrawerTitle>Design</DrawerTitle>
              <DrawerDescription>Visit</DrawerDescription>
            </div>
          </DrawerHeader>

          <div className="py-10 px-6 flex flex-col max-h-[60vh] overflow-y-auto gap-6">
            <div className="flex justify-center items-center">
              <Image
                className="rounded-lg"
                src={"/hero_image.png"}
                alt={"my design1"}
                width={500}
                height={500}
              />
            </div>
            <div className="text-center">
              <TypoH3>BlissBrew</TypoH3>
              <TypoP>
                A cozy coffee shop in downtown where you can enjoy high-quality
                beverages and snacks in a relaxing environment.
              </TypoP>
            </div>
          </div>

          <DrawerFooter className="flex flex-col justify-center items-center gap-6 max-w-xs mx-auto">
            <Button className="w-full" variant={"default"}>
              Visit preview
            </Button>
            <Button className="w-full" variant={"outline"}>
              Source Code
            </Button>
            <DrawerClose className="flex-1 w-full">
              <Button variant="outline" className="w-full">
                Exit
              </Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
