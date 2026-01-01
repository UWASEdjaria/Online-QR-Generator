/** @jsxImportSource react */
import React, { ReactNode } from 'react'
import Link from 'next/link'
import './globals.css'

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
      <body className="bg-gray-100 font-sans">
        {/* Navbar */}
        <nav className="bg-purple-600 text-white px-6 py-4 flex justify-between items-center shadow-lg">
          <div className="text-2xl font-bold animate-bounce">QR Generator</div>
          <ul className="flex gap-6">
            <li><Link href="/" className="hover:underline transition-all">Home</Link></li>
            <li><a href="#features" className="hover:underline transition-all">Features</a></li>
            <li><a href="#contact" className="hover:underline transition-all">Contact</a></li>
          </ul>
        </nav>

        <main className="p-6">{children}</main>

        <footer className="bg-gray-800 text-white text-center py-4 mt-8">
          &copy; 2026 QR Generator. All rights reserved.
        </footer>
      </body>
    </html>
  )
}
