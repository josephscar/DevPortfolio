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
    <nav className="fixed top-0 left-0 right-0 z-50 border-b-2 border-black bg-white/90 backdrop-blur-sm">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/">
          <div className="font-mono font-bold text-xl tracking-tighter hover:text-accent cursor-pointer flex items-center gap-2">
            JOSEPH_SCARNECCHIA
          </div>
        </Link>

        <div className="hidden md:flex gap-8">
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              <a className={`
                flex items-center gap-2 font-mono text-sm font-bold uppercase tracking-wide
                transition-colors hover:text-accent
                ${location === link.href ? "underline decoration-2 underline-offset-4 text-accent" : ""}
              `}>
                <link.icon className="w-4 h-4" />
                {link.label}
              </a>
            </Link>
          ))}
        </div>

        <Link href="/contact">
           <button className={`
             hidden md:flex items-center gap-2 px-4 py-2 font-mono text-sm font-bold transition-all box-shadow-comic
             ${location === '/contact' ? 'bg-accent text-black' : 'bg-black text-white hover:bg-accent hover:text-black'}
           `}>
            <Mail className="w-4 h-4" />
            LET'S TALK
          </button>
        </Link>
      </div>
    </nav>
  );
}
