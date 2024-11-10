'use client'
import Head from 'next/head'
import { useState } from 'react'

export default function HomePage() {
  const [file, setFile] = useState(null)

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0]
    setFile(selectedFile)
  }

  return (
    <div className="min-h-screen bg-[#F5F5F5] text-[#333333] font-sans">
      <Head>
        <title>Echo - Transform Sign Language into Captions and Audio</title>
        <meta name="description" content="Echo is an accessibility-focused application that transforms videos of sign language into synchronized captions and audio." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-white shadow-sm">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <svg
              className="w-8 h-8 text-[#0078D7]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11"
              />
            </svg>
            <span className="text-2xl font-bold text-[#0078D7]">Echo</span>
          </div>
          <div className="space-x-4">
            <button className="text-[#333333] hover:text-[#0078D7]">Upload</button>
            <button className="text-[#333333] hover:text-[#0078D7]">Saved Files</button>
            <button className="text-[#333333] hover:text-[#0078D7]">Learn More</button>
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-[#0078D7] text-center mb-8">
          Transform Sign Language into Captions and Audio
        </h1>

        <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-8">
            <div className="text-center mb-8">
              <p className="text-xl mb-4">
                Drag and drop your video file or click to upload
              </p>
              <p className="text-sm text-gray-500">
                Supported formats: MP4, MOV, AVI (max 500MB)
              </p>
            </div>

            <div 
              className="border-2 border-dashed border-[#A4E5D9] rounded-lg p-12 text-center cursor-pointer hover:border-[#0078D7] transition-colors duration-300"
              onClick={() => document.getElementById('fileInput').click()}
            >
              <svg
                className="mx-auto h-12 w-12 text-[#0078D7] mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                />
              </svg>
              <input
                id="fileInput"
                type="file"
                className="hidden"
                accept="video/*"
                onChange={handleFileChange}
                aria-label="Upload video file"
              />
              <button className="bg-[#0078D7] hover:bg-[#005a9e] text-white font-semibold py-2 px-4 rounded">
                Select Video
              </button>
              {file && <p className="mt-4 text-sm text-gray-600">Selected file: {file.name}</p>}
            </div>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            icon={
              <svg className="h-8 w-8 text-[#FF6F61]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            }
            title="Sign-to-Text Conversion"
            description="Advanced AI processes gestures and translates them into accurate text captions."
          />
          <FeatureCard
            icon={
              <svg className="h-8 w-8 text-[#FFC857]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            }
            title="Text-to-Speech"
            description="Convert captions into natural-sounding audio for enhanced accessibility."
          />
          <FeatureCard
            icon={
              <svg className="h-8 w-8 text-[#0078D7]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            }
            title="Real-Time Feedback"
            description="View transcription progress and detection confidence while processing."
          />
        </div>
      </main>

      <footer className="bg-[#0078D7] text-white py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Echo. All rights reserved.</p>
          <p className="mt-2">
            Bridging communication gaps with cutting-edge AI technology.
          </p>
        </div>
      </footer>
    </div>
  )
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <div className="p-6">
        <div className="flex items-center justify-center mb-4">{icon}</div>
        <h3 className="text-xl font-semibold text-[#0078D7] mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  )
}