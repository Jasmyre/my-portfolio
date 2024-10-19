import React from "react";
import { TypoH1, TypoP } from "@/components/Typography";
import { Button } from "@/components/ui/button";

export const HeroSectionBlissBrew = () => {
  return (
    <section
      id="hero_section"
      className="z-[-1] relative min-h-[90vh] bg-background"
    >
      <div
        id="hero_section_wrapper"
        className="text-center container max-w-screen-xl mx-auto z-[9999] flex flex-col justify-end items-center relative h-[90vh] pb-20"
      >
        <h1 className="font-bold text-6xl text-white my-6">
          Every Sip is a Moment of Bliss
        </h1>
        <p className="text-white text-2xl">
          A cozy coffee shop in downtown where you can enjoy high-quality
          beverages and snacks in a relaxing environment.
        </p>
      </div>
    </section>
  );
};









const HeroSection = () => {
  return (
    <section id="Hero_section" className="scroll-m-20 border-b bg-box">
      <div className="absolute left-0 right-0 top-0 bottom-[25%] -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary opacity-20 blur-[100px]"></div>
      <div className="max-md:hidden absolute right-0 top-0 bottom-[25%] -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary opacity-20 blur-[100px]"></div>
      <div className="max-md:hidden absolute left-0 top-[25%] bottom-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary opacity-20 blur-[100px]"></div>

      <div
        id="hero_section_wrapper"
        className="container section min-h-[85vh] text-center flex flex-col justify-center items-center gap-10"
      >
        <div className="flex flex-col gap-2">
          <TypoH1 className="animate-[float-up_both_1s_ease] delay-1000">
            Minimalist <strong className="text-primary">Web Designer</strong> &{" "}
            <strong className="text-primary">Programmer</strong>
          </TypoH1>
          <TypoP className="animate-[float-up_both_1s_ease] delay-1000 text-secondary-foreground">
            I create simple, clean, and efficient web solutions.
          </TypoP>
        </div>

        <div className="flex gap-4 animate-[float-up_both_1s_ease] delay-1000 flex-wrap justify-center items-center">
          <Button variant={"outline"} className="bg-transparent flex-1">
            Download Resume
          </Button>
          <Button variant={"default"} className="flex-1">View Portfolio</Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
