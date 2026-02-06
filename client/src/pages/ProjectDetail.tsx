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
          <a className="inline-flex items-center gap-2 font-mono font-bold hover:text-accent mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" /> BACK_TO_ARCHIVE
          </a>
        </Link>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="relative border-2 border-black box-shadow-comic aspect-video overflow-hidden mb-8">
              <div className="absolute inset-0 bg-halftone opacity-10 z-10 pointer-events-none" />
              <img src={project.image} alt={project.title} className="w-full h-full object-cover grayscale" />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
               <div className="border-2 border-black p-4 bg-secondary box-shadow-comic">
                  <div className="font-mono text-xs text-muted-foreground uppercase flex items-center gap-2 mb-1">
                    <Calendar className="w-3 h-3" /> RELEASE
                  </div>
                  <div className="font-sans font-bold uppercase">Q4 2024</div>
               </div>
               <div className="border-2 border-black p-4 bg-secondary box-shadow-comic">
                  <div className="font-mono text-xs text-muted-foreground uppercase flex items-center gap-2 mb-1">
                    <Tag className="w-3 h-3" /> CATEGORY
                  </div>
                  <div className="font-sans font-bold uppercase">GAMEPLAY</div>
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
              <h1 className="font-sans text-6xl font-bold tracking-tighter mb-4">
                {project.title}
              </h1>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="bg-accent text-black px-2 py-1 font-mono text-xs font-bold border border-black">
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
                This project involved pushing the limits of real-time rendering and state-machine driven gameplay. We focused heavily on the "tactile" feedback of player interactions, ensuring every action felt grounded in the game world's physics.
              </p>
            </div>

            <div className="flex gap-4 pt-4">
               <button className="flex-1 bg-black text-white font-mono font-bold py-4 box-shadow-comic hover:bg-accent hover:text-black transition-all uppercase flex items-center justify-center gap-2">
                  <Globe className="w-4 h-4" /> LIVE_DEMO
               </button>
               <button className="flex-1 border-2 border-black font-mono font-bold py-4 box-shadow-comic hover:bg-secondary transition-all uppercase flex items-center justify-center gap-2">
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
