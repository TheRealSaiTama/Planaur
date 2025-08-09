export default function Terms() {
  const notionUrl = "https://www.notion.so/T-C-and-Privacy-Policy-24acf2834bbe8058bbfde3a11eb88bb2";
  return (
    <section className="py-12 md:py-16">
      <div className="container">
        <header className="mb-6">
          <h1 className="font-heading text-3xl md:text-5xl tracking-tight">Terms & Conditions</h1>
          <p className="mt-2 text-muted-foreground">The terms below are sourced from our canonical Notion page.</p>
        </header>
        <div className="rounded-2xl border border-border overflow-hidden bg-card">
          <div className="aspect-[16/12] md:aspect-[16/9]">
            <iframe
              src={notionUrl}
              title="Terms & Conditions — Notion"
              className="w-full h-full"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
        <div className="mt-4 text-sm">
          <a href={notionUrl} target="_blank" rel="noreferrer" className="underline underline-offset-4">Open in Notion</a>
        </div>
      </div>
    </section>
  );
}

