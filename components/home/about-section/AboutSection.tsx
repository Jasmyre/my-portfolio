import React from "react";
import Image from "next/image";
import { TypoP, TypoLead, TypoMuted, TypoLarge, TypoH2 } from '../../Typography';
import { Separator } from "../../ui/separator";
import { Badge } from "@/components/ui/badge";

const AboutSection = () => {
  return (
    <section className="w-full bg-Backgroud text-secondary-foreground border-b backdrop-blur-md dark:backdrop-brightness-90 backdrop-brightness-125" id="about">
      <div className="section flex flex-col gap-6 md:bg-box">
        <div className="flex py-40 max-lg:flex-col max-lg:gap-10">
          <div className="flex-1 flex justify-center items-center">
            <Image
              src={"/dev.png"}
              alt="My Picture"
              width={325}
              height={325}
              className=" border  shadow-3xl shadow-primary bg-background rounded-3xl w-[250px] h-[250px] sm:w-[375px] sm:h-[375px]"
            ></Image>
          </div>

          <div className="flex-1 flex flex-col justify-center items-start gap-4">
            <div className="flex flex-col gap-2">
              <div>
                <TypoLead>About Me</TypoLead>
                <TypoP>
                  I&apos;m a web designer and programmer with a focus on
                  creating minimal and functional websites that enhance user
                  experience.
                </TypoP>
              </div>

              <Separator />

              <div className="flex gap-2 flex-wrap dark:[&>div]:text-white/75">
                <Badge>Html</Badge>
                <Badge>CSS</Badge>
                <Badge>JavaScript</Badge>
                <Badge>TypeScript</Badge>
                <Badge>Tailwind</Badge>
                <Badge>React.JS</Badge>
                <Badge>Next.js</Badge>
                <Badge>Shadcn</Badge>
                <Badge>Java</Badge>
                <Badge>Python</Badge>
              </div>
            </div>
          </div>
        </div>

        <Separator></Separator>

        <div className="flex flex-col items-center justify-center gap-6 py-40">
          <div className="flex flex-col justify-center items-center">
            <TypoH2>Education</TypoH2>
            <TypoMuted>I studied at...</TypoMuted>
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
            <div className="p-10 border rounded flex flex-col gap-4 bg-background">
              <div>
                <TypoMuted className="flex justify-between items-center">
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
            </div>

            <div className="p-10 border rounded flex flex-col gap-4 bg-background">
              <div>
                <TypoMuted className="flex justify-between items-center">
                  <span>Junior High School</span>
                  <span>2019-2023</span>
                </TypoMuted>
                <TypoLarge>
                  San Roque National High School - Antipolo City
                </TypoLarge>
              </div>

              <div></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
