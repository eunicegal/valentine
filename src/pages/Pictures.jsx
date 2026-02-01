import { useState } from 'react'

const Pictures = () => {
  const [selectedImage, setSelectedImage] = useState(null)
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)

  const memories = [
    {
      src: '/pictures/emma1.jpeg',
      alt: 'Beautiful Memory',
      caption: 'A moment to treasure',
      date: 'Forever in my heart'
    },
    {
      src: '/pictures/emma2.jpeg',
      alt: 'Sweet Memory',
      caption: 'Time stands still',
      date: 'A perfect day'
    },
    {
      src: '/pictures/emma3.jpeg',
      alt: 'Precious Memory',
      caption: 'Pure happiness',
      date: 'Never forget'
    },
    {
      src: '/pictures/eunice1.jpeg',
      alt: 'Cherished Memory',
      caption: 'Love captured',
      date: 'Our story'
    }
  ]

  const openLightbox = (index) => {
    setSelectedImage(index)
    setIsLightboxOpen(true)
  }

  const closeLightbox = () => {
    setIsLightboxOpen(false)
    setTimeout(() => setSelectedImage(null), 300)
  }

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % memories.length)
  }

  const prevImage = () => {
    setSelectedImage((prev) => (prev - 1 + memories.length) % memories.length)
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-pink-50 via-rose-50 to-purple-50 flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-64 h-64 bg-rose-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Floating hearts */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute text-pink-300 opacity-30 animate-float-slow"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${6 + Math.random() * 4}s`,
              fontSize: `${15 + Math.random() * 15}px`
            }}
          >
            💕
          </div>
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 w-full max-w-6xl">
        {/* Title section */}
        <div className="text-center mb-12">
          <div className="inline-block mb-6">
            <div className="flex items-center justify-center space-x-3 mb-3">
              <span className="text-4xl animate-bounce">📸</span>
              <h1 className="text-5xl md:text-7xl font-bold bg-linear-to-r from-pink-600 via-rose-500 to-purple-600 bg-clip-text text-transparent animate-gradient">
                Our Memories
              </h1>
              <span className="text-4xl animate-bounce" style={{ animationDelay: '0.2s' }}>💖</span>
            </div>
            <div className="h-1 bg-linear-to-r from-pink-400 via-rose-400 to-purple-400 rounded-full"></div>
          </div>
          <p className="text-xl md:text-2xl text-gray-600 font-light">
            Every picture tells our story 💕
          </p>
        </div>

        {/* Photo gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8 mb-12">
          {memories.map((memory, index) => (
            <div
              key={index}
              onClick={() => openLightbox(index)}
              className="group relative cursor-pointer"
            >
              {/* Polaroid-style frame */}
              <div className="bg-white p-3 md:p-4 rounded-lg shadow-xl transform transition-all duration-500 hover:scale-105 hover:rotate-1 hover:shadow-2xl">
                {/* Image container */}
                <div className="relative overflow-hidden rounded-md bg-gray-100 aspect-square">
                  <img
                    src={memory.src}
                    alt={memory.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <p className="text-lg font-semibold mb-1">{memory.caption}</p>
                      <p className="text-sm opacity-90">{memory.date}</p>
                    </div>
                  </div>

                  {/* Click to view indicator */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/90 rounded-full p-4 shadow-lg">
                      <svg className="w-8 h-8 text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                    </div>
                  </div>

                  {/* Corner hearts */}
                  <div className="absolute top-2 right-2 text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse">
                    💖
                  </div>
                </div>

                {/* Caption below image (Polaroid style) */}
                <div className="mt-3 text-center">
                  <p className="text-gray-600 font-handwriting text-lg">{memory.caption}</p>
                </div>
              </div>

              {/* Decorative tape effect */}
              <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-16 h-6 bg-yellow-100/60 opacity-70 rotate-3 shadow-sm"></div>
            </div>
          ))}
        </div>

        {/* Memory quote */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10 relative overflow-hidden">
            <div className="absolute top-0 right-0 text-8xl opacity-5">📷</div>
            <div className="absolute bottom-0 left-0 text-8xl opacity-5">💕</div>
            
            <div className="relative z-10 text-center">
              <p className="text-xl md:text-2xl text-gray-700 font-serif italic leading-relaxed mb-4">
                "In every photograph, there's a piece of our hearts frozen in time. 
                These moments may pass, but the memories we've created will last forever."
              </p>
              <div className="flex justify-center space-x-2 text-3xl">
                <span className="animate-pulse">💖</span>
                <span className="animate-pulse" style={{ animationDelay: '0.3s' }}>📸</span>
                <span className="animate-pulse" style={{ animationDelay: '0.6s' }}>💖</span>
              </div>
            </div>
          </div>
        </div>

        {/* Back button */}
        <div className="text-center">
          <button
            onClick={() => window.history.back()}
            className="group relative inline-flex items-center space-x-2 bg-linear-to-r from-pink-500 via-rose-500 to-purple-500 text-white font-semibold py-4 px-8 rounded-full shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden"
          >
            <span className="absolute inset-0 bg-linear-to-r from-purple-500 via-rose-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <svg className="w-5 h-5 relative z-10 transform group-hover:-translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span className="relative z-10">Back to Gifts</span>
          </button>
        </div>
      </div>

      {/* Lightbox modal */}
      {isLightboxOpen && selectedImage !== null && (
        <div 
          className={`fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 transition-opacity duration-300 ${
            isLightboxOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-pink-400 transition-colors z-50"
          >
            <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Previous button */}
          <button
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            className="absolute left-4 text-white hover:text-pink-400 transition-colors z-50 bg-black/50 rounded-full p-3 hover:bg-black/70"
          >
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Next button */}
          <button
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            className="absolute right-4 text-white hover:text-pink-400 transition-colors z-50 bg-black/50 rounded-full p-3 hover:bg-black/70"
          >
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Image */}
          <div onClick={(e) => e.stopPropagation()} className="max-w-5xl max-h-[90vh] relative">
            <img
              src={memories[selectedImage].src}
              alt={memories[selectedImage].alt}
              className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
            />
            {/* Caption */}
            <div className="text-center mt-4 text-white">
              <p className="text-2xl font-semibold mb-2">{memories[selectedImage].caption}</p>
              <p className="text-lg opacity-80">{memories[selectedImage].date}</p>
            </div>
          </div>
        </div>
      )}

      {/* Custom animations */}
      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }

        @keyframes float-slow {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          25% {
            transform: translateY(-20px) translateX(10px);
          }
          50% {
            transform: translateY(-10px) translateX(-10px);
          }
          75% {
            transform: translateY(-30px) translateX(5px);
          }
        }

        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }

        .animate-float-slow {
          animation: float-slow ease-in-out infinite;
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }

        .font-handwriting {
          font-family: 'Brush Script MT', 'Segoe Script', cursive;
        }
      `}</style>
    </div>
  )
}

export default Pictures



