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
              </div>
              <h3 className="text-2xl font-semibold mb-2">Founder Name 1</h3>
              <p className="text-[#4B5563] text-center max-w-md">
                [Insert a compelling biography about Founder 1 here, highlighting their background,
                passions, and contributions to Echo.]
              </p>
            </div>
            {/* Founder 2 */}
            <div className="flex flex-col items-center">
              <div className="w-48 h-48 bg-gray-300 rounded-full mb-6">
                {/* Placeholder for image */}
              </div>
              <h3 className="text-2xl font-semibold mb-2">Founder Name 2</h3>
              <p className="text-[#4B5563] text-center max-w-md">
                [Insert a compelling biography about Founder 2 here, highlighting their background,
                passions, and contributions to Echo.]
              </p>
            </div>
            {/* Founder 3 */}
            <div className="flex flex-col items-center">
              <div className="w-48 h-48 bg-gray-300 rounded-full mb-6">
                {/* Placeholder for image */}
              </div>
              <h3 className="text-2xl font-semibold mb-2">Founder Name 3</h3>
              <p className="text-[#4B5563] text-center max-w-md">
                [Insert a compelling biography about Founder 3 here, highlighting their background,
                passions, and contributions to Echo.]
              </p>
            </div>
            {/* Founder 4 */}
            <div className="flex flex-col items-center">
              <div className="w-48 h-48 bg-gray-300 rounded-full mb-6">
                {/* Placeholder for image */}
              </div>
              <h3 className="text-2xl font-semibold mb-2">Founder Name 4</h3>
              <p className="text-[#4B5563] text-center max-w-md">
                [Insert a compelling biography about Founder 4 here, highlighting their background,
                passions, and contributions to Echo.]
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-[#1D4ED8] text-center mb-8">Our Story</h2>
          <p className="text-xl text-[#4B5563] leading-relaxed max-w-3xl mx-auto">
            [Insert a detailed and engaging narrative about the inception of Echo, the challenges
            faced, and the journey towards developing this innovative platform. Discuss the team's
            vision, values, and commitment to making a positive impact.]
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-[#1D4ED8] text-center mb-8">Our Mission</h2>
          <p className="text-xl text-[#4B5563] leading-relaxed max-w-3xl mx-auto">
            [Elaborate on Echo's mission to improve accessibility, promote inclusivity, and leverage
            technology for social good. Explain how the platform aims to transform communication for
            sign language users and the broader community.]
          </p>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}
