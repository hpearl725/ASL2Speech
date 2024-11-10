import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <header className="bg-white sticky top-0 z-10 border-b border-gray-200">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-semibold text-gray-900">Echo</Link>
          <div className="space-x-6">
            <Link href="/upload" className="text-gray-600 hover:text-gray-900 transition-colors duration-300">Upload</Link>
            <Link href="/features" className="text-gray-600 hover:text-gray-900 transition-colors duration-300">Features</Link>
            <Link href="/about" className="text-gray-600 hover:text-gray-900 transition-colors duration-300">About</Link>
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-12">
        <section className="text-center mb-20">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Transform Sign Language
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Harness the power of AI to bridge communication gaps and make sign language accessible to everyone.
          </p>
          <div className="flex justify-center space-x-4">
            <Link
              href="/upload"
              className="bg-blue-500 text-white font-semibold py-3 px-6 rounded-full hover:bg-blue-600 transition-colors duration-300 inline-flex items-center group"
            >
              Upload Video
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={20} />
            </Link>
            <Link
              href="/features"
              className="bg-gray-200 text-gray-800 font-semibold py-3 px-6 rounded-full hover:bg-gray-300 transition-colors duration-300"
            >
              Learn More
            </Link>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-2xl transition-shadow duration-300 hover:shadow-md">
              <svg className="w-12 h-12 text-blue-500 mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
              </svg>
              <h3 className="text-xl font-semibold mb-3">Sign-to-Text Conversion</h3>
              <p className="text-gray-600">
                Advanced AI processes gestures and translates them into accurate text captions.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl transition-shadow duration-300 hover:shadow-md">
              <svg className="w-12 h-12 text-blue-500 mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15.536a5 5 0 001.414 1.414m2.828-9.9a9 9 0 012.828-2.828" />
              </svg>
              <h3 className="text-xl font-semibold mb-3">Text-to-Speech</h3>
              <p className="text-gray-600">
                Convert captions into natural-sounding audio for enhanced accessibility.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl transition-shadow duration-300 hover:shadow-md">
              <svg className="w-12 h-12 text-blue-500 mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-xl font-semibold mb-3">Real-Time Feedback</h3>
              <p className="text-gray-600">
                View transcription progress and detection confidence while processing.
              </p>
            </div>
          </div>
        </section>

        <section className="text-center mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join us in making communication more accessible. Upload your first video and experience the power of AI-driven sign language translation.
          </p>
          <Link
            href="/upload"
            className="bg-blue-500 text-white font-semibold py-3 px-6 rounded-full hover:bg-blue-600 transition-colors duration-300 inline-flex items-center group"
          >
            Try Echo Now
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={20} />
          </Link>
        </section>
      </main>

      <footer className="bg-gray-100 text-gray-600 py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center space-x-6 mb-6">
            <Link href="/about" className="hover:text-gray-900 transition-colors duration-300">About</Link>
            <a href="https://github.com" className="hover:text-gray-900 transition-colors duration-300">GitHub</a>
            <Link href="/privacy" className="hover:text-gray-900 transition-colors duration-300">Privacy</Link>
            <Link href="/contact" className="hover:text-gray-900 transition-colors duration-300">Contact</Link>
          </div>
          <p>&copy; 2023 Echo. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}