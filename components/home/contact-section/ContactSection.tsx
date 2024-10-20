import React from "react";

import { TypoLarge, TypoH1 } from "../../Typography";
import ContactForm from "./ContactForm";
import { Mail, Phone, Github, Linkedin } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section className="relative" id="contact">
      <div className="container flex h-[90vh] min-h-[90vh] flex-col gap-10 bg-box section">
        <div className="flex flex-col lg:flex-row h-full gap-10">
          <div className="flex h-full gap-4 flex-1 flex-col justify-center">
            <div className="py-4">
              <TypoH1 className="text-primary">Contact me</TypoH1>
            </div>
            <div className="flex flex-col gap-2">
              <div>
                <TypoLarge className="flex gap-4">
                  <Mail />
                  lanuzajasmyreandrei@gmail.com
                </TypoLarge>
              </div>

              <div>
                <TypoLarge className="flex gap-4">
                  <Phone />
                  +63 987 - 654 - 32
                </TypoLarge>
              </div>

              <div className="py-0 flex gap-4">
                <Button asChild size={"icon"} variant={"outline"}>
                  <Link href={"https://github.com/Jasmyre"}>
                    <Github />
                  </Link>
                </Button>
                <Button asChild size={"icon"} variant={"outline"} >
                  <Link
                    href={
                      "https://www.linkedin.com/in/jasmyre-andrei-lanuza-092a972a1/?originalSubdomain=ph"
                    }
                  >
                    <Linkedin />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
          <div className="flex h-full flex-1 flex-col justify-center">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
