import { useState, useEffect } from 'react'

const Letters = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    // Trigger envelope opening animation
    const timer1 = setTimeout(() => setIsOpen(true), 500)
    const timer2 = setTimeout(() => setShowContent(true), 1500)
    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
    }
  }, [])

  return (
    <div className="min-h-screen bg-linear-to-br from-rose-50 via-pink-50 to-purple-50 flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Animated background hearts */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute text-pink-300 opacity-20 animate-float-up"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${8 + Math.random() * 4}s`,
              fontSize: `${20 + Math.random() * 20}px`
            }}
          >
            {['❤️', '💕', '💖', '💗', '💝'][Math.floor(Math.random() * 5)]}
          </div>
        ))}
      </div>

      {/* Main content container */}
      <div className="relative z-10 w-full max-w-3xl">
        {/* Envelope animation container */}
        <div className="flex flex-col items-center mb-8">
          <div className="relative w-full max-w-md">
            {/* Envelope */}
            <div className={`relative transition-all duration-1000 ${isOpen ? 'transform -translate-y-4' : ''}`}>
              {/* Envelope flap */}
              <div 
                className={`absolute top-0 left-0 right-0 h-0 border-l-200 border-r-200 border-t-150 
                  border-l-transparent border-r-transparent border-t-pink-400 mx-auto w-0
                  transform-gpu origin-top transition-transform duration-1000 z-20 shadow-xl
                  ${isOpen ? 'rotate-x-180' : ''}`}
                style={{ 
                  transformStyle: 'preserve-3d',
                  transform: isOpen ? 'rotateX(180deg)' : 'rotateX(0deg)'
                }}
              ></div>

              {/* Envelope body */}
              <div className="relative bg-linear-to-br from-pink-300 to-rose-300 rounded-lg shadow-2xl p-8 mt-32">
                <div className="absolute inset-0 bg-white opacity-10 rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Letter content */}
        <div className={`transition-all duration-1000 transform ${
          showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          {/* Letter paper */}
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 relative overflow-hidden">
            {/* Paper texture overlay */}
            <div className="absolute inset-0 opacity-5 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,#000_2px,#000_3px)]"></div>
            
            {/* Decorative corner elements */}
            <div className="absolute top-0 left-0 w-20 h-20 border-t-4 border-l-4 border-pink-300 rounded-tl-2xl"></div>
            <div className="absolute top-0 right-0 w-20 h-20 border-t-4 border-r-4 border-pink-300 rounded-tr-2xl"></div>
            <div className="absolute bottom-0 left-0 w-20 h-20 border-b-4 border-l-4 border-pink-300 rounded-bl-2xl"></div>
            <div className="absolute bottom-0 right-0 w-20 h-20 border-b-4 border-r-4 border-pink-300 rounded-br-2xl"></div>

            <div className="relative z-10">
              {/* Header */}
              <div className="text-center mb-8">
                <div className="inline-block">
                  <h1 className="text-4xl md:text-5xl font-bold bg-linear-to-r from-pink-600 via-rose-500 to-purple-600 bg-clip-text text-transparent mb-2">
                    To My Dearest Emmanuel
                  </h1>
                  <div className="flex items-center justify-center space-x-2 text-3xl">
                    <span className="animate-pulse">💌</span>
                    <span className="animate-pulse delay-100">💕</span>
                    <span className="animate-pulse delay-200">💌</span>
                  </div>
                </div>
              </div>

              {/* Letter content */}
              <div className="space-y-6 text-center">
                <div className="relative">
                  <p className="text-2xl md:text-3xl font-serif text-gray-700 leading-relaxed italic">
                    <span className="block mb-3">Roses are red,</span>
                    <span className="block mb-3">Violets are blue,</span>
                    <span className="block mb-3 text-pink-600 font-bold">
                      Every day is brighter
                    </span>
                    <span className="block mb-6 text-pink-600 font-bold">
                      with you!
                    </span>
                  </p>
                </div>

                <div className="pt-4 border-t-2 border-pink-200">
                  <p className="text-xl md:text-2xl text-rose-600 font-medium">
                    You make my heart skip a beat
                    <span className="inline-block ml-2 text-3xl animate-heartbeat">💖</span>
                  </p>
                </div>

                {/* Signature */}
                <div className="pt-8 text-right">
                  <p className="text-2xl font-dancing text-pink-600 italic">
                    Forever yours,
                  </p>
                  <div className="flex justify-end items-center space-x-2 mt-2">
                    <span className="text-xl text-gray-500">With all my love</span>
                    <span className="text-2xl">💝</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Back button */}
          <div className="mt-8 text-center">
            <button
              onClick={() => window.history.back()}
              className="group relative inline-flex items-center space-x-2 bg-linear-to-r from-pink-500 to-rose-500 text-white font-semibold py-4 px-8 rounded-full shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden"
            >
              <span className="absolute inset-0 bg-linear-to-r from-rose-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <svg className="w-5 h-5 relative z-10 transform group-hover:-translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <span className="relative z-10">Back to Gifts</span>
            </button>
          </div>
        </div>
      </div>

      {/* Floating hearts at bottom */}
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

      {/* Custom animations */}
      <style jsx>{`
        @keyframes float-up {
          0% {
            transform: translateY(100vh) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 0.3;
          }
          90% {
            opacity: 0.3;
          }
          100% {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
          }
        }

        @keyframes heartbeat {
          0%, 100% {
            transform: scale(1);
          }
          10%, 30% {
            transform: scale(1.3);
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

        .animate-float-up {
          animation: float-up linear infinite;
        }

        .animate-heartbeat {
          animation: heartbeat 2s ease-in-out infinite;
        }

        .animate-bounce-slow {
          animation: bounce-slow ease-in-out infinite;
        }

        .delay-100 {
          animation-delay: 0.1s;
        }

        .delay-200 {
          animation-delay: 0.2s;
        }

        .font-dancing {
          font-family: 'Brush Script MT', cursive;
        }
      `}</style>
    </div>
  )
}

export default Letters


