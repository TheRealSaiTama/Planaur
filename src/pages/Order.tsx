import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { track } from "@/lib/analytics"

type OrderView = {
  id: string
  items: Array<{ title: string; notionDuplicateUrl: string }>
}

export default function OrderPage() {
  const { id } = useParams()
  const [order, setOrder] = useState<OrderView | null>(null)

  useEffect(() => {
    const run = async () => {
      const res = await fetch(`/api/order/${id}`)
      if (res.ok) setOrder(await res.json())
    }
    if (id) {
      run()
      track("purchase_success", { orderId: id })
    }
  }, [id])

  if (!id) return null

  return (
    <section className="py-20">
      <div className="container max-w-2xl">
        <h1 className="text-3xl font-heading">Your order</h1>
        {!order ? (
          <p className="mt-4 text-muted-foreground">Loading…</p>
        ) : (
          <div className="mt-6 space-y-4">
            {order.items.map(item => (
              <div key={item.title} className="rounded-xl border p-4">
                <div className="font-medium">{item.title}</div>
                <a className="text-primary underline" href={item.notionDuplicateUrl} target="_blank" rel="noreferrer">Open in Notion</a>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

