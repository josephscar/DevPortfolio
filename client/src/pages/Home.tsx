import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";
import { ProjectCard } from "@/components/ProjectCard";
import { projects, skills } from "@/lib/data";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Nav />
      <main className="pt-16 flex-grow">
        <Hero />

        <section
          id="projects"
          className="py-20 border-b-2 border-black bg-white relative"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-halftone opacity-20 pointer-events-none" />
          <div className="container mx-auto px-4">
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

            <div className="grid md:grid-cols-2 gap-8">
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
