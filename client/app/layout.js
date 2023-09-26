import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '../components/Navbar'
import '@rainbow-me/rainbowkit/styles.css'
import { Providers } from './providers'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Paper Stack',
  description: 'Populating Open-data using filecoin'
}

export default function RootLayout ({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  )
}
