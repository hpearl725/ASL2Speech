import Link from 'next/link'
import { ArrowRight, Video, Type, Clock, Download, BarChart, Globe } from 'lucide-react'

export default function Features() {
  const features = [
    {
      icon: <Video className="w-12 h-12 text-blue-500 mb-4" />,
      title: "Advanced Video Processing",
      description: "Upload and process videos with cutting-edge AI recognition technology, supporting various formats up to 500MB.",
    },
    {
      icon: <Type className="w-12 h-12 text-blue-500 mb-4" />,
      title: "Accurate Text Recognition",
      description: "Extract text from sign language videos with high accuracy, powered by state-of-the-art machine learning models.",
    },
    {
      icon: <Clock className="w-12 h-12 text-blue-500 mb-4" />,
      title: "Real-time Analysis",
      description: "Get instant results and analysis of your video content, with live progress tracking and status updates.",
    },
    {
      icon: <Download className="w-12 h-12 text-blue-500 mb-4" />,
      title: "Multiple Export Options",
      description: "Download your results in various formats including captioned video, text transcripts, and audio files.",
    },
    {
      icon: <BarChart className="w-12 h-12 text-blue-500 mb-4" />,
      title: "Detailed Analytics",
      description: "Receive comprehensive analytics on your processed videos, including confidence scores and processing times.",
    },
    {
      icon: <Globe className="w-12 h-12 text-blue-500 mb-4" />,
      title: "Multi-language Support",
      description: "Translate sign language to multiple written languages, breaking down communication barriers globally.",
    },
  ];

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
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Powerful Features for Sign Language Translation
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Discover how Echo's cutting-edge technology can transform the way you communicate and understand sign language.
          </p>
        </section>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-md transition-all duration-300 hover:shadow-xl">
              {feature.icon}
              <h3 className="text-xl font-semibold mb-3 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <section className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Experience These Features?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Start translating sign language videos today and unlock the power of seamless communication.
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