import { Progress } from "@/components/ui/progress";

const skills = [
  { name: "React", level: 90 },
  { name: "TypeScript", level: 85 },
  { name: "Tailwind CSS", level: 95 },
  { name: "Next.js", level: 80 },
  { name: "Node.js", level: 75 },
];

const technologies = ["HTML", "CSS", "JavaScript", "Git", "GraphQL", "MongoDB"];
const tools = ["VS Code", "Figma", "Adobe XD", "Webpack", "ESLint", "Prettier"];

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Core Competencies</h3>
            {skills.map((skill) => (
              <div key={skill.name} className="mb-4">
                <div className="flex justify-between mb-1">
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <Progress value={skill.level} className="w-full" />
              </div>
            ))}
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Technologies</h3>
            <div className="flex flex-wrap gap-2 mb-8">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
            <h3 className="text-xl font-semibold mb-4">Tools</h3>
            <div className="flex flex-wrap gap-2">
              {tools.map((tool) => (
                <span
                  key={tool}
                  className="bg-gray-700 text-white px-3 py-1 rounded-full text-sm"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
