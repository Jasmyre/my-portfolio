import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
        <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-12">
          <Image
            src="/formal.png?height=200&width=200"
            alt="Jasmyre Lanuza"
            className="w-48 h-48 rounded-full object-cover"
            width={200}
            height={200}
          ></Image>
          <div className="max-w-lg text-center md:text-left">
            <p className="text-lg mb-4">
              I&apos;m a web designer and programmer specializing in creating clean,
              efficient, and visually appealing websites and apps.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-6">
              {[
                "HTML",
                "CSS",
                "JavaScript",
                "TypeScript",
                "React",
                "Next.js",
                "Tailwind CSS",
              ].map((skill) => (
                <span
                  key={skill}
                  className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
            <div className="flex justify-center md:justify-start space-x-4 mb-6">
              {["Communication", "Problem-solving", "Creativity"].map(
                (skill) => (
                  <span key={skill} className="text-sm">
                    {skill}
                  </span>
                ),
              )}
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Download className="mr-2 h-4 w-4" /> Download Resume
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
