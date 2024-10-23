import React from "react";

import { TypoLarge, TypoH1 } from "../../Typography";
import ContactForm from "./ContactForm";
import { Mail, Phone, Github, Linkedin } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Animated from "../../template/Animated";

const ContactSection = () => {
  return (
    <section className="relative" id="contact">
      <div className="absolute bottom-[25%] left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary/50 opacity-20 blur-[100px]"></div>
      <div className="absolute bottom-[25%] right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary/50 opacity-20 blur-[100px] max-md:hidden"></div>
      {/* <div className="absolute bottom-0 left-0 top-[25%] -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary/50 opacity-20 blur-[100px] max-md:hidden"></div> */}
      <div className="container flex min-h-[90vh] flex-col items-center justify-center gap-10 bg-box section">
        <div className="flex h-full w-full flex-col gap-10 lg:flex-row">
          <div className="flex h-full flex-1 flex-col justify-center gap-4">
            <div className="py-4">
              <Animated>
                <TypoH1 className="text-primary">Contact me</TypoH1>
              </Animated>
            </div>
            <div className="flex flex-col gap-2">
              <div>
                <Animated>
                  <TypoLarge className="flex gap-4">
                    <Mail />
                    lanuzajasmyreandrei@gmail.com
                  </TypoLarge>
                </Animated>
              </div>

              <div>
                <Animated>
                  <TypoLarge className="flex gap-4">
                    <Phone />
                    +63 987 - 654 - 32
                  </TypoLarge>
                </Animated>
              </div>

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
          <div className="flex h-full flex-1 flex-col justify-center">
            <Animated>
              <ContactForm />
            </Animated>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
