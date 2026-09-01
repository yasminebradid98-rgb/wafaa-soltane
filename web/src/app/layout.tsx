import { Outfit } from 'next/font/google'
import './globals.css'

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['200', '300', '400'], // Télécharge les grandeurs très fines
  variable: '--font-outfit',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={outfit.variable}>
      <body className="font-sans antialiased bg-[#e2e1dd] text-[#1a1a1a]">
        {children}
      </body>
    </html>
  )
}