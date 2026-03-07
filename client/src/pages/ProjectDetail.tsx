import { useRoute } from "wouter";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { projects } from "@/lib/data";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Tag, Globe, Github } from "lucide-react";
import { Link } from "wouter";

export default function ProjectDetail() {
  const [, params] = useRoute("/project/:id");
  const project = projects.find((p) => p.id === Number(params?.id));

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center font-mono text-muted-foreground">
        PROJECT_NOT_FOUND
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Nav />
      <main className="pt-24 container mx-auto px-4 pb-20 flex-grow">
        <Link href="/projects">
          <a className="inline-flex items-center gap-2 font-mono text-xs font-bold tracking-widest uppercase hover:text-accent mb-8 transition-colors text-muted-foreground">
            <ArrowLeft className="w-4 h-4" /> BACK_TO_ARCHIVE
          </a>
        </Link>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="relative border border-border card-accent-cyan aspect-video overflow-hidden mb-8 box-shadow-comic">
              <div className="absolute inset-0 bg-halftone z-10 pointer-events-none" />
              <img src={project.image} alt={project.title} className="w-full h-full object-cover opacity-80" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="border border-border p-4 bg-card box-shadow-comic">
                <div className="font-mono text-xs text-muted-foreground uppercase flex items-center gap-2 mb-2 tracking-widest">
                  <Calendar className="w-3 h-3 text-accent" /> RELEASE
                </div>
                <div className="font-sans font-bold uppercase text-sm">{project.releaseDate}</div>
              </div>
              <div className="border border-border p-4 bg-card box-shadow-comic">
                <div className="font-mono text-xs text-muted-foreground uppercase flex items-center gap-2 mb-2 tracking-widest">
                  <Tag className="w-3 h-3 text-accent" /> CATEGORY
                </div>
                <div className="font-sans font-bold uppercase text-sm">{project.category}</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <span className="section-label mb-3 block">Project</span>
              <h1 className="font-sans text-6xl font-bold tracking-tighter mb-4">
                {project.title}
              </h1>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="border border-border text-muted-foreground px-2 py-1 font-mono text-xs tracking-widest hover:border-accent hover:text-accent transition-all badge-pulse">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <p className="font-mono text-sm leading-relaxed text-muted-foreground border-l-2 border-accent pl-4 mb-4">
                {project.description}
              </p>
              <p className="font-mono text-sm text-muted-foreground leading-relaxed">
                {project.longDescription}
              </p>
            </div>

            <div className="flex gap-4 pt-4">
              <button className="flex-1 border border-accent text-accent font-mono font-bold text-xs py-4 hover:bg-accent hover:text-background transition-all uppercase tracking-widest flex items-center justify-center gap-2">
                <Globe className="w-4 h-4" /> LIVE_DEMO
              </button>
              <button className="flex-1 border border-border text-muted-foreground font-mono font-bold text-xs py-4 hover:border-accent hover:text-accent transition-all uppercase tracking-widest flex items-center justify-center gap-2">
                <Github className="w-4 h-4" /> SOURCE_CODE
              </button>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
