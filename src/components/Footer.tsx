export default function Footer() {
  return (
    <footer className="mt-20">
      {/* Footer.1 narrow band */}
      <div className="py-6">
        <div className="container">
          <div className="rounded-xl glass p-6 text-center">
            <p className="type-h2">Ready to organize your chaos?</p>
          </div>
        </div>
      </div>

      {/* Footer.2 columns */}
      <div className="py-16 border-t">
        <div className="container grid gap-8 md:grid-cols-4">
          <div>
            <div className="font-heading mb-3">About</div>
            <p className="text-sm text-muted">Premium Notion templates for personal and business workflows.</p>
          </div>
          <div>
            <div className="font-heading mb-3">Platform</div>
            <ul className="space-y-2 text-sm">
              <li><a href="/templates" className="underline-offset-4 hover:underline">Templates</a></li>
              <li><a href="#" className="underline-offset-4 hover:underline">Pricing</a></li>
            </ul>
          </div>
          <div>
            <div className="font-heading mb-3">Socials</div>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="underline-offset-4 hover:underline">Twitter</a></li>
              <li><a href="#" className="underline-offset-4 hover:underline">YouTube</a></li>
            </ul>
          </div>
          <div className="rounded-2xl border p-5">
            <div className="font-heading">Stay in the loop</div>
            <p className="text-sm text-muted mt-1">Get occasional updates.</p>
            <form className="mt-3 flex gap-2">
              <input type="email" className="w-full rounded-lg border px-3 py-2 text-sm" placeholder="you@example.com" />
              <button className="rounded-lg bg-foreground text-background px-3 text-sm">Join</button>
            </form>
          </div>
        </div>
      </div>

      {/* Legal strip */}
      <div className="border-t py-4">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted">
          <div>© {new Date().getFullYear()} Planaur</div>
          <div className="flex items-center gap-4">
            <a href="/terms" className="underline-offset-4 hover:underline">Terms</a>
            <a href="/privacy" className="underline-offset-4 hover:underline">Privacy</a>
            <a href="#" className="underline-offset-4 hover:underline">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
