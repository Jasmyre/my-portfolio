import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";

export default function Header() {

  return (
    <header className="sticky top-0 z-50 bg-opacity-90 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold">
          JML
        </a>
        <nav className="hidden md:flex space-x-4">
          <a href="#home" className="hover:text-blue-500">
            Home
          </a>
          <a href="#portfolio" className="hover:text-blue-500">
            Portfolio
          </a>
          <a href="#about" className="hover:text-blue-500">
            About
          </a>
          <a href="#skills" className="hover:text-blue-500">
            Skills
          </a>
          <a href="#education" className="hover:text-blue-500">
            Education
          </a>
          <a href="#contact" className="hover:text-blue-500">
            Contact
          </a>
        </nav>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon">
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
          <Button className="bg-blue-600 hover:bg-blue-700">Hire Me</Button>
        </div>
      </div>
    </header>
  );
}
