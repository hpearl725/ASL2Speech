'use client'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[#1F2937] text-white py-12">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center space-x-6 mb-6">
          <Link
            href="/about"
            className="hover:text-[#10B981] transition-colors duration-300"
          >
            About
          </Link>
          <a
            href="https://github.com"
            className="hover:text-[#10B981] transition-colors duration-300"
          >
            GitHub
          </a>
          <Link
            href="/journey"
            className="hover:text-[#10B981] transition-colors duration-300"
          >
            Hackathon Journey
          </Link>
          <Link
            href="/contact"
            className="hover:text-[#10B981] transition-colors duration-300"
          >
            Contact
          </Link>
        </div>
        <p>&copy; 2024 Echo. All rights reserved.</p>
      </div>
    </footer>
  )
}
