import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import Logo from "./Logo";
import { AnimatedBackground } from "@/components/core/animated-background";

const links = [
  { href: "/templates", label: "Templates" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-shadow ${scrolled ? "shadow-sm" : "shadow-none"}`}>
      <nav className="container flex items-center justify-between h-16">
        <a href="#" aria-label="Planaur home" className="flex items-center gap-2">
          <Logo height={28} />
        </a>
        <div className="hidden md:flex items-center gap-6">
          <AnimatedBackground
            defaultValue={links[0].label}
            className="rounded-lg bg-secondary/50"
            highlightClassName="bg-primary/10 ring-1 ring-primary/30"
            transition={{ type: "spring", bounce: 0.2, duration: 0.25 }}
            enableHover
          >
            {links.map((l) => (
              <a key={l.href} href={l.href} data-id={l.label} className="px-3 py-1 text-sm text-foreground/80 hover:text-foreground">
                {l.label}
              </a>
            ))}
          </AnimatedBackground>
          <Button asChild>
            <a href="/templates" className="group">Browse Templates</a>
          </Button>
        </div>
        <button className="md:hidden p-2" aria-label="Open menu">
          <Menu className="h-5 w-5" />
        </button>
      </nav>
    </header>
  );
}
