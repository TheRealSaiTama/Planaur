import { useEffect, useState } from "react"
import type { Template } from "@/data/types"
import { templates as seed } from "@/data/templates"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Admin() {
  const [authed, setAuthed] = useState(false)
  const [password, setPassword] = useState("")
  const [list, setList] = useState<Template[]>([])

  useEffect(() => {
    setList(seed)
  }, [])

  if (!authed) return (
    <section className="py-20">
      <div className="container max-w-sm">
        <h1 className="text-2xl font-heading">Admin Login</h1>
        <div className="mt-4 flex gap-2">
          <Input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <Button onClick={() => setAuthed(password.length > 0)}>Login</Button>
        </div>
      </div>
    </section>
  )

  return (
    <section className="py-10">
      <div className="container">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-heading">Templates</h1>
          <Button onClick={() => setList([{...seed[0], id: `${Date.now()}`, slug: `new-${Date.now()}`, title: "New Template", isPublished: false}, ...list])}>New</Button>
        </div>
        <div className="mt-6 grid gap-3">
          {list.map(t => (
            <div key={t.id} className="rounded-xl border p-4 grid md:grid-cols-3 gap-4">
              <div>
                <div className="font-medium">{t.title}</div>
                <div className="text-xs text-muted-foreground">/{t.slug}</div>
              </div>
              <div className="text-sm">${t.salePriceUSD ?? t.priceUSD}</div>
              <div className="flex items-center gap-2 justify-end">
                <Button variant="outline">Edit</Button>
                <Button variant="outline">Publish</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

