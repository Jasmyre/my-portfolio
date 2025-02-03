import { TypoH1, TypoP } from "@/components/Typography";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Animated from "../../template/Animated";

export const HeroSectionBlissBrew = () => {
  return (
    <section
      id="hero_section"
      className="relative z-[-1] min-h-[90vh] bg-background"
    >
      <div
        id="hero_section_wrapper"
        className="container relative z-[9999] mx-auto flex h-[90vh] max-w-screen-xl flex-col items-center justify-end pb-20 text-center"
      >
        <h1 className="my-6 text-6xl font-bold text-white">
          Every Sip is a Moment of Bliss
        </h1>
        <p className="text-2xl text-white">
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
      <div className="bg-transparent dark:bg-transparent">
        <div className="absolute bottom-[25%] left-0 right-0 top-0 -z-10 m-auto hidden h-[310px] w-[310px] rounded-full bg-primary/50 opacity-20 blur-[100px] dark:block"></div>
        <div className="absolute bottom-[25%] right-0 top-0 -z-10 m-auto hidden h-[310px] w-[310px] rounded-full bg-primary/50 opacity-20 blur-[100px] dark:block max-md:hidden"></div>
        <div className="absolute bottom-0 left-0 top-[25%] -z-10 m-auto hidden h-[310px] w-[310px] rounded-full bg-primary/50 opacity-20 blur-[100px] dark:block max-md:hidden"></div>

        <div
          id="hero_section_wrapper"
          className="container flex min-h-[85vh] flex-col items-center justify-center gap-10 text-center section"
        >
          <div className="flex flex-col gap-2">
            <Animated>
              <TypoH1>
                Minimalist{" "}
                <strong className="text-primary">Web Designer</strong>&{" "}
                <strong className="text-primary">Programmer</strong>
              </TypoH1>
            </Animated>

            <Animated>
              <TypoP className="text-secondary-foreground">
                I create simple, clean, and efficient web solutions.
              </TypoP>
            </Animated>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Animated>
              <Button
                variant={"outline"}
                className="flex-1 bg-transparent"
                size={"lg"}
              >
                Download Resume
              </Button>
            </Animated>

            <Animated>
              <Button
                asChild
                variant={"default"}
                className="flex-1"
                size={"lg"}
              >
                <Link href={"#portfolio"}>View Portfolio</Link>
              </Button>
            </Animated>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
