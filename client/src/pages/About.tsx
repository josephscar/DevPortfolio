import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Calendar, Briefcase, GraduationCap } from "lucide-react";

export default function About() {
  const experiences = [
    {
      year: "AUGUST 2025 - PRESENT",
      role: "GAMEPLAY DEV // PROJECT MANAGER",
      company: "Crown's Landing Team",
      description: "Primarily lead gameplay design team but acted as project manager to combine the efforts of gameplay, art, and networking teams to create a fullly functional multiplayer turn-based RPG. My gameplay system contributions include complex AI state machines and combat mechanics."
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
          <h1 className="font-sans text-6xl font-bold tracking-tighter mb-8">
            BEHIND THE <span className="text-accent">PIXELS</span>
          </h1>

          <div className="grid md:grid-cols-[1fr_2fr] gap-12 mb-20">
             <div className="relative">
                <div className="aspect-[3/4] border-2 border-black box-shadow-comic bg-secondary overflow-hidden relative">
                   <div className="absolute inset-0 bg-halftone opacity-10" />
                   {/* Placeholder for a profile pic if we had one, using a generated one or stock */}
                   <img src="/hero-halftone.png" className="w-full h-full object-cover grayscale contrast-125" alt="Profile" />
                </div>
             </div>
             
             <div className="space-y-6 font-mono text-lg leading-relaxed text-muted-foreground">
                <p>
                  I'm a gameplay engineer obsessed with new ideas and innovative AI systems. I believe that the difference between a good game and a great one lies in the milliseconds of input latency, the subtle screen shake, and the perfect frame-freeze on impact.
                </p>
                <p>
                  With over 5 years of experience in Unity and Unreal, I bridge the gap between technical implementation and creative vision. I don't just write code; I craft experiences.
                </p>
                <div className="text-sm">In my free time, I am an avid reader of sci-fi novels and enjoy the occasional double black diamond on my skis. Of course, I also play more video games than I should.</div>
                <div className="pt-4">
                  <h3 className="text-foreground font-bold mb-4 flex items-center gap-2">
                    <GraduationCap className="w-5 h-5" /> EDUCATION
                  </h3>
                  <div className="border-l-2 border-accent pl-4">
                    <div className="font-bold text-foreground">B.S. Computer Science</div>
                    <div className="text-sm">California State University Fullerton, Fall 2026</div>
                  </div>
                </div>
             </div>
          </div>

          <div>
             <h2 className="font-sans text-4xl font-bold mb-8 border-b-2 border-black inline-block">EXPERIENCE_LOG</h2>
             <div className="space-y-8">
               {experiences.map((exp, i) => (
                 <motion.div 
                   key={i}
                   initial={{ opacity: 0, x: -20 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   transition={{ delay: i * 0.1 }}
                   className="relative pl-8 border-l-2 border-dashed border-black"
                 >
                   <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-accent border-2 border-black" />
                   <div className="font-mono text-sm font-bold text-accent mb-1 flex items-center gap-2">
                     <Calendar className="w-4 h-4" /> {exp.year}
                   </div>
                   <h3 className="font-sans text-2xl font-bold uppercase">{exp.role}</h3>
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
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}
