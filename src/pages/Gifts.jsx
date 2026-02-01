import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const Gifts = () => {
  const navigate = useNavigate()
  const [hoveredGift, setHoveredGift] = useState(null)

  const gifts = [
    {
      id: 'letter',
      icon: '💌',
      title: 'Love Letter',
      subtitle: 'Words from my heart',
      route: '/letters',
      gradient: 'from-rose-400 via-pink-400 to-red-400',
      hoverGradient: 'from-rose-500 via-pink-500 to-red-500',
      shadow: 'shadow-rose-300/50'
    },
    {
      id: 'flowers',
      icon: '🌸',
      title: 'Flowers',
      subtitle: 'Blooming just for you',
      route: '/flowers',
      gradient: 'from-purple-400 via-pink-400 to-fuchsia-400',
      hoverGradient: 'from-purple-500 via-pink-500 to-fuchsia-500',
      shadow: 'shadow-purple-300/50'
    },
    {
      id: 'pictures',
      icon: '📸',
      title: 'Pictures',
      subtitle: 'Our precious moments',
      route: '/pictures',
      gradient: 'from-amber-400 via-orange-400 to-pink-400',
      hoverGradient: 'from-amber-500 via-orange-500 to-pink-500',
      shadow: 'shadow-amber-300/50'
    },
    {
      id: 'surprise',
      icon: '🎉',
      title: 'Surprise',
      subtitle: 'Something special awaits',
      route: '/surprise',
      gradient: 'from-red-400 via-pink-500 to-rose-400',
      hoverGradient: 'from-red-500 via-pink-600 to-rose-500',
      shadow: 'shadow-red-300/50'
    }
  ]

  return (
    <div className="min-h-screen bg-linear-to-br from-pink-50 via-rose-50 to-purple-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-rose-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-6">
        {/* Title section */}
        <div className="text-center mb-12 space-y-3">
          <div className="inline-block">
            <h1 className="text-5xl md:text-7xl font-bold bg-linear-to-r from-pink-500 via-rose-500 to-purple-500 bg-clip-text text-transparent mb-2 animate-gradient">
              Choose Your Gift
            </h1>
            <div className="h-1 bg-linear-to-r from-pink-400 via-rose-400 to-purple-400 rounded-full"></div>
          </div>
          <p className="text-gray-600 text-lg md:text-xl font-light">
            Each one made with love 💕
          </p>
        </div>

        {/* Gift cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl px-4">
          {gifts.map((gift) => (
            <button
              key={gift.id}
              onClick={() => navigate(gift.route)}
              onMouseEnter={() => setHoveredGift(gift.id)}
              onMouseLeave={() => setHoveredGift(null)}
              className={`group relative bg-white rounded-3xl p-8 shadow-xl ${gift.shadow} 
                transform transition-all duration-500 ease-out
                hover:scale-105 hover:-translate-y-2 hover:shadow-2xl
                ${hoveredGift === gift.id ? 'ring-4 ring-pink-300 ring-opacity-50' : ''}`}
            >
              {/* Card gradient overlay */}
              <div className={`absolute inset-0 bg-linear-to-br ${
                hoveredGift === gift.id ? gift.hoverGradient : gift.gradient
              } opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500`}></div>

              {/* Content */}
              <div className="relative z-10 flex flex-col items-center space-y-4">
                {/* Icon with background */}
                <div className={`w-24 h-24 rounded-full bg-linear-to-br ${gift.gradient} 
                  flex items-center justify-center shadow-lg transform transition-transform duration-500
                  group-hover:rotate-12 group-hover:scale-110`}>
                  <span className="text-5xl filter drop-shadow-lg">
                    {gift.icon}
                  </span>
                </div>

                {/* Text */}
                <div className="text-center space-y-1">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-800 group-hover:text-pink-600 transition-colors duration-300">
                    {gift.title}
                  </h3>
                  <p className="text-gray-500 text-sm md:text-base font-medium">
                    {gift.subtitle}
                  </p>
                </div>

                {/* Arrow indicator */}
                <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1">
                  <svg className="w-6 h-6 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </div>

              {/* Shimmer effect */}
              <div className="absolute inset-0 rounded-3xl overflow-hidden">
                <div className="absolute inset-0 translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-linear-to-r from-transparent via-white to-transparent opacity-20"></div>
              </div>
            </button>
          ))}
        </div>

        {/* Floating hearts */}
        <div className="mt-16 flex items-center space-x-3">
          {['❤️', '💖', '💝', '💗', '💕'].map((heart, index) => (
            <span
              key={index}
              className="text-3xl md:text-4xl animate-float"
              style={{
                animationDelay: `${index * 0.2}s`,
                animationDuration: `${3 + index * 0.3}s`
              }}
            >
              {heart}
            </span>
          ))}
        </div>
      </div>

      {/* Custom animations */}
      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
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

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </div>
  )
}

export default Gifts

