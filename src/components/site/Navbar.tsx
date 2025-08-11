import { useEffect, useState } from "react";
import { Menu } from "lucide-react";

const centerLinks = [
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
    <header className={`sticky top-0 z-50 border-b border-border bg-[#E4E2DD] overflow-hidden transition-shadow ${scrolled ? "shadow-sm" : "shadow-none"}`}>
      <nav className="mx-auto w-full max-w-[1442px] h-[50px] px-6 flex items-center justify-between relative">
        {/* Left decorative cropped image (brand link is visually hidden) */}
        <div className="relative flex items-center w-[620px]">
          <img
            src="/images/transparent.png"
            alt=""
            aria-hidden
            className="absolute left-[-16px] -top-24 h-[220px] w-auto pointer-events-none select-none"
          />
          <a href="/" className="sr-only">Planaur</a>
        </div>

        {/* Center links */}
        <div className="hidden md:flex flex-1 items-center justify-center gap-14 font-league font-light text-[20px] leading-none tracking-normal text-foreground">
          {centerLinks.map((l) => (
            <a key={l.href} href={l.href} className="hover:opacity-80 whitespace-nowrap leading-none">
              {l.label}
            </a>
          ))}
        </div>

        {/* Right actions */}
        <div className="hidden md:flex items-center justify-end w-[620px] gap-6">
          <a href="#contact" className="font-league font-light text-[20px] leading-none tracking-normal text-foreground hover:opacity-80 whitespace-nowrap">
            Get your custom Templates
          </a>
          <a
            href="/templates"
            className="inline-flex items-center justify-center rounded-full bg-[#D4D4D4] border border-black/10 px-5 py-1 text-foreground font-league font-light text-[20 px] leading-none tracking-normal whitespace-nowrap hover:bg-[#cfcfcf] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
          >
            Browse Templates
          </a>
        </div>

        {/* Mobile menu */}
        <button className="md:hidden p-2" aria-label="Open menu">
          <Menu className="h-6 w-6" />
        </button>
      </nav>
    </header>
  );
}
