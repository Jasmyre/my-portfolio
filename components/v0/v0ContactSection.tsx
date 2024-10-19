import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Contact Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <form className="space-y-4">
            <Input type="text" placeholder="Name" />
            <Input type="email" placeholder="Email" />
            <Textarea placeholder="Message" rows={4} />
            <Button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700"
            >
              Send Message
            </Button>
          </form>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
            <p className="flex items-center">
              <Mail className="mr-2" /> jasmyre.lanuza@example.com
            </p>
            <p className="flex items-center">
              <Phone className="mr-2" /> +1 (123) 456-7890
            </p>
            <div className="flex space-x-4  mt-4">
              <a href="#" className="text-blue-500 hover:text-blue-600">
                <Github size={24} />
              </a>
              <a href="#" className="text-blue-500 hover:text-blue-600">
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
