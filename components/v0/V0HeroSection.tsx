import { Button } from "@/components/ui/button";
import Image from 'next/image';

export default function Hero() {
  return (
    <section id="home" className="py-20 text-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        Hi, I&apos;m Jasmyre Lanuza
      </h1>
      <p className="text-xl md:text-2xl mb-8">
        Minimalist Web Designer & Programmer
      </p>
      <Button className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3">
        View Portfolio
      </Button>
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="relative overflow-hidden rounded-lg shadow-lg"
          >
            <Image
              src={`/hero.png`}
              alt={`Project ${i}`}
              className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
              width={300}
              height={200}
            ></Image>
          </div>
        ))}
      </div>
    </section>
  );
}
