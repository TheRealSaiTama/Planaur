type EventName =
  | "view_template"
  | "click_preview"
  | "begin_checkout"
  | "purchase_success"
  | "newsletter_subscribe"

export function track(name: EventName, props?: Record<string, unknown>) {
  try {
    const payload = { name, props, ts: Date.now() }
    ;(window as any).__PLANAUR_EVENTS__ = (window as any).__PLANAUR_EVENTS__ || []
    ;(window as any).__PLANAUR_EVENTS__.push(payload)
  } catch {}
}

