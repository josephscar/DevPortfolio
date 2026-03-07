import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative py-10 border-b border-border overflow-hidden">
      <div className="absolute inset-0 bg-halftone pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-accent via-[#ff3d6b] to-transparent" />

      <div className="container mx-auto px-4 flex flex-col md:flex-row md:items-center justify-between gap-8 relative z-10">
        {/* Name block */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label mb-3 block">Game Dev &amp; Simulation Engineer</span>
          <h1 className="font-sans font-bold leading-none tracking-tighter">
            <span className="block text-4xl md:text-5xl">Joseph</span>
            <span className="block text-2xl md:text-3xl text-accent mt-0.5">Scarnecchia</span>
          </h1>
        </motion.div>

        {/* Profile photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex-shrink-0 mx-auto md:mx-0"
        >
          <div className="relative w-36 h-36 md:w-44 md:h-44">
            {/* Cyan ring */}
            <div className="absolute inset-0 rounded-full border-2 border-accent" />
            {/* Placeholder circle */}
            <div className="w-full h-full rounded-full bg-card border border-border overflow-hidden flex items-center justify-center">
              <span className="font-mono text-xs text-muted-foreground tracking-widest uppercase text-center leading-tight">
                PHOTO<br/>SOON
              </span>
            </div>
          </div>
        </motion.div>

        {/* Bio block */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="font-mono text-sm text-foreground max-w-sm border-l-2 border-accent pl-4 leading-relaxed"
        >
          Lead game dev based in Fullerton, CA. Specializing in gameplay systems, physics, and AI simulation. Currently spearheading a turn-based RPG with Unity 6.
        </motion.p>
      </div>
    </section>
  );
}
