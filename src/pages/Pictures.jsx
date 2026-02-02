import { useState, useEffect } from 'react'

const Pictures = () => {
  const [selectedImage, setSelectedImage] = useState(null)
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)
  const [revealedImages, setRevealedImages] = useState([])

  const memories = [
    {
      src: '/pictures/emma1.jpeg',
      alt: 'Beautiful Memory',
      caption: 'A moment to treasure',
      date: 'Forever in my heart',
      emotion: 'Joy'
    },
    {
      src: '/pictures/emma2.jpeg',
      alt: 'Sweet Memory',
      caption: 'Time stands still',
      date: 'A perfect day',
      emotion: 'Bliss'
    },
    {
      src: '/pictures/emma3.jpeg',
      alt: 'Precious Memory',
      caption: 'Pure happiness',
      date: 'Never forget',
      emotion: 'Love'
    },
    {
      src: '/pictures/eunice1.jpeg',
      alt: 'Cherished Memory',
      caption: 'Love captured',
      date: 'Our story',
      emotion: 'Romance'
    }
  ]

  useEffect(() => {
    // Stagger image reveals
    memories.forEach((_, index) => {
      setTimeout(() => {
        setRevealedImages(prev => [...prev, index])
      }, 500 + index * 250)
    })
  }, [])

  const openLightbox = (index) => {
    setSelectedImage(index)
    setIsLightboxOpen(true)
    document.body.style.overflow = 'hidden'
  }

  const closeLightbox = () => {
    setIsLightboxOpen(false)
    document.body.style.overflow = 'auto'
    setTimeout(() => setSelectedImage(null), 300)
  }

  const nextImage = (e) => {
    e.stopPropagation()
    setSelectedImage((prev) => (prev + 1) % memories.length)
  }

  const prevImage = (e) => {
    e.stopPropagation()
    setSelectedImage((prev) => (prev - 1 + memories.length) % memories.length)
  }

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isLightboxOpen) return
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowRight') nextImage(e)
      if (e.key === 'ArrowLeft') prevImage(e)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isLightboxOpen])

  return (
    <div className="min-h-screen bg-linear-to-br from-neutral-900 via-stone-900 to-neutral-800 relative overflow-hidden">
      
      {/* Elegant grain texture overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-noise"></div>
      
      {/* Ambient light effects */}
      <div className="absolute top-0 left-0 w-200 h-200 bg-rose-500/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-150 h-150 bg-amber-500/10 rounded-full blur-[100px] translate-x-1/3 translate-y-1/3"></div>

      {/* Main content */}
      <div className="relative z-10 min-h-screen px-6 py-20 md:px-12 lg:px-20">
        
        {/* Sophisticated header */}
        <div className="max-w-7xl mx-auto mb-20">
          <div className="text-center">
            <div className="inline-block mb-4">
              <span className="text-rose-400/60 text-sm uppercase tracking-[0.3em] font-light">
                Our Collection
              </span>
            </div>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-light text-neutral-100 mb-6 tracking-tight leading-none">
              Memories
            </h1>
            <div className="w-24 h-px bg-linear-to-r from-transparent via-rose-400/50 to-transparent mx-auto mb-8"></div>
            <p className="text-xl md:text-2xl text-neutral-400 font-light italic max-w-2xl mx-auto leading-relaxed">
              Where time becomes eternal, and every glance speaks a thousand words
            </p>
          </div>
        </div>

        {/* Asymmetric luxury gallery grid */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
            
            {/* First image - Large feature */}
            {memories[0] && (
              <div className={`md:col-span-7 transition-all duration-1000 ${
                revealedImages.includes(0) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}>
                <div 
                  onClick={() => openLightbox(0)}
                  className="group relative cursor-pointer h-125 md:h-175 overflow-hidden rounded-sm"
                >
                  <img
                    src={memories[0].src}
                    alt={memories[0].alt}
                    className="w-full h-full object-cover transition-all duration-1500 group-hover:scale-110 grayscale group-hover:grayscale-0"
                  />
                  
                  {/* Elegant overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/30 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-700"></div>
                  
                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
                    <span className="inline-block text-rose-300/80 text-xs uppercase tracking-[0.25em] mb-3">
                      {memories[0].emotion}
                    </span>
                    <h3 className="text-4xl md:text-5xl font-serif text-white mb-3 leading-tight">
                      {memories[0].caption}
                    </h3>
                    <p className="text-neutral-300 font-light italic text-lg">
                      {memories[0].date}
                    </p>
                  </div>

                  {/* Corner accent */}
                  <div className="absolute top-8 right-8 w-16 h-16 border-t-2 border-r-2 border-rose-400/40 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                </div>
              </div>
            )}

            {/* Second & Third images - Stacked */}
            <div className="md:col-span-5 space-y-8 md:space-y-12">
              {memories[1] && (
                <div className={`transition-all duration-1000 delay-200 ${
                  revealedImages.includes(1) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}>
                  <div 
                    onClick={() => openLightbox(1)}
                    className="group relative cursor-pointer h-100 overflow-hidden rounded-sm"
                  >
                    <img
                      src={memories[1].src}
                      alt={memories[1].alt}
                      className="w-full h-full object-cover transition-all duration-1500 group-hover:scale-110 grayscale group-hover:grayscale-0"
                    />
                    
                    <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/30 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-700"></div>
                    
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                      <span className="inline-block text-amber-300/80 text-xs uppercase tracking-[0.25em] mb-2">
                        {memories[1].emotion}
                      </span>
                      <h3 className="text-3xl font-serif text-white mb-2">
                        {memories[1].caption}
                      </h3>
                      <p className="text-neutral-300 font-light italic">
                        {memories[1].date}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {memories[2] && (
                <div className={`transition-all duration-1000 delay-400 ${
                  revealedImages.includes(2) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}>
                  <div 
                    onClick={() => openLightbox(2)}
                    className="group relative cursor-pointer h-62.5 overflow-hidden rounded-sm"
                  >
                    <img
                      src={memories[2].src}
                      alt={memories[2].alt}
                      className="w-full h-full object-cover transition-all duration-1500 group-hover:scale-110 grayscale group-hover:grayscale-0"
                    />
                    
                    <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/30 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-700"></div>
                    
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <span className="inline-block text-rose-300/80 text-xs uppercase tracking-[0.25em] mb-2">
                        {memories[2].emotion}
                      </span>
                      <h3 className="text-2xl font-serif text-white mb-1">
                        {memories[2].caption}
                      </h3>
                      <p className="text-neutral-300 font-light italic text-sm">
                        {memories[2].date}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Fourth image - Wide feature */}
            {memories[3] && (
              <div className={`md:col-span-12 transition-all duration-1000 delay-600 ${
                revealedImages.includes(3) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}>
                <div 
                  onClick={() => openLightbox(3)}
                  className="group relative cursor-pointer h-100 md:h-125 overflow-hidden rounded-sm"
                >
                  <img
                    src={memories[3].src}
                    alt={memories[3].alt}
                    className="w-full h-full object-cover transition-all duration-1500 group-hover:scale-110 grayscale group-hover:grayscale-0"
                  />
                  
                  <div className="absolute inset-0 bg-linear-to-r from-black/90 via-black/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-700"></div>
                  
                  <div className="absolute inset-0 flex items-center p-12 md:p-16">
                    <div className="max-w-xl transform translate-x-4 group-hover:translate-x-0 transition-transform duration-700">
                      <span className="inline-block text-rose-300/80 text-xs uppercase tracking-[0.25em] mb-4">
                        {memories[3].emotion}
                      </span>
                      <h3 className="text-4xl md:text-6xl font-serif text-white mb-4 leading-tight">
                        {memories[3].caption}
                      </h3>
                      <p className="text-neutral-200 font-light italic text-xl">
                        {memories[3].date}
                      </p>
                    </div>
                  </div>

                  {/* Decorative element */}
                  <div className="absolute bottom-12 right-12 w-20 h-20 border-b-2 border-r-2 border-amber-400/40 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Elegant quote section */}
        <div className="max-w-4xl mx-auto mt-32 mb-20">
          <div className="relative bg-linear-to-br from-neutral-800/40 to-stone-900/40 backdrop-blur-xl rounded-sm p-12 md:p-16 border border-neutral-700/30">
            <div className="absolute top-8 left-8 text-6xl text-rose-400/10 font-serif">"</div>
            <p className="text-2xl md:text-3xl text-neutral-200 font-serif italic text-center leading-relaxed relative z-10">
              In the quiet spaces between heartbeats, we found forever. These photographs are not merely images—they are fragments of eternity, whispers of a love that transcends time.
            </p>
            <div className="flex justify-center mt-8 space-x-1">
              <div className="w-1 h-1 rounded-full bg-rose-400/60"></div>
              <div className="w-1 h-1 rounded-full bg-rose-400/40"></div>
              <div className="w-1 h-1 rounded-full bg-rose-400/20"></div>
            </div>
          </div>
        </div>

        {/* Refined back button */}
        <div className="text-center">
          <button
            onClick={() => window.history.back()}
            className="group inline-flex items-center space-x-4 text-neutral-400 hover:text-rose-400 transition-all duration-500 border border-neutral-700/30 hover:border-rose-400/30 rounded-full px-8 py-4"
          >
            <svg className="w-5 h-5 transform group-hover:-translate-x-2 transition-transform duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span className="text-sm uppercase tracking-[0.2em] font-light">Return</span>
          </button>
        </div>
      </div>

      {/* Premium lightbox */}
      {isLightboxOpen && selectedImage !== null && (
        <div 
          className={`fixed inset-0 bg-black/98 z-50 flex items-center justify-center backdrop-blur-sm transition-opacity duration-500 ${
            isLightboxOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-8 right-8 text-neutral-400 hover:text-white transition-colors z-50 group"
          >
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Navigation */}
          <button
            onClick={prevImage}
            className="absolute left-8 text-neutral-400 hover:text-white transition-all z-50 bg-neutral-900/50 hover:bg-neutral-900/80 backdrop-blur-sm rounded-full p-4"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextImage}
            className="absolute right-8 text-neutral-400 hover:text-white transition-all z-50 bg-neutral-900/50 hover:bg-neutral-900/80 backdrop-blur-sm rounded-full p-4"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Image counter */}
          <div className="absolute top-8 left-8 text-neutral-400 text-sm tracking-wider">
            {selectedImage + 1} / {memories.length}
          </div>

          {/* Main image */}
          <div onClick={(e) => e.stopPropagation()} className="max-w-6xl w-full px-4">
            <div className="relative">
              <img
                src={memories[selectedImage].src}
                alt={memories[selectedImage].alt}
                className="w-full max-h-[85vh] object-contain rounded-sm"
              />
              
              {/* Caption overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/90 to-transparent p-8">
                <span className="inline-block text-rose-300/80 text-xs uppercase tracking-[0.25em] mb-2">
                  {memories[selectedImage].emotion}
                </span>
                <h3 className="text-3xl md:text-4xl font-serif text-white mb-2">
                  {memories[selectedImage].caption}
                </h3>
                <p className="text-neutral-300 font-light italic text-lg">
                  {memories[selectedImage].date}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Custom styles */}
      <style jsx>{`
        @keyframes grain {
          0%, 100% { transform: translate(0, 0); }
          10% { transform: translate(-5%, -10%); }
          20% { transform: translate(-15%, 5%); }
          30% { transform: translate(7%, -25%); }
          40% { transform: translate(-5%, 25%); }
          50% { transform: translate(-15%, 10%); }
          60% { transform: translate(15%, 0%); }
          70% { transform: translate(0%, 15%); }
          80% { transform: translate(3%, 35%); }
          90% { transform: translate(-10%, 10%); }
        }

        .bg-noise {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
          animation: grain 8s steps(10) infinite;
        }
      `}</style>
    </div>
  )
}

export default Pictures



