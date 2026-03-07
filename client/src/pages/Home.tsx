import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";
import { ProjectCard } from "@/components/ProjectCard";
import { projects, skills } from "@/lib/data";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-transparent">
      <Nav />
      <main className="pt-16 flex-grow">
        <Hero />

        <section
          id="projects"
          className="py-20 border-b border-border bg-transparent relative"
        >
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-end mb-12">
              <div className="w-full md:w-3/4 flex items-center">
                <h2 className="font-sans text-3xl md:text-4xl font-extrabold tracking-widest text-accent-cyan mb-2 uppercase w-full flex items-center gap-6">
                  SELECTED WORKS
                  <div className="h-px bg-gradient-to-r from-accent-cyan to-transparent flex-grow opacity-50" />
                </h2>
              </div>
              <div className="hidden md:block font-mono text-sm text-muted-foreground">
                // 2023 - 2025
              </div>
            </div>

            <div className="flex flex-col gap-12">
              {projects.slice(0, 2).map((project, index) => (
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

        <section className="py-20 bg-transparent relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="section-label mb-6 w-full">
                  TECH STACK
                </h2>
                <p className="font-mono text-muted-foreground mb-8 max-w-md">
                  My toolkit is built for performance and scalability. I
                  specialize in engine architecture and graphics programming.
                </p>

                <div className="space-y-8">
                  {skills.map((skillGroup) => (
                    <div key={skillGroup.category}>
                      <h3 className="section-label mb-4 w-full">
                        {skillGroup.category}
                      </h3>
                      <div className="flex flex-wrap gap-3">
                        {skillGroup.items.map((skill) => (
                          <span
                            key={skill}
                            className="badge-sci-fi px-3 py-1 cursor-default text-xs"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="card-sci-fi flex items-center justify-center p-8 relative">
                <div className="absolute top-4 right-4 w-4 h-4 bg-accent-lime animate-pulse-slow" />
                <div className="text-center space-y-4">
                  <div className="font-sans text-6xl font-extrabold leading-none text-gradient-hero py-2">
                    100%
                  </div>
                  <div className="ui-label text-accent-cyan px-2">
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

        <section className="py-20 border-t border-border flex text-foreground text-center bg-card">
          <div className="container mx-auto px-4">
            <h2 className="font-sans text-4xl md:text-6xl font-extrabold tracking-tighter mb-8">
              READY TO <span className="text-gradient-hero">COLLABORATE?</span>
            </h2>
            <a
              href="/contact"
              className="btn-sci-fi text-lg px-8 py-4"
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
