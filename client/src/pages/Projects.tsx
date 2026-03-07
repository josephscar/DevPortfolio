import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/lib/data";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Nav />
      <main className="pt-24 container mx-auto px-4 pb-20 flex-grow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-border pb-4">
            <h1 className="font-sans text-6xl font-extrabold tracking-tighter text-foreground">
              ALL{" "}
              <span className="text-gradient-hero">
                PROJECTS
              </span>
            </h1>
            <p className="font-mono text-muted-foreground max-w-md text-right">
              A comprehensive archive of game jams, professional work, and
              experiments.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}
