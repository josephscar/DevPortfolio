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

        {/* ── Projects Section ── */}
        <section
          id="projects"
          className="py-16 border-b border-border relative"
        >
          <div className="absolute top-0 right-0 w-48 h-48 bg-halftone pointer-events-none opacity-60" />
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-end mb-12">
              <div>
                <h2 className="font-mono text-2xl md:text-3xl font-bold tracking-widest uppercase text-white">
                  SELECTED_WORKS
                </h2>
              </div>
              <div className="hidden md:block font-mono text-sm text-muted-foreground tracking-widest">
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

        {/* ── Tech Stack Section ── */}
        <section className="py-20 bg-secondary relative overflow-hidden">
          <div className="absolute inset-0 bg-halftone-sm pointer-events-none" />
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <span className="section-label mb-3 block">Capabilities</span>
                <h2 className="font-sans text-4xl font-bold tracking-tighter mb-6">
                  TECH_STACK
                </h2>
                <p className="font-mono text-sm text-muted-foreground mb-8 max-w-md leading-relaxed">
                  My toolkit is built for performance and scalability. I
                  specialize in engine architecture and graphics programming.
                </p>

                <div className="space-y-8">
                  {skills.map((skillGroup) => (
                    <div key={skillGroup.category}>
                      <h3 className="font-mono text-xs font-bold border-b border-border inline-block mb-4 pb-1 text-accent tracking-widest uppercase">
                        {skillGroup.category}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {skillGroup.items.map((skill) => (
                          <span
                            key={skill}
                            className="bg-card border border-border px-3 py-1 font-mono text-xs text-foreground hover:border-accent hover:text-accent transition-all cursor-default tracking-wide"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-center p-8 border border-border bg-card box-shadow-comic relative">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-accent via-[#ff3d6b] to-transparent" />
                <div className="text-center space-y-4">
                  <div className="font-sans text-6xl font-bold leading-none text-foreground">
                    100%
                  </div>
                  <div className="font-mono font-bold text-xs tracking-widest uppercase border border-accent text-accent px-4 py-2 badge-pulse">
                    PASSION
                  </div>
                  <p className="font-mono text-xs text-muted-foreground max-w-[200px] mx-auto leading-relaxed">
                    Committed to pushing the boundaries of interactive
                    entertainment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA Section ── */}
        <section className="py-20 border-t border-border bg-card text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-halftone pointer-events-none" />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
          <div className="container mx-auto px-4 relative z-10">
            <span className="section-label mb-4 mx-auto justify-center">Next Step</span>
            <h2 className="font-sans text-4xl md:text-6xl font-bold tracking-tighter mb-8">
              READY TO{" "}
              <span className="text-accent">COLLABORATE?</span>
            </h2>
            <a
              href="/contact"
              className="inline-block font-mono font-bold text-sm tracking-widest px-8 py-4 border border-accent text-accent hover:bg-accent hover:text-background transition-all uppercase"
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
