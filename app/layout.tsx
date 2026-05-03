import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'WebhookGuard – Ensure webhook delivery with smart retry logic',
  description: 'A webhook proxy service that guarantees delivery with exponential backoff, dead letter queues, and delivery confirmation tracking for SaaS companies.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="6cc9d8f1-b0a9-46fb-a225-bc2a571d01a8"></script>
      </head>
      <body>{children}</body>
    </html>
  )
}
