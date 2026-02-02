import { useState, useEffect } from 'react'

const Flowers = () => {
  const [showFlowers, setShowFlowers] = useState(false)
  const [selectedFlower, setSelectedFlower] = useState(null)

  useEffect(() => {
    const timer = setTimeout(() => setShowFlowers(true), 300)
    return () => clearTimeout(timer)
  }, [])

  const flowerMessages = [
    { emoji: '🌹', name: 'Rose', message: 'Symbol of my love', color: 'from-red-400 to-pink-500' },
    { emoji: '🌸', name: 'Cherry Blossom', message: 'Beautiful moments', color: 'from-pink-300 to-rose-400' },
    { emoji: '🌺', name: 'Hibiscus', message: 'Delicate beauty', color: 'from-fuchsia-400 to-pink-500' },
    { emoji: '🌻', name: 'Sunflower', message: 'You brighten my day', color: 'from-yellow-400 to-orange-400' },
    { emoji: '🌷', name: 'Tulip', message: 'Perfect love', color: 'from-pink-400 to-purple-400' },
    { emoji: '💐', name: 'Bouquet', message: 'All my love for you', color: 'from-rose-400 to-pink-500' }
  ]

  return (
    <div className="min-h-screen bg-linear-to-br from-purple-50 via-pink-50 to-rose-50 flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Animated background petals */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-fall"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 5}s`,
              fontSize: `${15 + Math.random() * 15}px`,
              opacity: 0.6
            }}
          >
            {['🌸', '🌺', '🌼', '🌻', '🌷'][Math.floor(Math.random() * 5)]}
          </div>
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 w-full max-w-5xl">
        {/* Title section */}
        <div className="text-center mb-12">
          <div className="inline-block">
            <h1 className="text-5xl md:text-7xl font-bold bg-linear-to-r from-pink-600 via-purple-500 to-fuchsia-600 bg-clip-text text-transparent mb-3 animate-gradient">
              Bouquet of Flowers
            </h1>
            <div className="flex items-center justify-center space-x-2 text-4xl mb-4">
              <span className="animate-bounce" style={{ animationDelay: '0s' }}>🌸</span>
              <span className="animate-bounce" style={{ animationDelay: '0.1s' }}>🌺</span>
              <span className="animate-bounce" style={{ animationDelay: '0.2s' }}>🌷</span>
            </div>
            <p className="text-lg md:text-xl text-gray-600 font-light">
              Each bloom represents a special feeling
            </p>
          </div>
        </div>

        {/* Main flower image with decorative frame */}
        <div className={`flex justify-center mb-12 transition-all duration-1000 transform ${
          showFlowers ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}>
          <div className="relative group">
            {/* Decorative frame */}
            <div className="absolute -inset-4 bg-linear-to-r from-pink-400 via-purple-400 to-fuchsia-400 rounded-3xl opacity-75 blur-lg group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Image container */}
            <div className="relative bg-white p-3 rounded-2xl shadow-2xl transform group-hover:scale-105 transition-transform duration-500">
              <img
                src="/pictures/flower2.jpg"
                alt="Beautiful Flowers Bouquet"
                className="rounded-xl w-80 md:w-96 h-80 md:h-96 object-cover shadow-lg"
              />
              
              {/* Sparkle effects on corners */}
              <div className="absolute top-2 left-2 text-2xl animate-pulse">✨</div>
              <div className="absolute top-2 right-2 text-2xl animate-pulse" style={{ animationDelay: '0.5s' }}>✨</div>
              <div className="absolute bottom-2 left-2 text-2xl animate-pulse" style={{ animationDelay: '1s' }}>✨</div>
              <div className="absolute bottom-2 right-2 text-2xl animate-pulse" style={{ animationDelay: '1.5s' }}>✨</div>
            </div>
          </div>
        </div>

        {/* Interactive flower grid */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-700 mb-6">
            Click each flower to see its message 💕
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {flowerMessages.map((flower, index) => (
              <button
                key={index}
                onClick={() => setSelectedFlower(selectedFlower === index ? null : index)}
                className={`relative bg-white rounded-2xl p-6 shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                  selectedFlower === index ? 'ring-4 ring-pink-400 scale-105' : ''
                }`}
              >
                {/* Gradient background on selection */}
                <div className={`absolute inset-0 bg-linear-to-br ${flower.color} opacity-0 ${
                  selectedFlower === index ? 'opacity-10' : ''
                } rounded-2xl transition-opacity duration-300`}></div>
                
                <div className="relative z-10">
                  {/* Flower emoji */}
                  <div className="text-6xl mb-3 transform transition-transform duration-300 hover:rotate-12">
                    {flower.emoji}
                  </div>
                  
                  {/* Flower name */}
                  <h3 className="font-bold text-gray-800 mb-2">{flower.name}</h3>
                  
                  {/* Message (shown when selected) */}
                  <div className={`overflow-hidden transition-all duration-300 ${
                    selectedFlower === index ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <p className="text-sm text-pink-600 italic font-medium mt-2">
                      "{flower.message}"
                    </p>
                  </div>
                </div>

                {/* Shimmer effect */}
                {selectedFlower === index && (
                  <div className="absolute inset-0 rounded-2xl overflow-hidden">
                    <div className="absolute inset-0 translate-x-full animate-shimmer bg-linear-to-r from-transparent via-white to-transparent opacity-30"></div>
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Special message card */}
        <div className={`max-w-2xl mx-auto mb-8 transition-all duration-1000 delay-500 transform ${
          showFlowers ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <div className="bg-white rounded-3xl shadow-xl p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 text-6xl opacity-10 transform rotate-12">🌺</div>
            <div className="absolute bottom-0 left-0 text-6xl opacity-10 transform -rotate-12">🌸</div>
            
            <div className="relative z-10 text-center">
              <p className="text-xl md:text-2xl text-gray-700 font-serif italic leading-relaxed">
                "Like flowers bloom in spring, my love for you grows endlessly. 
                Each petal represents a moment we've shared, each color a memory we've made."
              </p>
              <div className="mt-4 flex justify-center space-x-2 text-3xl">
                <span className="animate-pulse">💖</span>
                <span className="animate-pulse" style={{ animationDelay: '0.3s' }}>🌹</span>
                <span className="animate-pulse" style={{ animationDelay: '0.6s' }}>💖</span>
              </div>
            </div>
          </div>
        </div>

        {/* Back button */}
        <div className="text-center">
          <button
            onClick={() => window.history.back()}
            className="group relative inline-flex items-center space-x-2 bg-linear-to-r from-purple-500 via-pink-500 to-rose-500 text-white font-semibold py-4 px-8 rounded-full shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden"
          >
            <span className="absolute inset-0 bg-linear-to-r from-rose-500 via-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <svg className="w-5 h-5 relative z-10 transform group-hover:-translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span className="relative z-10">Back to Gifts</span>
          </button>
        </div>
      </div>

      {/* Custom animations */}
      <style jsx>{`
        @keyframes fall {
          0% {
            transform: translateY(-10vh) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(110vh) rotate(360deg);
            opacity: 0.3;
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
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

        .animate-fall {
          animation: fall linear infinite;
        }

        .animate-shimmer {
          animation: shimmer 2s linear infinite;
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </div>
  )
}

export default Flowers


