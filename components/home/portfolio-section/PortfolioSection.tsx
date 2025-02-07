import React from "react";
import { TypoH2, TypoMuted } from "@/components/Typography";
import Image from "next/image";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

import Animated from '../../template/Animated';

const projects: {
  img: string;
  title: string;
  description: string;
  badges: string[];
  source: string;
  preview: string;
}[] = [
  {
    img: "/home/blissbrew.png",
    title: "BlissBrew",
    description: "A WebDesign for a coffee shop.",
    badges: ["Next.JS", "CSS"],
    source: "https://github.com/Jasmyre/blissbrew",
    preview: "https://blissbrew.vercel.app",
  },
  {
    img: "/home/search4movies.png",
    title: "Search4Movies",
    description: `A movie search website made with TMDB API.`,
    badges: ["Next.JS", "CSS", "API"],
    source: "https://github.com/Jasmyre/search4movies",
    preview: "https://search4movies.vercel.app/",
  },
  {
    img: "/home/scoopify.png",
    title: "Scoopify",
    description: `A WebDesign template for an ice cream shop.`,
    badges: ["HTML", "CSS", "JavaScript"],
    source: "https://github.com/Jasmyre/Scoopify",
    preview: "https://jasmyre.github.io/Scoopify",
  },
  {
    img: "/home/ictquest.png",
    title: "ICTQuest",
    description: `An application about learning HTML.`,
    badges: ["ShadcnUI", "Tailwindcss", "NextJS"],
    source: "https://github.com/Jasmyre/ictquest",
    preview: "https://ictquest.vercel.app/",
  },
];

const PortfolioSection = () => {
  return (
    <section
      className="relative text-secondary-foreground backdrop-blur-md backdrop-brightness-125 dark:backdrop-brightness-90"
      id="portfolio"
    >
      <div className="flex min-h-[90vh] flex-col items-center justify-center gap-10 bg-box section">
        <header className="text-center">
          <Animated>
            <TypoH2>Portfolio</TypoH2>
          </Animated>
          <Animated>
            <TypoMuted>View my previous designs and projects</TypoMuted>
          </Animated>
        </header>
        <div className="grid-row-3 grid items-center justify-center h-full w-full grid-cols-1 gap-10 md:grid-cols-2 lg:gap-6">
          {
            projects.map((project) => {
              return (
                <Animated
                  className="group relative rounded-lg border object-cover object-center"
                  key={project.title}
                >
                  <Link href={project.preview}>
                    <Image
                      className="md:hidden h-full w-full rounded-lg"
                      src={project.img}
                      alt={`${project.title}: ${project.description}`}
                      width={325}
                      height={100}
                    ></Image>
                  </Link>
                  <Image
                    className="max-md:hidden h-full w-full rounded-lg"
                    src={project.img}
                    alt={`${project.title}: ${project.description}`}
                    width={325}
                    height={100}
                  ></Image>

                  <Card className="absolute left-0 top-0 hidden h-full max-h-full w-full flex-col group-hover:flex max-md:group-hover:hidden">
                    <CardHeader>
                      <CardTitle>{project.title}</CardTitle>
                      <CardDescription className="line-clamp-1">
                        {project.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex max-h-full flex-1 flex-wrap items-center justify-start gap-2">
                      {project.badges.map((badge) => {
                        return (
                          <Badge key={badge} className="text-white">
                            {badge}
                          </Badge>
                        );
                      })}
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Button asChild variant={"outline"}>
                        <Link href={project.source} target="_blank">
                          Source Code
                        </Link>
                      </Button>
                      <Button asChild>
                        <Link href={project.preview} target="_blank">
                          Visit Preview
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </Animated>
              );
            })
          }
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
