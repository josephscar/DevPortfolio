import { Link, useLocation } from "wouter";
import { Gamepad2, Layers, Mail, Terminal } from "lucide-react";

export function Nav() {
  const [location] = useLocation();

  const links = [
    { href: "/", label: "HOME", icon: Terminal },
    { href: "/projects", label: "PROJECTS", icon: Gamepad2 },
    { href: "/about", label: "ABOUT", icon: Layers },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/90 backdrop-blur-sm">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/">
          <div className="font-mono font-bold text-xl tracking-tighter hover:text-accent cursor-pointer flex items-center gap-2 transition-colors">
            JOSEPH_SCARNECCHIA
          </div>
        </Link>

        <div className="hidden md:flex gap-8">
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              <a className={`
                flex items-center gap-2 font-mono text-sm font-bold uppercase tracking-widest
                transition-colors hover:text-accent
                ${location === link.href
                  ? "text-accent border-b border-accent pb-0.5"
                  : "text-muted-foreground"}
              `}>
                <link.icon className="w-4 h-4" />
                {link.label}
              </a>
            </Link>
          ))}
        </div>

        <Link href="/contact">
          <button className={`
            hidden md:flex items-center gap-2 px-4 py-2 font-mono text-sm font-bold tracking-widest
            border transition-all uppercase
            ${location === '/contact'
              ? 'border-accent text-accent bg-accent/10'
              : 'border-border text-foreground hover:border-accent hover:text-accent hover:bg-accent/10'}
          `}>
            <Mail className="w-4 h-4" />
            LET'S TALK
          </button>
        </Link>
      </div>
    </nav>
  );
}
