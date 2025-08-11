import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { CheckCircle2, Sparkles } from "lucide-react";
import { TextLoop } from "@/components/core/text-loop";

export default function Newsletter() {
  const { toast } = useToast();
  const [email, setEmail] = useState("");

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    toast({ title: ok ? "Subscribed!" : "Invalid email", description: ok ? "You're on the list for tips & updates." : "Please enter a valid email address." });
    if (ok) setEmail("");
  }

  return (
    <section id="contact" className="pt-8 pb-1">
      <div className="container">
        <div className="mb-2 text-center">
          <p className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
            Sophisticated Templates for{" "}
            <TextLoop
              className="ml-1"
              transition={{ type: "spring", stiffness: 900, damping: 80, mass: 10 }}
              variants={{ initial: { y: 30, rotateX: 100, opacity: 0, filter: "blur(4px)" }, animate: { y: 0, rotateX: 0, opacity: 1, filter: "blur(0px)" }, exit: { y: -20, rotateX: -90, opacity: 0, filter: "blur(4px)" } }}
            >
              <span>Businesses</span>
              <span>Content Creators</span>
              <span>VLoggers</span>
              <span>YouTubers</span>
              <span>Gamers</span>
              <span>Daily Life</span>
            </TextLoop>
          </p>
        </div>
      </div>
    </section>
  );
}
