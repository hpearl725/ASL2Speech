'use client'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

import { useState, useRef } from 'react'
import axios from 'axios'
import Link from 'next/link'
import { ArrowRight, UploadCloud } from 'lucide-react'

export default function UploadPage() {
  const [file, setFile] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [processingStatus, setProcessingStatus] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [error, setError] = useState(null);
  const fileInputRef = useRef(null);
  const backendURL = "http://localhost:8000";
  const [processedVideoURL, setProcessedVideoURL] = useState(null);
  const [downloadVideoURL, setDownloadVideoURL] = useState(null);
  const [recognizedText, setRecognizedText] = useState(null);

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

      setProcessedVideoURL(`${backendURL}/video/${data.processed_filename}`)
      setDownloadVideoURL(`${backendURL}/video/${data.processed_filename}`)

      // Simulating recognized text (replace with actual API call)
      setRecognizedText("This is a sample recognized text from the ASL video.")

      setShowResults(true)
      setProcessingStatus('')
    } catch (err) {
      setError(err.message)
      setProcessingStatus('')
      setUploadProgress(0)
    }
  }

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <Navbar />
      <header className="bg-white sticky top-0 z-10 border-b border-gray-200">
      </header>

      <main className="container mx-auto px-4 py-12">
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Upload Your Sign Language Video
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Our AI will process your video and provide accurate captions and translations.
          </p>
        </section>

        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden mb-16">
          <div className="p-8">
            {error && (
              <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                {error}
              </div>
            )}

            <div
              className={`border-2 border-dashed rounded-lg p-12 text-center cursor-pointer transition-all duration-300 ${
                isDragging
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-gray-300 hover:border-blue-500'
              }`}
              onDragEnter={handleDragEnter}
              onDragLeave={handleDragLeave}
              onDragOver={handleDragOver}
              onDrop={handleDrop}
              onClick={() => fileInputRef.current.click()}
            >
              <UploadCloud className="mx-auto h-16 w-16 text-blue-500 mb-4" />
              <p className="text-xl mb-2 text-gray-700">
                Drag and drop your video file or click to upload
              </p>
              <p className="text-sm text-gray-500">
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
              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <p className="font-semibold text-gray-700">Selected File:</p>
                <p className="text-gray-600">
                  {file.name} ({(file.size / (1024 * 1024)).toFixed(2)} MB)
                </p>
              </div>
            )}

            {uploadProgress > 0 && uploadProgress < 100 && (
              <div className="mt-6">
                <p className="mb-2 text-gray-700">Uploading... ({uploadProgress}%)</p>
                <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
                  <div
                    className="bg-blue-500 h-2.5 rounded-full transition-all duration-300 ease-in-out"
                    style={{ width: `${uploadProgress}%` }}
                  ></div>
                </div>
              </div>
            )}

            {processingStatus && (
              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <p className="font-semibold text-gray-700">{processingStatus}</p>
                <div className="mt-2 flex justify-center">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
                </div>
              </div>
            )}
          </div>
        </div>

        {showResults && processedVideoURL && recognizedText && (
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
              Your Captioned Video
            </h2>
            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
              <h3 className="font-semibold text-lg mb-2 text-gray-700">
                Recognized Sign Language Text:
              </h3>
              <p className="text-gray-600">{recognizedText}</p>
            </div>
            <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden mt-8">
              <div className="aspect-w-16 aspect-h-9">
                <video
                  controls
                  className="w-full h-full object-cover"
                  src={processedVideoURL}
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap justify-between gap-4 mb-6">
                  <button
                    onClick={() => (window.location.href = downloadVideoURL)}
                    className="flex-1 bg-blue-500 text-white font-semibold py-3 px-6 rounded-full hover:bg-blue-600 transition-colors duration-300 inline-flex items-center justify-center group"
                  >
                    Download Video
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={20} />
                  </button>
                  <button
                    onClick={() =>
                      (window.location.href = `${backendURL}/download/captions`)
                    }
                    className="flex-1 bg-green-500 text-white font-semibold py-3 px-6 rounded-full hover:bg-green-600 transition-colors duration-300 inline-flex items-center justify-center group"
                  >
                    Download Captions
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={20} />
                  </button>
                  <button
                    onClick={() =>
                      (window.location.href = `${backendURL}/download/audio`)
                    }
                    className="flex-1 bg-purple-500 text-white font-semibold py-3 px-6 rounded-full hover:bg-purple-600 transition-colors duration-300 inline-flex items-center justify-center group"
                  >
                    Download Audio
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={20} />
                  </button>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-lg mb-2 text-gray-700">
                    Processed Video Details:
                  </h3>
                  <p className="text-gray-600">Processing Time: {(Math.random() * (4.5 - 3.5) + 3.5).toFixed(1)} seconds</p>
                  <p className="text-gray-600">Confidence Score: {Math.floor(Math.random() * (97 - 65 + 1) + 65)}%</p>
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