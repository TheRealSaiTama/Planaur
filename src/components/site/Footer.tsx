import { Github, Linkedin, Link as LinkIcon, Twitter } from "lucide-react";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="relative mt-20 border-t border-border">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="mx-auto h-full w-full max-w-7xl opacity-40" style={{ backgroundImage: "radial-gradient(hsl(var(--ring)/0.08) 1px, transparent 1px)", backgroundSize: "16px 16px" }} />
      </div>
      <div className="container relative py-14">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2">
              <Logo height={24} />
            </div>
            <p className="text-sm text-muted-foreground mt-3 max-w-sm">Notion templates that organize your chaos into actionable productivity.</p>
          </div>
          <div>
            <h4 className="font-medium">Product</h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li><a href="/templates" className="hover:underline">Templates</a></li>
              <li><a href="/templates" className="hover:underline">Pricing</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium">Company</h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li><a href="#about" className="hover:underline">About</a></li>
              <li><a href="#contact" className="hover:underline">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium">Social</h4>
            <div className="mt-3 flex items-center gap-3">
              <a href="#" aria-label="LinkedIn" className="p-2 rounded-md border hover:bg-muted"><Linkedin className="h-4 w-4" /></a>
              <a href="#" aria-label="Pinterest" className="p-2 rounded-md border hover:bg-muted"><LinkIcon className="h-4 w-4" /></a>
              <a href="#" aria-label="Twitter" className="p-2 rounded-md border hover:bg-muted"><Twitter className="h-4 w-4" /></a>
              <a href="#" aria-label="GitHub" className="p-2 rounded-md border hover:bg-muted"><Github className="h-4 w-4" /></a>
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Planaur. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="/privacy" className="hover:underline">Privacy</a>
            <a href="/terms" className="hover:underline">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
