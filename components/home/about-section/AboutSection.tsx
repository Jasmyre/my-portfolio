import React from "react";
import Image from "next/image";
import {
  TypoP,
  TypoLead,
  TypoMuted,
  TypoLarge,
  TypoH2,
} from "../../Typography";
import { Separator } from "../../ui/separator";
import { Badge } from "@/components/ui/badge";
import Animated from "../../template/Animated";

const badge: string[] = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "TailwindCSS",
  "React.JS",
  "Next.JS",
  "Shadcn-UI",
  "Java",
  "Python",
];

const AboutSection = () => {
  return (
    <section
      className="bg-Backgroud w-full border-b text-secondary-foreground backdrop-blur-md backdrop-brightness-125 dark:backdrop-brightness-90"
      id="about"
    >
      <div className="flex flex-col gap-6 section md:bg-box">
        <div className="flex py-40 max-lg:flex-col max-lg:gap-10">
          <div className="flex flex-1 items-center justify-center">
            <Animated>
              <Image
                src={"/dev.png"}
                alt="My Picture"
                width={325}
                height={325}
                className="shadow-3xl h-[250px] w-[250px] rounded-3xl border bg-background shadow-primary sm:h-[375px] sm:w-[375px]"
              />
            </Animated>
          </div>

          <div className="flex flex-1 flex-col items-start justify-center gap-4">
            <div className="flex flex-col gap-2">
              <div>
                <Animated>
                  <TypoLead>About Me</TypoLead>
                </Animated>

                <Animated>
                  <TypoP>
                    I&apos;m a web designer and programmer with a focus on
                    creating minimal and functional websites that enhance user
                    experience.
                  </TypoP>
                </Animated>
              </div>

              <Separator />

              <div className="flex flex-wrap gap-2 dark:[&>div]:text-white/75">
                {badge.map((badge) => {
                  return (
                    <Animated key={badge}>
                      <Badge className="text-white">{badge}</Badge>
                    </Animated>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <Separator></Separator>

        <div className="flex flex-col items-center justify-center gap-6 py-40">
          <div className="flex flex-col items-center justify-center">
            <Animated>
              <TypoH2>Education</TypoH2>
            </Animated>

            <Animated>
              <TypoMuted>I studied at...</TypoMuted>
            </Animated>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <Animated className="flex flex-col gap-4 rounded border bg-background p-10 max-[350px]:p-2">
              <div>
                <TypoMuted className="flex items-center justify-between">
                  <span>Senior High School</span>
                  <span>2023-2025</span>
                </TypoMuted>
                <TypoLarge>
                  Sumulong College of Arts and Sciences - Antipolo City
                </TypoLarge>
              </div>

              <div>
                <TypoLead>
                  Information Communication and Technologies (ICT)
                </TypoLead>
              </div>
            </Animated>

            <Animated className="flex flex-col gap-4 rounded border bg-background p-10">
              <div>
                <TypoMuted className="flex items-center justify-between">
                  <span>Junior High School</span>
                  <span>2019-2023</span>
                </TypoMuted>
                <TypoLarge>
                  San Roque National High School - Antipolo City
                </TypoLarge>
              </div>

              <div></div>
            </Animated>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
