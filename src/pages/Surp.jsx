import { useState, useEffect } from 'react'

const Surprise = () => {
  const [isBoxOpen, setIsBoxOpen] = useState(false)
  const [showConfetti, setShowConfetti] = useState(false)
  const [showMessage, setShowMessage] = useState(false)
  const [confettiPieces, setConfettiPieces] = useState([])

  useEffect(() => {
    // Generate confetti pieces
    const pieces = [...Array(50)].map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 2,
      duration: 3 + Math.random() * 2,
      color: ['bg-red-400', 'bg-pink-400', 'bg-purple-400', 'bg-yellow-400', 'bg-blue-400'][Math.floor(Math.random() * 5)]
    }))
    setConfettiPieces(pieces)
  }, [])

  const handleOpenBox = () => {
    setIsBoxOpen(true)
    setShowConfetti(true)
    setTimeout(() => setShowMessage(true), 800)
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-red-50 via-pink-50 to-purple-50 flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Confetti animation */}
      {showConfetti && (
        <div className="fixed inset-0 pointer-events-none z-50">
          {confettiPieces.map((piece) => (
            <div
              key={piece.id}
              className={`absolute w-3 h-3 ${piece.color} animate-confetti`}
              style={{
                left: `${piece.left}%`,
                animationDelay: `${piece.delay}s`,
                animationDuration: `${piece.duration}s`
              }}
            ></div>
          ))}
        </div>
      )}

      {/* Animated background sparkles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute text-yellow-300 animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              fontSize: `${10 + Math.random() * 20}px`
            }}
          >
            ✨
          </div>
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 w-full max-w-4xl">
        {/* Title */}
        {!isBoxOpen && (
          <div className="text-center mb-12 animate-fadeIn">
            <h1 className="text-5xl md:text-7xl font-bold bg-linear-to-r from-red-500 via-pink-500 to-purple-500 bg-clip-text text-transparent mb-4 animate-gradient">
              A Special Surprise!
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 font-light">
              Click the gift box to reveal your surprise 🎁
            </p>
          </div>
        )}

        {/* Gift Box */}
        {!isBoxOpen ? (
          <div className="flex justify-center mb-12">
            <button
              onClick={handleOpenBox}
              className="group relative focus:outline-none transform hover:scale-110 transition-transform duration-300"
            >
              {/* Box shadow/glow */}
              <div className="absolute -inset-8 bg-linear-to-r from-red-400 via-pink-400 to-purple-400 rounded-full opacity-50 blur-2xl group-hover:opacity-75 animate-pulse"></div>
              
              {/* Gift box */}
              <div className="relative">
                {/* Box lid */}
                <div className="relative z-10 transform group-hover:-translate-y-2 transition-transform duration-300">
                  <div className="w-48 h-12 bg-linear-to-r from-red-400 to-pink-500 rounded-t-xl shadow-xl">
                    {/* Ribbon on lid */}
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-8 h-full bg-yellow-300"></div>
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-16 h-8 bg-yellow-300 rounded-full"></div>
                  </div>
                </div>
                
                {/* Box body */}
                <div className="w-48 h-48 bg-linear-to-br from-red-400 to-pink-500 shadow-2xl flex items-center justify-center relative">
                  {/* Vertical ribbon */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-8 h-full bg-yellow-300"></div>
                  {/* Horizontal ribbon */}
                  <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-full h-8 bg-yellow-300"></div>
                  
                  {/* Sparkle effect */}
                  <div className="absolute top-4 right-4 text-2xl animate-ping">✨</div>
                </div>
              </div>
              
              {/* Click instruction */}
              <div className="mt-4 text-center">
                <span className="inline-block bg-white px-4 py-2 rounded-full shadow-lg text-pink-600 font-semibold group-hover:bg-pink-500 group-hover:text-white transition-colors duration-300">
                  Click to open! 👆
                </span>
              </div>
            </button>
          </div>
        ) : (
          /* Surprise content after opening */
          <div className={`text-center transition-all duration-1000 ${showMessage ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            {/* Celebration header */}
            <div className="mb-8">
              <div className="text-8xl mb-4 animate-bounce">🎉</div>
              <h1 className="text-5xl md:text-7xl font-bold bg-linear-to-r from-red-500 via-pink-500 to-purple-500 bg-clip-text text-transparent mb-4 animate-gradient">
                Surprise!
              </h1>
              <div className="flex items-center justify-center space-x-3 text-5xl">
                <span className="animate-bounce" style={{ animationDelay: '0s' }}>🎊</span>
                <span className="animate-bounce" style={{ animationDelay: '0.1s' }}>💖</span>
                <span className="animate-bounce" style={{ animationDelay: '0.2s' }}>🎉</span>
                <span className="animate-bounce" style={{ animationDelay: '0.3s' }}>💝</span>
                <span className="animate-bounce" style={{ animationDelay: '0.4s' }}>🎊</span>
              </div>
            </div>

            {/* Message cards */}
            <div className="space-y-6 mb-12 max-w-3xl mx-auto">
              {/* Main message */}
              <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 relative overflow-hidden transform hover:scale-105 transition-transform duration-300">
                <div className="absolute top-0 right-0 text-8xl opacity-5">🎁</div>
                <div className="absolute bottom-0 left-0 text-8xl opacity-5">💖</div>
                
                <div className="relative z-10">
                  <p className="text-2xl md:text-3xl text-gray-700 font-serif leading-relaxed mb-4">
                    You found the special gift!
                  </p>
                  <div className="text-5xl mb-4 animate-heartbeat">💖</div>
                  <p className="text-xl md:text-2xl text-pink-600 font-medium leading-relaxed">
                    I hope this little surprise makes your day as amazing as you make mine!
                  </p>
                </div>
              </div>

              {/* Additional surprise cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-linear-to-br from-red-100 to-pink-100 rounded-2xl p-6 shadow-lg transform hover:scale-105 hover:rotate-1 transition-all duration-300">
                  <div className="text-4xl mb-2">🌟</div>
                  <p className="text-gray-700 font-semibold">You're amazing</p>
                </div>
                
                <div className="bg-linear-to-br from-pink-100 to-purple-100 rounded-2xl p-6 shadow-lg transform hover:scale-105 hover:-rotate-1 transition-all duration-300">
                  <div className="text-4xl mb-2">💫</div>
                  <p className="text-gray-700 font-semibold">You're special</p>
                </div>
                
                <div className="bg-linear-to-br from-purple-100 to-red-100 rounded-2xl p-6 shadow-lg transform hover:scale-105 hover:rotate-1 transition-all duration-300">
                  <div className="text-4xl mb-2">✨</div>
                  <p className="text-gray-700 font-semibold">You're loved</p>
                </div>
              </div>

              {/* Secret message reveal */}
              <div className="bg-linear-to-r from-red-400 via-pink-400 to-purple-400 rounded-3xl p-1 shadow-2xl">
                <div className="bg-white rounded-3xl p-8">
                  <p className="text-lg md:text-xl text-gray-600 italic">
                    "Every moment with you is a gift. Thank you for being you, for making me smile, 
                    and for filling my days with joy. Here's to many more surprises together! 💕"
                  </p>
                </div>
              </div>
            </div>

            {/* Back button */}
            <button
              onClick={() => window.history.back()}
              className="group relative inline-flex items-center space-x-2 bg-linear-to-r from-red-500 via-pink-500 to-purple-500 text-white font-semibold py-4 px-8 rounded-full shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden"
            >
              <span className="absolute inset-0 bg-linear-to-r from-purple-500 via-pink-500 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <svg className="w-5 h-5 relative z-10 transform group-hover:-translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <span className="relative z-10">Back to Gifts</span>
            </button>
          </div>
        )}
      </div>

      {/* Floating hearts at bottom (only show before opening) */}
      {!isBoxOpen && (
        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-4 z-20">
          {['❤️', '💖', '💕', '💗', '💝'].map((heart, index) => (
            <span
              key={index}
              className="text-4xl animate-bounce-slow"
              style={{
                animationDelay: `${index * 0.2}s`,
                animationDuration: `${2 + index * 0.2}s`
              }}
            >
              {heart}
            </span>
          ))}
        </div>
      )}

      {/* Custom animations */}
      <style jsx>{`
        @keyframes confetti {
          0% {
            transform: translateY(-100vh) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) rotate(720deg);
            opacity: 0;
          }
        }

        @keyframes twinkle {
          0%, 100% {
            opacity: 0;
            transform: scale(0);
          }
          50% {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes heartbeat {
          0%, 100% {
            transform: scale(1);
          }
          10%, 30% {
            transform: scale(1.2);
          }
          20%, 40% {
            transform: scale(1);
          }
        }

        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-15px);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
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

        .animate-confetti {
          animation: confetti linear;
        }

        .animate-twinkle {
          animation: twinkle 3s ease-in-out infinite;
        }

        .animate-heartbeat {
          animation: heartbeat 1.5s ease-in-out infinite;
        }

        .animate-bounce-slow {
          animation: bounce-slow ease-in-out infinite;
        }

        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out;
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </div>
  )
}

export default Surprise


