/** @jsxImportSource react */
import React, { ReactNode } from 'react'
import Link from 'next/link'
import './globals.css'
import { QrCode } from 'lucide-react'

export const metadata = {
  title: 'QR Generator',
  description: 'Create stylish QR codes online',
}

interface RootLayoutProps {
  children: ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className="bg-white font-sans">
        {/* Navbar */}
        <nav className="bg-white text-black px-4 py-2 flex justify-between items-center shadow-lg transition-transform duration-150  hover:scale-105">
          <div className="flex items-center gap-2">
            <QrCode className="w-15 h-15 font-bold text-green-400 transition-all hover:scale-110" />
            <div className="text-2xl font-semibold">
              <span className='text-black font-light text-lg'>Online</span><br /> QR Generator
            </div>
          </div>
          <ul className="flex gap-6">
            <li><Link href="/" className="hover:text-green-500 transition-all">Home</Link></li>
            <li><a href="#features" className="hover:text-green-500 transition-all">Features</a></li>
            <li><a href="#contact" className="hover:text-green-500 transition-all">Contact</a></li>
          </ul>
        </nav>

        <main className="flex-1 min-h-screen p-6">{children}</main>

        <footer className="bg-white border-t border-gray-300 text-gray-500 text-center py-4 mt-8">
          &copy; 2026 Online QR Generator. All rights reserved
        </footer>
      </body>
    </html>
  )
}
