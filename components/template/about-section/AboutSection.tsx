import React from "react";
import Image from "next/image";
import { TypoH4, TypoLead } from '../../Typography';

const AboutSection = () => {
  return (
    <div className="w-full">
      <div className="section bg-box flex max-lg:flex-col gap-6 max-lg:gap-20">
        <div className="flex-1 flex justify-center items-center">
          <Image
            src={"/dev.png"}
            alt="My Picture"
            width={325}
            height={325}
            className="rounded-full border ring-black shadow-md bg-background"
          ></Image>
        </div>
        <div className="flex-1 flex flex-col justify-center items-start">
            <TypoLead>About Me.</TypoLead>
            <TypoH4>
                I&apos;m a web designer and programmer with a focus on creating
                minimal and functional websites that enhance user experience.
            </TypoH4>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
