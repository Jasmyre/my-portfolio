import {
  Timeline,
  TimelineItem,
  TimelineIcon,
  TimelineContent,
} from "@/components/ui/timeline";

const educationData = [
  {
    institution: "De La Salle University (DLSU Manila)",
    degree: "College",
    year: "Present",
    description:
      "Currently pursuing a degree in Computer Science, focusing on web development and software engineering.",
  },
  {
    institution: "Sumulong College of Arts and Sciences (SCAS)",
    degree: "Senior High School (ICT Track)",
    year: "2020-2022",
    description:
      "Specialized in Information and Communications Technology, developing a strong foundation in programming and web design.",
  },
  {
    institution: "San Roque National High School (SRNHS)",
    degree: "Junior High School",
    year: "2016-2020",
    description:
      "Excelled in mathematics and computer subjects, participating in various coding competitions.",
  },
  {
    institution: "Lores Elementary School",
    degree: "Elementary Education",
    year: "2010-2016",
    description:
      "Developed a passion for technology and problem-solving from an early age.",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Education</h2>
        <Timeline>
          {educationData.map((edu, index) => (
            <TimelineItem key={index}>
              <TimelineIcon />
              <TimelineContent>
                <h3 className="text-xl font-semibold">{edu.institution}</h3>
                <p className="text-blue-500">{edu.degree}</p>
                <p className="text-sm text-gray-500">{edu.year}</p>
                <p className="mt-2">{edu.description}</p>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </div>
    </section>
  );
}
