'use client'
import { useState, useRef } from 'react'
import Head from 'next/head'

export default function Upload() {
  const [file, setFile] = useState(null)
  const [isDragging, setIsDragging] = useState(false)
  const [uploadProgress, setUploadProgress] = useState(0)
  const [processingStatus, setProcessingStatus] = useState('')
  const [showResults, setShowResults] = useState(false)
  const fileInputRef = useRef(null)

  const handleDragEnter = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(true)
  }

  const handleDragLeave = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(false)
  }

  const handleDragOver = (e) => {
    e.preventDefault()
    e.stopPropagation()
  }

  const handleDrop = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(false)
    const droppedFile = e.dataTransfer.files[0]
    if (droppedFile && droppedFile.type.startsWith('video/')) {
      setFile(droppedFile)
      simulateUploadAndProcessing()
    }
  }

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0]
    if (selectedFile && selectedFile.type.startsWith('video/')) {
      setFile(selectedFile)
      simulateUploadAndProcessing()
    }
  }

  const simulateUploadAndProcessing = () => {
    setShowResults(false);
    setUploadProgress(0);
    setProcessingStatus('');
    const uploadInterval = setInterval(() => {
      setUploadProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(uploadInterval)
          setProcessingStatus('Processing your video for captions...')
          setTimeout(() => {
            setProcessingStatus('Analyzing gestures...')
            setTimeout(() => {
              setProcessingStatus('Generating captions...')
              setTimeout(() => {
                setProcessingStatus('Rendering final video...')
                setTimeout(() => {
                  setShowResults(true)
                }, 2000)
              }, 2000)
            }, 2000)
          }, 2000)
          return 100
        }
        return prevProgress + 10
      })
    }, 500)
  }

  return (
    <div className="flex flex-col min-h-screen bg-[#F5F5F5] text-[#333333] font-sans">
      <Head>
        <title>Upload Video - Echo</title>
        <meta name="description" content="Upload your sign language video for caption and audio conversion" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-white shadow-sm">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <svg className="w-8 h-8 text-[#0078D7]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
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

      <main className="container mx-auto px-4 py-8 flex-grow">
        <h1 className="text-4xl font-bold text-[#0078D7] text-center mb-8">
          Upload Your Sign Language Video
        </h1>

        <div className="max-w-3xl mx-auto">
          <div
            className={`border-2 border-dashed rounded-lg p-12 text-center cursor-pointer transition-colors duration-300 ${
              isDragging ? 'border-[#0078D7] bg-[#F0F8FF]' : 'border-[#A4E5D9] hover:border-[#0078D7]'
            }`}
            onDragEnter={handleDragEnter}
            onDragLeave={handleDragLeave}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            onClick={() => fileInputRef.current.click()}
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
            <p className="text-xl mb-4">
              Drag and drop your video file or click to upload
            </p>
            <p className="text-sm text-gray-500 mb-4">
              Supported formats: MP4, MOV, AVI (max 500MB)
            </p>
            <input
              ref={fileInputRef}
              type="file"
              className="hidden"
              accept="video/*"
              onChange={handleFileChange}
              aria-label="Upload video file"
            />
          </div>

          <button
            className="mt-4 bg-[#0078D7] hover:bg-[#005a9e] text-white font-semibold py-2 px-4 rounded w-full transition-colors duration-300"
            onClick={() => fileInputRef.current.click()}
          >
            Select Video
          </button>

          {file && (
            <div className="mt-4 p-4 bg-white rounded-lg shadow-md">
              <p className="font-semibold">Selected File:</p>
              <p>{file.name} ({(file.size / (1024 * 1024)).toFixed(2)} MB)</p>
            </div>
          )}

          {uploadProgress > 0 && uploadProgress < 100 && (
            <div className="mt-4">
              <p className="mb-2">Uploading... ({uploadProgress}%)</p>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-[#0078D7] h-2.5 rounded-full transition-all duration-300 ease-in-out"
                  style={{ width: `${uploadProgress}%` }}
                ></div>
              </div>
            </div>
          )}

          {processingStatus && (
            <div className="mt-4 p-4 bg-white rounded-lg shadow-md">
              <p className="font-semibold">{processingStatus}</p>
              <div className="mt-2 flex justify-center">
                <svg className="animate-spin h-5 w-5 text-[#0078D7]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              </div>
            </div>
          )}

          {showResults && (
            <div className="mt-8 p-6 bg-white rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-[#0078D7] mb-4">Your Captioned Video</h2>
              <div className="aspect-w-16 aspect-h-9 mb-4">
                <video 
                  controls 
                  autoPlay 
                  className="rounded-lg w-full" 
                  src="/placeholder-video.mp4"
                ></video>
              </div>
              <div className="flex justify-between mb-4">
                <button className="bg-[#0078D7] hover:bg-[#005a9e] text-white font-semibold py-2 px-4 rounded transition-colors duration-300">
                  Download Video
                </button>
                <button className="bg-[#A4E5D9] hover:bg-[#7DCEC1] text-[#333333] font-semibold py-2 px-4 rounded transition-colors duration-300">
                  Download Captions
                </button>
                <button className="bg-[#FFC857] hover:bg-[#FFBB33] text-[#333333] font-semibold py-2 px-4 rounded transition-colors duration-300">
                  Download Audio
                </button>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Processed Video Details:</h3>
                <p>Captions Generated: 350 words</p>
                <p>Processing Time: 45 seconds</p>
              </div>
              <button 
                onClick={() => {
                  setFile(null);
                  setShowResults(false);
                  setUploadProgress(0);
                  setProcessingStatus('');
                }} 
                className="mt-4 bg-[#0078D7] hover:bg-[#005a9e] text-white font-semibold py-2 px-4 rounded w-full transition-colors duration-300"
              >
                Upload Another Video
              </button>
            </div>
          )}
        </div>
      </main>

      <footer className="bg-[#0078D7] text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2023 Echo. All rights reserved.</p>
          <p className="mt-2">
            Bridging communication gaps with cutting-edge AI technology.
          </p>
          <a href="#" className="text-[#A4E5D9] hover:text-white mt-4 inline-block">Learn More About AI in Accessibility</a>
        </div>
      </footer>
    </div>
  )
}