import type React from "react"
import type { Metadata } from "next"
import "bootstrap/dist/css/bootstrap.min.css"
import "./globals.css"

export const metadata: Metadata = {
  title: "Muskan Popli - Full Stack Developer & AI Enthusiast",
  description:
    "Computer Science Engineering student specializing in full-stack development, AI technologies, and innovative web solutions.",
  keywords: "Full Stack Developer, AI, React, Node.js, Web Development, Computer Science",
  authors: [{ name: "Muskan Popli" }],
  generator: 'v0.dev'
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" async></script>
      </body>
    </html>
  )
}
