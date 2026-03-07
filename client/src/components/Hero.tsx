import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 flex flex-col justify-center items-center overflow-hidden border-b border-border">
      {/* Background Pattern applied globally, no need for halftone here */}
      <div className="absolute inset-0 bg-transparent opacity-10 pointer-events-none" />

      <div className="container mx-auto px-4 flex flex-col items-center justify-center relative z-10 text-center space-y-8">
        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center"
          >
            <h2 className="section-label mb-2 w-auto border border-accent-cyan px-4 py-1">
              Game Dev & Simulation Engineer
            </h2>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-sans text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[0.9] tracking-tighter w-full max-w-4xl mx-auto flex flex-col md:flex-row justify-center items-center gap-2 md:gap-4 px-8"
          >
            <span className="text-white">Joseph</span>
            <span className="text-white animate-whoosh-in" style={{ animationDelay: '0.4s' }}>Scarnecchia</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="font-mono text-base md:text-xl text-foreground w-full max-w-2xl mx-auto leading-relaxed font-bold"
          >
            Lead game dev based in Fullerton, CA. Specializing in gameplay systems, physics, and AI simulation. Currently spearheading a turn-based RPG with Unity 6.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
