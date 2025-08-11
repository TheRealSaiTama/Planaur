import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import Logo from "./Logo";
// Subtle motion policy: remove heavy animated background

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
    <header className={`sticky top-0 z-50 glass transition-shadow ${scrolled ? "shadow-sm" : "shadow-none"}`} style={{ height: "var(--nav-height)" }}>
      <nav className="container flex items-center justify-between h-full" style={{ gap: "var(--sp-6)", paddingBlock: "var(--sp-2)" }}>
        <a href="#" aria-label="Planaur home" className="flex items-center gap-2">
          <Logo height={28} />
        </a>
        <div className="hidden md:flex items-center" style={{ gap: "var(--sp-6)" }}>
          <div className="flex items-center" style={{ gap: "var(--sp-4)" }}>
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-sm text-foreground/80 hover:text-foreground">
                {l.label}
              </a>
            ))}
          </div>
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
