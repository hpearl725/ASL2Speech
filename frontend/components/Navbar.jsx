'use client'
import Link from 'next/link'

export default function Navbar() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-10">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-[#1D4ED8]">
          Echo
        </Link>
        <div className="space-x-6">
          <Link
            href="/upload"
            className="text-[#1F2937] hover:text-[#1D4ED8] transition-colors duration-300"
          >
            Upload
          </Link>
          <Link
            href="/features"
            className="text-[#1F2937] hover:text-[#1D4ED8] transition-colors duration-300"
          >
            Features
          </Link>
          <Link
            href="/about"
            className="text-[#1F2937] hover:text-[#1D4ED8] transition-colors duration-300"
          >
            About
          </Link>
        </div>
      </nav>
    </header>
  )
}
