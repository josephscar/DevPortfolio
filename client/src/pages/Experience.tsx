import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Calendar, Briefcase, GraduationCap } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      year: "AUGUST 2025 - PRESENT",
      role: "GAMEPLAY DEV & PROJECT MANAGER",
      company: "Crown's Landing Team",
      description: "Primarily lead gameplay design team but acted as project manager to combine the efforts of developer and art teams to create a fully functional 3D RPG in Unity. My gameplay system contributions include complex modular combat mechanics, AI state machines, and player progression systems."
    },
    {
      year: "2023 - 2025",
      role: "SOFTWARE ENGINEER",
      company: "Jason Winters Tea",
      description: "Maintained and updated the company's website and internal tools using React, Node.js, and MongoDB."
    },
    {
      year: "2022 - 2023",
      role: "GAME COURSE DESIGNER & INSTRUCTOR",
      company: "Code Ninjas",
      description: "Designed and taught game development curriculum for children aged 6-15. Worked closely with the team to develop new courses that attracted more students and increased revenue."
    }
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Nav />
      <main className="pt-24 container mx-auto px-4 pb-20 flex-grow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <div>
            <h1 className="font-sans text-6xl font-extrabold tracking-tighter text-foreground uppercase mb-10 flex items-center gap-6">
              EXPERIENCE <span className="text-accent-cyan">LOG</span>
              <div className="h-px bg-gradient-to-r from-accent-cyan to-transparent flex-grow opacity-50" />
            </h1>
            <div className="space-y-8">
              {experiences.map((exp, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="relative pl-8 border-l border-border"
                >
                  <div className="absolute -left-[4.5px] top-1.5 w-2 h-2 bg-accent-cyan animate-pulse-slow" />
                  <div className="font-mono text-sm font-bold text-accent-cyan mb-1 flex items-center gap-2 tracking-widest">
                    <Calendar className="w-4 h-4" /> {exp.year}
                  </div>
                  <h3 className="font-mono text-2xl font-bold uppercase text-foreground mt-3 mb-1">{exp.role}</h3>
                  <div className="font-mono font-bold mb-2 flex items-center gap-2">
                    <Briefcase className="w-4 h-4" /> {exp.company}
                  </div>
                  <p className="font-mono text-muted-foreground max-w-xl">
                    {exp.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mt-20">
            <h2 className="font-sans text-3xl md:text-4xl font-extrabold tracking-tighter text-foreground uppercase mb-10 flex items-center gap-6">
              EDUCATION
              <div className="h-px bg-gradient-to-r from-accent-cyan to-transparent flex-grow opacity-50" />
            </h2>
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative pl-8 border-l border-border"
              >
                <div className="absolute -left-[4.5px] top-1.5 w-2 h-2 bg-accent-cyan animate-pulse-slow" />
                <h3 className="font-mono text-2xl font-bold uppercase text-foreground mb-1 flex items-center gap-2">
                  <GraduationCap className="w-6 h-6 text-accent-cyan" /> B.S. Computer Science
                </h3>
                <div className="font-mono text-muted-foreground mt-2">
                  California State University Fullerton, Fall 2026
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}
