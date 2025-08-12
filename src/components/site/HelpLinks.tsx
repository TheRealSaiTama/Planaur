import { Instagram, Mail, Twitter } from "lucide-react";
import notionIcon from "@/assets/notion.png";

const aboutLinks = [
  { label: "Who We Are", href: "/#about" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Reviews", href: "#testimonials" },
];

const helpLinks = [
  { label: "Need Help Using Templates?", href: "/templates" },
  { label: "Issues With Payments", href: "/order/123" },
  { label: "Contact Us", href: "#contact" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Use", href: "/terms" },
  { label: "Cookie Policy", href: "/privacy#cookies" },
];

function SocialSquare({ children, href, label }: { children: React.ReactNode; href: string; label: string }) {
  return (
    <a
      href={href}
      aria-label={label}
      className="flex h-[56px] w-[56px] items-center justify-center rounded-2xl border border-border bg-[#EAEAEA] shadow-sm transition-colors"
    >
      {children}
    </a>
  );
}

export default function HelpLinks() {
  return (
    <section className="py-16 md:py-20">
      <div className="container">
        <div className="rounded-3xl border border-border bg-[#E7E5E4] p-6 md:p-8 lg:p-10">
          <div className="grid gap-6 md:grid-cols-[1.6fr,1fr,1fr,0.7fr]">
            <div className="rounded-2xl bg-[#EAEAEA] p-6 md:p-8">
              <h3 className="font-league font-black text-3xl md:text-4xl lg:text-5xl leading-tight text-black tracking-tight">
                <span className="block">Didn’t Find</span>
                <span className="block">What You were</span>
                <span className="block">looking for?</span>
                <span className="block">No Problem!</span>
              </h3>
              <p className="mt-6 text-[22px] font-thin text-foreground/85 max-w-[52ch] font-league">
                Get a template tailored as per your requirements. Send us a mail describing your idea and styles.
              </p>
              <div className="mt-6">
                <a
                  href="mailto:planaur.notiontemplates@gmail.com"
                  className="inline-flex items-center rounded-full bg-foreground text-background px-4 py-2 text-[22px] font-thin font-league"
                >
                  at planaur.notiontemplates@gmail.com
                </a>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-[#EAEAEA] p-6">
              <div className="text-lg font-medium">About Us</div>
              <ul className="mt-4 space-y-3 text-[22px] font-thin font-league">
                {aboutLinks.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="hover:underline">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-border bg-[#EAEAEA] p-6">
              <div className="text-lg font-medium">Help</div>
              <ul className="mt-4 space-y-3 text-[22px] font-thin font-league">
                {helpLinks.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="hover:underline">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-border bg-[#EAEAEA] p-6 flex flex-col items-center text-center">
              <div className="text-lg font-medium">Socials</div>
              <div className="mt-6 grid gap-4 place-items-center">
                <SocialSquare href="#" label="Notion">
                  <img src={notionIcon} alt="Notion" className="h-6 w-auto" />
                </SocialSquare>
                <SocialSquare href="#" label="X">
                  <span className="text-xl font-black">X</span>
                </SocialSquare>
                <SocialSquare href="#" label="Instagram">
                  <Instagram className="h-5 w-5" />
                </SocialSquare>
                <SocialSquare href="mailto:planaur.notiontemplates@gmail.com" label="Email">
                  <Mail className="h-5 w-5" />
                </SocialSquare>
              </div>
            </div>

            <div className="md:col-start-2 md:col-span-2 rounded-2xl border border-border bg-[#EAEAEA] p-5 flex items-center justify-between">
              {legalLinks.map((l, i) => (
                <a key={l.label} href={l.href} className="text-[22px] font-thin hover:underline font-league">
                  {l.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


