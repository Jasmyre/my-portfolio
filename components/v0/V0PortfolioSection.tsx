"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

type Projects = {
  id?: number;
  title?: string;
  description?: string;
};

const projects: Projects[] = [
  {
    id: 1,
    title: "Project 1",
    description: "A responsive web app built with React and Next.js",
  },
  {
    id: 2,
    title: "Project 2",
    description: "An e-commerce platform using Node.js and MongoDB",
  },
  {
    id: 3,
    title: "Project 3",
    description: "A mobile-first design implemented with Tailwind CSS",
  },
  {
    id: 4,
    title: "Project 4",
    description: "A real-time chat application using Socket.io",
  },
  {
    id: 5,
    title: "Project 5",
    description: "A portfolio website built with Astro and Tailwind",
  },
  {
    id: 6,
    title: "Project 6",
    description: "A blog platform using Gatsby and GraphQL",
  },
];

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<Projects | null>(null);

  return (
    <>
      <section id="portfolio" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Portfolio</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
              >
                <Image
                  src={`/placeholder.svg?height=200&width=300`}
                  alt={""}
                  className="w-full h-48 object-cover"
                  width={300}
                  height={200}
                ></Image>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <Button
                    onClick={() => setSelectedProject(project)}
                    className="bg-blue-600 hover:bg-blue-700"
                  >
                    View Project
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Dialog
          open={!!selectedProject}
          onOpenChange={() => setSelectedProject(null)}
        >
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{selectedProject?.title}</DialogTitle>
              <DialogDescription>
                {selectedProject?.description}
                <p className="mt-4">
                  Technologies used: React, Next.js, Tailwind CSS
                </p>
                <p className="mt-2">
                  Challenges: Implementing responsive design, optimizing
                  performance
                </p>
              </DialogDescription>
            </DialogHeader>
            <div className="mt-4">
              <Button asChild>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  Visit Live Site
                </a>
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </section>
    </>
  );
}
