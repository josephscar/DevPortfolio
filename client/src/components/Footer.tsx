import { Github, Twitter, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-white border-t-2 border-black py-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-halftone opacity-5 pointer-events-none" />
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6 relative z-10">
        <div className="font-mono text-sm font-bold">
          © {new Date().getFullYear()} Joseph Scarnecchia
        </div>
        
        <div className="flex gap-6">
          <a href="#" className="hover:text-accent transition-colors"><Github className="w-5 h-5" /></a>
          <a href="#" className="hover:text-accent transition-colors"><Twitter className="w-5 h-5" /></a>
          <a href="#" className="hover:text-accent transition-colors"><Linkedin className="w-5 h-5" /></a>
        </div>

      </div>
    </footer>
  );
}
