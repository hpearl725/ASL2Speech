'use client'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#F3F4F6] text-[#1F2937] font-sans">
      <Navbar />

      <main className="container mx-auto px-4 py-12">
        <section className="mb-16">
          <h1 className="text-5xl font-bold text-[#1D4ED8] text-center mb-8">About Us</h1>
          <p className="text-xl text-[#4B5563] leading-relaxed max-w-3xl mx-auto mb-12">
            At Echo, we believe in breaking down communication barriers and making technology
            accessible to everyone. Our mission is to harness the power of artificial intelligence to
            bridge the gap between sign language users and the world around them.
          </p>

          <h2 className="text-3xl font-bold text-[#1D4ED8] text-center mb-8">Our Founders</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Founder 1 */}
            <div className="flex flex-col items-center">
              <div className="w-48 h-48 bg-gray-300 rounded-full mb-6">
                {/* Placeholder for image */}
                <img src="/images/Byren.jpeg" alt="Byren" className="w-full h-full rounded-full object-cover" />
              </div>
              <h3 className="text-2xl font-semibold mb-2">Byren</h3>
              <p className="text-[#4B5563] text-center max-w-md">
                A passionate software engineer with expertise in machine learning and computer vision. 
                Byren leads the technical development of Echo's AI models and ensures robust system architecture.
              </p>
            </div>
            {/* Founder 2 */}
            <div className="flex flex-col items-center">
            <div className="w-48 h-48 bg-gray-300 rounded-full mb-6">
                {/* Image for Ethan */}
                <img src="/images/ethan.jpeg" alt="Ethan" className="w-full h-full rounded-full object-cover" />
            </div>
            <h3 className="text-2xl font-semibold mb-2">Ethan</h3>
            <p className="text-[#4B5563] text-center max-w-md">
            With a strong background in user experience, cybersecurity, CV, and ML,
            Ethan leverages his expertise to pioneer advanced, 
            accessible solutions for sign language users.
            </p>
            </div>
            {/* Founder 3 */}
            <div className="flex flex-col items-center">
              <div className="w-48 h-48 bg-gray-300 rounded-full mb-6">
                {/* Placeholder for image */}
                <img src="/images/harrison.jpeg" alt="harrison" className="w-full h-full rounded-full object-cover" />
              </div>
              <h3 className="text-2xl font-semibold mb-2">Harrison</h3>
              <p className="text-[#4B5563] text-center max-w-md">
                A skilled Machine Learning Engineer with a background in Robotics, Physics Simulations, and Data Visualization. Harrison 
                ensures Echo's machine learning models remains performant and reliable while overseeing model development.
              </p>
            </div>
            {/* Founder 4 */}
            <div className="flex flex-col items-center">
              <div className="w-48 h-48 bg-gray-300 rounded-full mb-6">
                {/* Placeholder for image */}
                <img src="/images/Berit.jpeg" alt="Berit" className="w-full h-full rounded-full object-cover" />
              </div>
              <h3 className="text-2xl font-semibold mb-2">Berit</h3>
              <p className="text-[#4B5563] text-center max-w-md">
                With deep expertise in natural language processing and AI, Berit leads research and 
                development initiatives to improve Echo's sign language recognition capabilities.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-[#1D4ED8] text-center mb-8">Our Story</h2>
          <p className="text-xl text-[#4B5563] leading-relaxed max-w-3xl mx-auto">
            Echo began as a passionate project among four university students who recognized the need 
            for better accessibility tools in sign language communication. What started as a research 
            project has grown into a comprehensive platform that combines cutting-edge AI technology 
            with practical accessibility solutions. Our journey has been marked by continuous learning, 
            collaboration with the deaf community, and a commitment to creating technology that makes 
            a real difference in people's lives.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-[#1D4ED8] text-center mb-8">Our Mission</h2>
          <p className="text-xl text-[#4B5563] leading-relaxed max-w-3xl mx-auto">
            Echo's mission is to revolutionize sign language communication through innovative AI 
            technology. We strive to create a world where language barriers dissolve, and everyone 
            has equal access to communication tools. By combining advanced machine learning with 
            user-friendly design, we're working to make sign language translation accessible, 
            accurate, and instantaneous for all users.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  )
}
