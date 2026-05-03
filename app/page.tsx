export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          API Monitoring
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Ensure webhook delivery with{" "}
          <span className="text-[#58a6ff]">smart retry logic</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          WebhookGuard proxies your outgoing webhooks, retries failed deliveries with exponential backoff, and gives you a full audit trail — so your customers never miss a critical event.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Get Started for $15/mo
        </a>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-[#8b949e]">
          <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
            <div className="text-[#58a6ff] text-2xl font-bold mb-1">99.9%</div>
            <div>Delivery guarantee</div>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
            <div className="text-[#58a6ff] text-2xl font-bold mb-1">5x</div>
            <div>Automatic retries</div>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
            <div className="text-[#58a6ff] text-2xl font-bold mb-1">&lt;50ms</div>
            <div>Proxy overhead</div>
          </div>
        </div>
      </section>

      {/* Features strip */}
      <section className="max-w-3xl mx-auto px-6 pb-16">
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
          {[
            ["Exponential backoff", "Retries scale from 1s to 30min automatically"],
            ["Dead letter queue", "Failed webhooks are stored for manual replay"],
            ["Delivery dashboard", "Real-time status for every webhook event"],
            ["Signature verification", "HMAC validation on every forwarded request"]
          ].map(([title, desc]) => (
            <li key={title} className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
              <div className="text-white font-semibold mb-1">{title}</div>
              <div className="text-[#8b949e]">{desc}</div>
            </li>
          ))}
        </ul>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20 text-center">
        <h2 className="text-2xl font-bold text-white mb-8">Simple pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-xl p-8">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro</div>
          <div className="text-5xl font-bold text-white mb-1">$15</div>
          <div className="text-[#8b949e] text-sm mb-6">per month</div>
          <ul className="text-left text-sm text-[#c9d1d9] space-y-2 mb-8">
            {[
              "Unlimited webhook endpoints",
              "5 automatic retries per event",
              "Dead letter queue & manual replay",
              "30-day delivery history",
              "HMAC signature verification",
              "Email alerts on failures"
            ].map(f => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-[#58a6ff]">✓</span>{f}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors"
          >
            Start now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">FAQ</h2>
        <div className="space-y-4">
          {[
            [
              "How does the retry logic work?",
              "When a webhook delivery fails, WebhookGuard retries with exponential backoff: 1s, 10s, 1min, 10min, and 30min. After 5 attempts the event moves to the dead letter queue where you can replay it manually."
            ],
            [
              "Do I need to change my existing webhook code?",
              "No. You simply point your webhook URL to your WebhookGuard proxy endpoint. It forwards the request to your real destination and handles all retry logic transparently."
            ],
            [
              "What happens if my endpoint is down for hours?",
              "Events are persisted in the queue and retried on schedule. Once your endpoint recovers, all queued events are delivered in order. Nothing is lost."
            ]
          ].map(([q, a]) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-lg p-5">
              <div className="text-white font-semibold mb-2">{q}</div>
              <div className="text-[#8b949e] text-sm leading-relaxed">{a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-8 text-[#8b949e] text-xs">
        &copy; {new Date().getFullYear()} WebhookGuard. All rights reserved.
      </footer>
    </main>
  )
}
