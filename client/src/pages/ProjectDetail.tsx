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
      <div className="min-h-screen flex items-center justify-center font-mono">
        PROJECT_NOT_FOUND
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Nav />
      <main className="pt-24 container mx-auto px-4 pb-20 flex-grow">
        <Link href="/projects">
          <a className="inline-flex items-center gap-2 font-mono font-bold hover:text-accent-cyan mb-8 transition-colors uppercase tracking-[3px] text-xs">
            <ArrowLeft className="w-4 h-4" /> ALL PROJECTS
          </a>
        </Link>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="card-sci-fi aspect-video overflow-hidden mb-8 border-none p-0">
              <div className="absolute inset-0 bg-transparent opacity-10 z-10 pointer-events-none" />
              <img src={project.image} alt={project.title} className="w-full h-full object-cover grayscale border-b-2 border-accent-cyan" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="card-sci-fi p-4 border-l-2 border-t border-b border-r border-border border-l-accent-cyan">
                <div className="font-mono text-xs text-muted-foreground uppercase flex items-center gap-2 mb-1 tracking-widest">
                  <Calendar className="w-3 h-3 text-accent-cyan" /> RELEASE
                </div>
                <div className="font-sans font-extrabold uppercase text-foreground">{project.releaseDate}</div>
              </div>
              <div className="card-sci-fi p-4 border-l-2 border-t border-b border-r border-border border-l-accent-cyan">
                <div className="font-mono text-xs text-muted-foreground uppercase flex items-center gap-2 mb-1 tracking-widest">
                  <Tag className="w-3 h-3 text-accent-cyan" /> CATEGORY
                </div>
                <div className="font-sans font-extrabold uppercase text-foreground">{project.category}</div>
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
              <h1 className="font-sans text-5xl md:text-6xl font-extrabold tracking-tighter mb-4 text-white py-4 leading-tight">
                {project.title}
              </h1>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="badge-sci-fi px-4 py-1.5 cursor-default text-sm border-2 bg-accent-cyan/10 font-bold">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="font-mono text-lg leading-relaxed text-muted-foreground">
                {project.description}
              </p>
              <p className="font-mono text-muted-foreground mt-4">
                {project.longDescription}
              </p>
            </div>

            <div className="flex gap-4 pt-4">
              <button className="flex-1 btn-sci-fi py-4 bg-accent-cyan text-black hover:bg-white hover:text-black">
                <Globe className="w-4 h-4" /> LIVE_DEMO
              </button>
              <button className="flex-1 btn-sci-fi py-4 hover:bg-accent-cyan border-border">
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
