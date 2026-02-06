import { Nav } from "@/components/Nav";

import { Footer } from "@/components/Footer";
import { ProjectCard } from "@/components/ProjectCard";
import { projects, skills } from "@/lib/data";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Nav />
      <main className="pt-16 flex-grow">
        <div className="flex flex-col lg:flex-row min-h-[90vh] border-b-2 border-black">
          {/* Left Panel - Hero Content */}
          <section className="w-full lg:w-1/2 p-12 lg:p-20 flex flex-col justify-center border-b-2 lg:border-b-0 lg:border-r-2 border-black relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-halftone opacity-10 pointer-events-none" />

            <div className="relative z-10 space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="font-mono text-sm font-bold bg-accent inline-block px-2 py-1 border-2 border-black mb-4 box-shadow-comic">
                  Game Dev & Simulation Engineer
                </h2>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="font-sans text-6xl md:text-8xl font-bold leading-[0.9] tracking-tighter"
              >
                Joseph
                <br />
                <span className="text-stroke text-white drop-shadow-[4px_4px_0_rgba(0,0,0,1)]">
                  Scarnecchia
                </span>
                <br />
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="font-mono text-lg text-muted-foreground max-w-md border-l-4 border-accent pl-4"
              >
                Lead game dev based in Fullerton, CA. Specializing in gameplay
                systems, physics, and AI simulation. Currently spearheading a
                turn-based RPG with Unity 6.
              </motion.p>
            </div>
          </section>

          {/* Right Panel - Selected Works */}
          <section
            id="projects"
            className="w-full lg:w-1/2 bg-white relative overflow-y-auto max-h-[90vh]"
          >
            <div className="p-12 lg:p-20">
              <div className="flex justify-between items-end mb-12">
                <div>
                  <h2 className="font-sans text-5xl font-bold tracking-tighter mb-2">
                    SELECTED_WORKS
                  </h2>
                  <div className="h-2 w-24 bg-accent border-2 border-black box-shadow-comic" />
                </div>
                <div className="hidden md:block font-mono text-sm text-muted-foreground">
                  // 2023 - 2025
                </div>
              </div>

              <div className="grid grid-cols-1 gap-8">
                {projects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <ProjectCard project={project} />
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </div>

        <section className="py-20 bg-secondary relative overflow-hidden">
          <div className="absolute inset-0 bg-halftone-sm opacity-5 pointer-events-none" />
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="font-sans text-4xl font-bold tracking-tighter mb-6">
                  TECH_STACK
                </h2>
                <p className="font-mono text-muted-foreground mb-8 max-w-md">
                  My toolkit is built for performance and scalability. I
                  specialize in engine architecture and graphics programming.
                </p>

                <div className="space-y-8">
                  {skills.map((skillGroup) => (
                    <div key={skillGroup.category}>
                      <h3 className="font-mono font-bold border-b-2 border-black inline-block mb-4">
                        {skillGroup.category}
                      </h3>
                      <div className="flex flex-wrap gap-3">
                        {skillGroup.items.map((skill) => (
                          <span
                            key={skill}
                            className="bg-white border-2 border-black px-3 py-1 font-mono text-sm font-bold box-shadow-comic hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all cursor-default"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-center p-8 border-2 border-black bg-white box-shadow-comic relative">
                <div className="absolute top-4 right-4 w-4 h-4 bg-accent rounded-full border-2 border-black" />
                <div className="text-center space-y-4">
                  <div className="font-sans text-6xl font-bold leading-none">
                    <span className="text-stroke text-white drop-shadow-[2px_2px_0_rgba(0,0,0,1)]">
                      100%
                    </span>
                  </div>
                  <div className="font-mono font-bold text-xl bg-accent px-2">
                    PASSION
                  </div>
                  <p className="font-mono text-sm max-w-[200px] mx-auto">
                    Committed to pushing the boundaries of interactive
                    entertainment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 border-t-2 border-black bg-black text-white text-center">
          <div className="container mx-auto px-4">
            <h2 className="font-sans text-4xl md:text-6xl font-bold tracking-tighter mb-8">
              READY TO <span className="text-accent">COLLABORATE?</span>
            </h2>
            <a
              href="/contact"
              className="inline-block bg-white text-black font-mono font-bold text-xl px-8 py-4 border-2 border-transparent hover:border-white hover:bg-black hover:text-white transition-all box-shadow-comic"
            >
              INITIATE_CONTACT
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
