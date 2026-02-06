import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center items-center overflow-hidden border-b-2 border-black">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-halftone opacity-10 pointer-events-none" />

      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-6">
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
            className="font-mono text-lg text-muted-foreground max-w- border-l-4 border-accent pl-4"
          >
            Lead game dev based in Fullerton, CA. Specializing in gameplay systems, physics, and AI simulation. Currently spearheading a turn-based RPG with Unity 6.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="pt-4"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 font-mono font-bold text-lg border-b-2 border-black pb-1 hover:text-accent hover:border-accent transition-colors"
            >
              VIEW WORK <ArrowDown className="w-4 h-4 animate-bounce" />
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative hidden md:block"
        >
          <div className="relative aspect-square max-w-[500px] mx-auto">
            <div className="absolute inset-0 bg-accent rounded-full opacity-20 blur-3xl animate-pulse" />
            <img
              src="/hero-halftone.png"
              alt="Game Dev Hero"
              className="relative z-10 w-full h-full object-contain drop-shadow-[8px_8px_0_rgba(0,0,0,1)] border-2 border-black bg-white"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
