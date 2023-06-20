import './globals.css'
import { Inter } from 'next/font/google'
import NavBar from './navbar'
import Footer from './footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Portfolio',
  description: 'Portfolio of Michael McGuiness, front-end web developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  )
}
