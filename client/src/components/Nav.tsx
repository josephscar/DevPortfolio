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
          <div className="font-sans font-extrabold text-xl tracking-tighter hover:text-accent-cyan transition-colors cursor-pointer flex items-center gap-2 text-foreground">
            JS_PORTFOLIO
          </div>
        </Link>

        <div className="hidden md:flex gap-8">
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              <a className={`
                flex items-center gap-2 font-mono text-xs uppercase tracking-[3px]
                transition-colors hover:text-accent-cyan
                ${location === link.href ? "border-b border-accent-cyan text-accent-cyan" : "text-muted-foreground"}
              `}>
                <link.icon className="w-4 h-4" />
                {link.label}
              </a>
            </Link>
          ))}
        </div>

        <Link href="/contact">
          <button className={`btn-sci-fi hidden md:flex ${location === '/contact' ? 'bg-accent-cyan text-black' : ''}`}>
            <Mail className="w-4 h-4" />
            LET'S TALK
          </button>
        </Link>
      </div>
    </nav>
  );
}
