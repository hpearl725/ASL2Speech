'use client'
import Link from 'next/link'

export default function Navbar() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-10">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-[#1D4ED8] rounded-full flex items-center justify-center">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15.536a5 5 0 001.414 1.414m2.828-9.9a9 9 0 012.828-2.828"
              />
            </svg>
          </div>
          <Link href="/" className="text-2xl font-bold text-[#1D4ED8]">
            Echo
          </Link>
        </div>
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
