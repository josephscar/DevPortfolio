import { useState } from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Footer() {
  const [showEmail, setShowEmail] = useState(false);

  return (
    <footer className="bg-background border-t border-border py-12 relative overflow-hidden text-muted-foreground">
      <div className="absolute inset-0 bg-transparent opacity-5 pointer-events-none" />
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6 relative z-10">
        <div className="font-mono text-sm font-bold">
          © {new Date().getFullYear()} Joseph Scarnecchia
        </div>

        <div className="flex flex-col items-center md:items-end gap-2">
          <div className="flex gap-6">
            <a href="https://www.linkedin.com/in/josephscar/" target="_blank" rel="noopener noreferrer" className="hover:text-accent-cyan transition-colors" aria-label="LinkedIn">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="https://github.com/josephscar" target="_blank" rel="noopener noreferrer" className="hover:text-accent-cyan transition-colors" aria-label="GitHub">
              <Github className="w-5 h-5" />
            </a>
            <button onClick={() => setShowEmail(!showEmail)} className="hover:text-accent-cyan transition-colors cursor-pointer" aria-label="Email">
              <Mail className="w-5 h-5" />
            </button>
          </div>
          
          <AnimatePresence>
            {showEmail && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="font-mono text-sm text-accent-cyan overflow-hidden"
              >
                <a href="mailto:josephdscarnecchia@gmail.com" className="hover:underline tracking-widest">
                  josephdscarnecchia@gmail.com
                </a>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </footer>
  );
}
