'use client'
import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#F3F4F6] text-[#1F2937] font-sans">
      <header className="bg-white shadow-md sticky top-0 z-10">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-[#1D4ED8] rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15.536a5 5 0 001.414 1.414m2.828-9.9a9 9 0 012.828-2.828" />
              </svg>
            </div>
            <span className="text-2xl font-bold text-[#1D4ED8]">Echo</span>
          </div>
          <div className="space-x-6">
            <Link href="/upload" className="text-[#1F2937] hover:text-[#1D4ED8] transition-colors duration-300">Upload</Link>
            <Link href="/features" className="text-[#1F2937] hover:text-[#1D4ED8] transition-colors duration-300">Features</Link>
            <Link href="/about" className="text-[#1F2937] hover:text-[#1D4ED8] transition-colors duration-300">About</Link>
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-12">
        <section className="text-center mb-16">
          <h1 className="text-5xl font-bold text-[#1D4ED8] mb-4">
            Transform Sign Language into Captions and Audio Seamlessly
          </h1>
          <p className="text-xl text-[#4B5563] mb-8">
            Harness the power of AI to bridge communication gaps
          </p>
          <div className="flex justify-center space-x-4">
            <Link href="/upload" className="bg-[#1D4ED8] text-white font-semibold py-3 px-6 rounded-full hover:bg-[#1E40AF] transition-colors duration-300 transform hover:scale-105">
              Upload Video
            </Link>
            <Link href="/features" className="bg-[#D1D5DB] text-[#1F2937] font-semibold py-3 px-6 rounded-full hover:bg-[#9CA3AF] transition-colors duration-300 transform hover:scale-105">
              Learn More
            </Link>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-[#1D4ED8] text-center mb-8">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
              <svg className="w-12 h-12 text-[#1D4ED8] mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
              </svg>
              <h3 className="text-xl font-semibold mb-2">Sign-to-Text Conversion</h3>
              <p className="text-[#4B5563]">Advanced AI processes gestures and translates them into accurate text captions.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
              <svg className="w-12 h-12 text-[#1D4ED8] mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15.536a5 5 0 001.414 1.414m2.828-9.9a9 9 0 012.828-2.828" />
              </svg>
              <h3 className="text-xl font-semibold mb-2">Text-to-Speech</h3>
              <p className="text-[#4B5563]">Convert captions into natural-sounding audio for enhanced accessibility.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
              <svg className="w-12 h-12 text-[#1D4ED8] mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-xl font-semibold mb-2">Real-Time Feedback</h3>
              <p className="text-[#4B5563]">View transcription progress and detection confidence while processing.</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#1F2937] text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center space-x-6 mb-6">
            <Link href="/about" className="hover:text-[#10B981] transition-colors duration-300">About</Link>
            <a href="https://github.com" className="hover:text-[#10B981] transition-colors duration-300">GitHub</a>
            <Link href="/journey" className="hover:text-[#10B981] transition-colors duration-300">Hackathon Journey</Link>
            <Link href="/contact" className="hover:text-[#10B981] transition-colors duration-300">Contact</Link>
          </div>
          <p>&copy; 2023 Echo. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}