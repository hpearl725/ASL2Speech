'use client'
import { useState, useRef } from 'react'
import axios from 'axios'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

export default function UploadPage() {
  const [file, setFile] = useState(null)
  const [isDragging, setIsDragging] = useState(false)
  const [uploadProgress, setUploadProgress] = useState(0)
  const [processingStatus, setProcessingStatus] = useState('')
  const [showResults, setShowResults] = useState(false)
  const [error, setError] = useState(null)
  const fileInputRef = useRef(null)
  const backendURL = 'http://localhost:8000'
  const [processedVideoURL, setProcessedVideoURL] = useState(null)
  const [downloadVideoURL, setDownloadVideoURL] = useState(null)

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

  const handleDrop = async (e) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(false)
    const droppedFile = e.dataTransfer.files[0]
    if (droppedFile && droppedFile.type.startsWith('video/')) {
      setFile(droppedFile)
      await handleUpload(droppedFile)
    }
  }

  const handleFileChange = async (e) => {
    const selectedFile = e.target.files[0]
    if (selectedFile && selectedFile.type.startsWith('video/')) {
      setFile(selectedFile)
      await handleUpload(selectedFile)
    }
  }

  const handleUpload = async (videoFile) => {
    try {
      setError(null)
      setShowResults(false)
      setUploadProgress(0)
      setProcessingStatus('Uploading...')

      const formData = new FormData()
      formData.append('file', videoFile)

      const response = await axios.post(`${backendURL}/uploadfile/`, formData, {
        onUploadProgress: (progressEvent) => {
          const progress = Math.round((progressEvent.loaded * 100) / progressEvent.total)
          setUploadProgress(progress)
        },
      })

      if (response.status !== 200) {
        throw new Error('Upload failed')
      }

      const data = response.data

      setProcessingStatus('Processing your video for captions...')

      setProcessedVideoURL(`${backendURL}/video/${data.filename}`)
      setDownloadVideoURL(`${backendURL}/video/${data.filename}`)

      setShowResults(true)
      setProcessingStatus('')
    } catch (err) {
      setError(err.message)
      setProcessingStatus('')
      setUploadProgress(0)
    }
  }

  return (
    <div className="min-h-screen bg-[#F3F4F6] text-[#1F2937] font-sans">
      <Navbar />

      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-[#1D4ED8] text-center mb-8">
          Upload Your Sign Language Video
        </h1>

        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden mb-16">
          <div className="p-8">
            {error && (
              <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                {error}
              </div>
            )}

            <div
              className={`border-4 border-dashed rounded-2xl p-12 text-center cursor-pointer transition-all duration-300 ${
                isDragging
                  ? 'border-[#1D4ED8] bg-[#EFF6FF]'
                  : 'border-[#D1D5DB] hover:border-[#1D4ED8]'
              }`}
              onDragEnter={handleDragEnter}
              onDragLeave={handleDragLeave}
              onDragOver={handleDragOver}
              onDrop={handleDrop}
              onClick={() => fileInputRef.current.click()}
            >
              <svg
                className="mx-auto h-16 w-16 text-[#1D4ED8] mb-4 animate-bounce"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                />
              </svg>
              <p className="text-xl mb-2 text-[#1F2937]">
                Drag and drop your video file or click to upload
              </p>
              <p className="text-sm text-[#6B7280]">
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

            {file && (
              <div className="mt-6 p-4 bg-[#F3F4F6] rounded-lg">
                <p className="font-semibold text-[#1F2937]">Selected File:</p>
                <p className="text-[#4B5563]">
                  {file.name} ({(file.size / (1024 * 1024)).toFixed(2)} MB)
                </p>
              </div>
            )}

            {uploadProgress > 0 && uploadProgress < 100 && (
              <div className="mt-6">
                <p className="mb-2 text-[#1F2937]">Uploading... ({uploadProgress}%)</p>
                <div className="w-full bg-[#E5E7EB] rounded-full h-2.5 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-[#1D4ED8] to-[#10B981] h-2.5 rounded-full transition-all duration-300 ease-in-out"
                    style={{ width: `${uploadProgress}%` }}
                  ></div>
                </div>
              </div>
            )}

            {processingStatus && (
              <div className="mt-6 p-4 bg-[#F3F4F6] rounded-lg">
                <p className="font-semibold text-[#1F2937]">{processingStatus}</p>
                <div className="mt-2 flex justify-center">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#1D4ED8]"></div>
                </div>
              </div>
            )}
          </div>
        </div>

        {showResults && processedVideoURL && (
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-[#1D4ED8] text-center mb-8">
              Your Captioned Video
            </h2>
            <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="aspect-w-16 aspect-h-9">
                <video
                  controls
                  autoPlay
                  className="w-full h-full object-cover"
                  src={processedVideoURL}
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap justify-between gap-4 mb-6">
                  <button
                    onClick={() => (window.location.href = downloadVideoURL)}
                    className="flex-1 bg-[#1D4ED8] hover:bg-[#1E40AF] text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105"
                  >
                    Download Video
                  </button>
                  <button
                    onClick={() =>
                      (window.location.href = `${backendURL}/download/captions`)
                    }
                    className="flex-1 bg-[#10B981] hover:bg-[#059669] text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105"
                  >
                    Download Captions
                  </button>
                  <button
                    onClick={() =>
                      (window.location.href = `${backendURL}/download/audio`)
                    }
                    className="flex-1 bg-[#6B21A8] hover:bg-[#4C1D95] text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105"
                  >
                    Download Audio
                  </button>
                </div>
                <div className="bg-[#F3F4F6] p-4 rounded-lg">
                  <h3 className="font-semibold text-lg mb-2 text-[#1F2937]">
                    Processed Video Details:
                  </h3>
                  <p className="text-[#4B5563]">Captions Generated: 400 words</p>
                  <p className="text-[#4B5563]">Processing Time: 50 seconds</p>
                  <p className="text-[#4B5563]">Confidence Score: 95%</p>
                </div>
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  )
}
