import type { Metadata } from 'next'
import './globals.css'
import './globals.css'; // Ajustez le chemin vers votre fichier CSS
export const metadata: Metadata = {
  title: 'Wafaa Soltane - Photography',
  description: 'Wafaa Soltane – Photographer and visual artist capturing moments and stories.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Signika:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="dark:bg-black bg-white min-h-screen text-black dark:text-white">
        {children}
      </body>
    </html>
  )
}