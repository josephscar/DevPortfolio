import { Github, Twitter, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-background border-t border-border py-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-halftone pointer-events-none" />
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6 relative z-10">
        <div className="font-mono text-sm text-muted-foreground tracking-widest uppercase">
          © {new Date().getFullYear()} Joseph Scarnecchia
        </div>

        <div className="flex gap-4">
          <a href="#" className="w-9 h-9 border border-border flex items-center justify-center text-muted-foreground hover:border-accent hover:text-accent transition-all">
            <Github className="w-4 h-4" />
          </a>
          <a href="#" className="w-9 h-9 border border-border flex items-center justify-center text-muted-foreground hover:border-accent hover:text-accent transition-all">
            <Twitter className="w-4 h-4" />
          </a>
          <a href="#" className="w-9 h-9 border border-border flex items-center justify-center text-muted-foreground hover:border-accent hover:text-accent transition-all">
            <Linkedin className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
