import { useState, useEffect } from 'react'

const Surprise = () => {
  const [isBoxOpen, setIsBoxOpen] = useState(false)
  const [showConfetti, setShowConfetti] = useState(false)
  const [revealStage, setRevealStage] = useState(0)
  const [confettiPieces, setConfettiPieces] = useState([])
  const [floatingHearts, setFloatingHearts] = useState([])

  useEffect(() => {
    // Generate confetti pieces with varied shapes
    const pieces = [...Array(100)].map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 0.5,
      duration: 2 + Math.random() * 3,
      rotation: Math.random() * 360,
      color: ['from-rose-400 to-pink-500', 'from-amber-400 to-yellow-500', 'from-purple-400 to-fuchsia-500', 'from-red-400 to-rose-500'][Math.floor(Math.random() * 4)],
      shape: Math.random() > 0.5 ? 'rounded-full' : 'rounded-sm'
    }))
    setConfettiPieces(pieces)

    // Generate floating hearts
    const hearts = [...Array(30)].map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 8 + Math.random() * 6,
      size: 20 + Math.random() * 40,
      emoji: ['💖', '💕', '💗', '💝', '❤️', '🌹'][Math.floor(Math.random() * 6)]
    }))
    setFloatingHearts(hearts)
  }, [])

  const handleOpenBox = () => {
    setIsBoxOpen(true)
    setShowConfetti(true)
    
    // Orchestrated reveal sequence
    setTimeout(() => setRevealStage(1), 600)
    setTimeout(() => setRevealStage(2), 1400)
    setTimeout(() => setRevealStage(3), 2200)
    setTimeout(() => setRevealStage(4), 3000)
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-rose-950 via-purple-950 to-fuchsia-950 relative overflow-hidden">
      
      {/* Ethereal light rays */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-1 h-full bg-linear-to-b from-rose-400/30 via-transparent to-transparent animate-light-ray"></div>
        <div className="absolute top-0 left-1/2 w-1 h-full bg-linear-to-b from-amber-400/30 via-transparent to-transparent animate-light-ray" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-0 right-1/4 w-1 h-full bg-linear-to-b from-purple-400/30 via-transparent to-transparent animate-light-ray" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Magical particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-sparkle-drift"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${6 + Math.random() * 8}s`,
            }}
          >
            <div className="w-1 h-1 bg-white rounded-full blur-sm opacity-60"></div>
          </div>
        ))}
      </div>

      {/* Floating hearts background */}
      {!isBoxOpen && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {floatingHearts.map((heart) => (
            <div
              key={heart.id}
              className="absolute animate-float-heart opacity-20"
              style={{
                left: `${heart.left}%`,
                animationDelay: `${heart.delay}s`,
                animationDuration: `${heart.duration}s`,
                fontSize: `${heart.size}px`,
              }}
            >
              {heart.emoji}
            </div>
          ))}
        </div>
      )}

      {/* Confetti explosion */}
      {showConfetti && (
        <div className="fixed inset-0 pointer-events-none z-50">
          {confettiPieces.map((piece) => (
            <div
              key={piece.id}
              className={`absolute w-3 h-3 bg-linear-to-br ${piece.color} ${piece.shape} animate-confetti-burst shadow-lg`}
              style={{
                left: `${piece.left}%`,
                animationDelay: `${piece.delay}s`,
                animationDuration: `${piece.duration}s`,
                transform: `rotate(${piece.rotation}deg)`
              }}
            ></div>
          ))}
        </div>
      )}

      {/* Main content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-6 py-20">
        
        {!isBoxOpen ? (
          /* Pre-open state */
          <div className="w-full max-w-4xl">
            {/* Romantic title */}
            <div className="text-center mb-20 animate-fade-in-down">
              <div className="inline-block mb-6">
                <span className="text-rose-300/60 text-sm uppercase tracking-[0.4em] font-light">
                  Something Special Awaits
                </span>
              </div>
              <h1 className="text-7xl md:text-9xl font-serif font-light text-transparent bg-clip-text bg-linear-to-r from-rose-200 via-pink-100 to-fuchsia-200 mb-6 tracking-tight leading-none animate-shimmer">
                For You
              </h1>
              <div className="w-32 h-px bg-linear-to-r from-transparent via-rose-400/60 to-transparent mx-auto mb-8"></div>
              <p className="text-2xl md:text-3xl text-rose-100/80 font-light italic">
                A moment crafted with love
              </p>
            </div>

            {/* Elegant gift box */}
            <div className="flex justify-center">
              <button
                onClick={handleOpenBox}
                className="group relative focus:outline-none"
              >
                {/* Radiant glow */}
                <div className="absolute -inset-16 bg-gradient-radial from-rose-500/30 via-purple-500/20 to-transparent rounded-full blur-3xl group-hover:scale-110 transition-transform duration-1000 animate-pulse-gentle"></div>
                
                {/* Main gift box container */}
                <div className="relative transform group-hover:scale-105 transition-all duration-500">
                  
                  {/* Ornate box with 3D effect */}
                  <div className="relative">
                    {/* Lid with elegant details */}
                    <div className="relative z-20 transform group-hover:-translate-y-6 transition-all duration-700 ease-out">
                      <div className="w-64 h-20 bg-linear-to-br from-rose-600 via-rose-500 to-pink-500 rounded-t-2xl shadow-2xl border-t-4 border-rose-300/30">
                        {/* Decorative ribbon on lid */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-full bg-linear-to-b from-amber-300 to-yellow-400 shadow-lg"></div>
                        
                        {/* Bow on top */}
                        <div className="absolute -top-8 left-1/2 -translate-x-1/2">
                          <div className="relative">
                            {/* Bow center */}
                            <div className="w-12 h-12 bg-linear-to-br from-amber-400 to-yellow-500 rounded-full shadow-xl border-4 border-amber-200/30"></div>
                            {/* Bow loops */}
                            <div className="absolute top-1/2 -left-8 w-10 h-10 bg-linear-to-br from-amber-400 to-yellow-500 rounded-full -translate-y-1/2 shadow-lg"></div>
                            <div className="absolute top-1/2 -right-8 w-10 h-10 bg-linear-to-br from-amber-400 to-yellow-500 rounded-full -translate-y-1/2 shadow-lg"></div>
                            
                            {/* Sparkle on bow */}
                            <div className="absolute top-0 right-0 text-2xl animate-sparkle-rotate">✨</div>
                          </div>
                        </div>

                        {/* Ornate pattern on lid */}
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.2),transparent)] rounded-t-2xl"></div>
                      </div>
                    </div>
                    
                    {/* Box body with luxury details */}
                    <div className="relative w-64 h-64 bg-linear-to-br from-rose-600 via-rose-500 to-pink-600 shadow-2xl rounded-b-2xl border-4 border-rose-400/20 overflow-hidden">
                      
                      {/* Vertical ribbon */}
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-full bg-linear-to-b from-amber-300 to-yellow-400 shadow-lg z-10"></div>
                      
                      {/* Horizontal ribbon */}
                      <div className="absolute top-1/2 -translate-y-1/2 left-0 w-full h-12 bg-linear-to-r from-amber-300 via-yellow-400 to-amber-300 shadow-lg z-10"></div>
                      
                      {/* Ribbon intersection shine */}
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-gradient-radial from-amber-200/40 to-transparent rounded-full blur-sm z-20"></div>

                      {/* Elegant pattern overlay */}
                      <div className="absolute inset-0 opacity-20">
                        <div className="absolute inset-0" style={{
                          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)',
                          backgroundSize: '24px 24px'
                        }}></div>
                      </div>

                      {/* Magical shimmer */}
                      <div className="absolute inset-0 bg-linear-to-tr from-transparent via-white/10 to-transparent animate-shimmer-sweep"></div>

                      {/* Corner sparkles */}
                      <div className="absolute top-6 left-6 text-3xl animate-sparkle-pulse opacity-80">✨</div>
                      <div className="absolute top-6 right-6 text-3xl animate-sparkle-pulse opacity-80" style={{ animationDelay: '0.5s' }}>✨</div>
                      <div className="absolute bottom-6 left-6 text-3xl animate-sparkle-pulse opacity-80" style={{ animationDelay: '1s' }}>✨</div>
                      <div className="absolute bottom-6 right-6 text-3xl animate-sparkle-pulse opacity-80" style={{ animationDelay: '1.5s' }}>✨</div>
                    </div>
                  </div>
                </div>
                
                {/* Elegant instruction */}
                <div className="mt-12 text-center">
                  <div className="inline-block bg-white/5 backdrop-blur-xl border border-rose-300/20 rounded-full px-8 py-4 group-hover:bg-white/10 group-hover:border-rose-300/40 transition-all duration-500">
                    <span className="text-rose-100 text-lg font-light tracking-wider">
                      Click to unveil your surprise
                    </span>
                  </div>
                </div>
              </button>
            </div>
          </div>
        ) : (
          /* After opening - Romantic reveal */
          <div className="w-full max-w-6xl">
            
            {/* Stage 1: Celebration burst */}
            <div className={`text-center mb-16 transition-all duration-1000 ${
              revealStage >= 1 ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
            }`}>
              <div className="text-8xl md:text-9xl mb-8 animate-bounce-in">🎉</div>
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-light text-transparent bg-clip-text bg-linear-to-r from-rose-200 via-pink-100 to-fuchsia-200 mb-8 animate-shimmer">
                Surprise, My Love
              </h1>
              <div className="flex items-center justify-center space-x-4 text-6xl">
                <span className="animate-float-gentle" style={{ animationDelay: '0s' }}>💖</span>
                <span className="animate-float-gentle" style={{ animationDelay: '0.3s' }}>🌹</span>
                <span className="animate-float-gentle" style={{ animationDelay: '0.6s' }}>💕</span>
              </div>
            </div>

            {/* Stage 2: Main romantic message */}
            <div className={`mb-12 transition-all duration-1500 ${
              revealStage >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}>
              <div className="relative bg-linear-to-br from-white/10 to-white/5 backdrop-blur-2xl rounded-3xl p-12 md:p-16 border border-rose-300/20 shadow-2xl overflow-hidden">
                
                {/* Decorative corners */}
                <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-rose-300/30 rounded-tl-3xl"></div>
                <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-rose-300/30 rounded-br-3xl"></div>

                {/* Quote marks */}
                <div className="absolute top-8 left-8 text-8xl text-rose-300/10 font-serif leading-none">"</div>
                <div className="absolute bottom-8 right-8 text-8xl text-rose-300/10 font-serif leading-none">"</div>

                <div className="relative z-10 text-center">
                  <p className="text-3xl md:text-4xl lg:text-5xl text-rose-50 font-serif italic leading-relaxed mb-8">
                    In this moment, I want you to know that you are the most precious gift life has given me
                  </p>
                  <div className="w-24 h-0.5 bg-linear-to-r from-transparent via-rose-400 to-transparent mx-auto mb-8"></div>
                  <p className="text-xl md:text-2xl text-rose-200/80 font-light leading-relaxed">
                    Every heartbeat, every breath, every moment with you is a treasure beyond measure
                  </p>
                </div>
              </div>
            </div>

            {/* Stage 3: Love declarations grid */}
            <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 transition-all duration-1500 ${
              revealStage >= 3 ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
            }`}>
              
              <div className="group relative bg-linear-to-br from-rose-500/20 to-pink-500/20 backdrop-blur-xl rounded-2xl p-8 border border-rose-300/20 hover:border-rose-300/40 transition-all duration-500 hover:scale-105 overflow-hidden">
                <div className="absolute inset-0 bg-linear-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="text-6xl mb-4 animate-bounce-gentle">✨</div>
                  <h3 className="text-2xl font-serif text-rose-100 mb-3">You are magic</h3>
                  <p className="text-rose-200/70 font-light">Your presence lights up my world in ways words cannot express</p>
                </div>
              </div>

              <div className="group relative bg-linear-to-br from-purple-500/20 to-fuchsia-500/20 backdrop-blur-xl rounded-2xl p-8 border border-purple-300/20 hover:border-purple-300/40 transition-all duration-500 hover:scale-105 overflow-hidden">
                <div className="absolute inset-0 bg-linear-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="text-6xl mb-4 animate-bounce-gentle" style={{ animationDelay: '0.2s' }}>💫</div>
                  <h3 className="text-2xl font-serif text-rose-100 mb-3">You are extraordinary</h3>
                  <p className="text-rose-200/70 font-light">Everything about you makes my heart sing with joy</p>
                </div>
              </div>

              <div className="group relative bg-linear-to-br from-amber-500/20 to-yellow-500/20 backdrop-blur-xl rounded-2xl p-8 border border-amber-300/20 hover:border-amber-300/40 transition-all duration-500 hover:scale-105 overflow-hidden">
                <div className="absolute inset-0 bg-linear-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="text-6xl mb-4 animate-bounce-gentle" style={{ animationDelay: '0.4s' }}>🌟</div>
                  <h3 className="text-2xl font-serif text-rose-100 mb-3">You are forever</h3>
                  <p className="text-rose-200/70 font-light">My love for you grows stronger with each passing moment</p>
                </div>
              </div>
            </div>

            {/* Stage 4: Final romantic message */}
            <div className={`mb-16 transition-all duration-2000 ${
              revealStage >= 4 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}>
              <div className="relative">
                {/* Glowing frame */}
                <div className="absolute -inset-1 bg-linear-to-r from-rose-500 via-pink-500 to-purple-500 rounded-3xl blur-xl opacity-50 animate-pulse-gentle"></div>
                
                <div className="relative bg-linear-to-br from-rose-950 to-purple-950 rounded-3xl p-12 md:p-16 border border-rose-400/30">
                  <div className="text-center">
                    <div className="text-6xl mb-6 animate-heartbeat">💖</div>
                    <p className="text-2xl md:text-3xl text-rose-100 font-serif italic leading-relaxed mb-6">
                      "Thank you for being you, for choosing me, for filling my days with laughter and my heart with love. You are my greatest adventure, my sweetest dream, my everything."
                    </p>
                    <div className="flex justify-center space-x-2 text-4xl">
                      <span className="animate-pulse-gentle">💕</span>
                      <span className="animate-pulse-gentle" style={{ animationDelay: '0.5s' }}>🌹</span>
                      <span className="animate-pulse-gentle" style={{ animationDelay: '1s' }}>💕</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Elegant back button */}
            <div className="text-center">
              <button
                onClick={() => window.history.back()}
                className="group inline-flex items-center space-x-4 bg-white/5 hover:bg-white/10 backdrop-blur-xl border border-rose-300/20 hover:border-rose-300/40 rounded-full px-10 py-5 transition-all duration-500"
              >
                <svg className="w-6 h-6 text-rose-200 transform group-hover:-translate-x-2 transition-transform duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                <span className="text-rose-100 text-lg font-light tracking-wider">Return with this love in your heart</span>
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Elaborate animations */}
      <style jsx>{`
        @keyframes confetti-burst {
          0% {
            transform: translateY(-20vh) translateX(0) rotate(0deg) scale(1);
            opacity: 1;
          }
          100% {
            transform: translateY(120vh) translateX(${Math.random() * 200 - 100}px) rotate(${Math.random() * 720}deg) scale(0.5);
            opacity: 0;
          }
        }

        @keyframes float-heart {
          0% {
            transform: translateY(100vh) translateX(0) rotate(0deg);
            opacity: 0.2;
          }
          50% {
            opacity: 0.3;
          }
          100% {
            transform: translateY(-20vh) translateX(${Math.random() * 100 - 50}px) rotate(360deg);
            opacity: 0;
          }
        }

        @keyframes sparkle-drift {
          0%, 100% {
            transform: translate(0, 0) scale(1);
            opacity: 0.3;
          }
          25% {
            transform: translate(10px, -20px) scale(1.5);
            opacity: 0.8;
          }
          50% {
            transform: translate(-10px, -40px) scale(1);
            opacity: 0.4;
          }
          75% {
            transform: translate(15px, -60px) scale(1.3);
            opacity: 0.7;
          }
        }

        @keyframes shimmer {
          0% {
            background-position: -200% center;
          }
          100% {
            background-position: 200% center;
          }
        }

        @keyframes shimmer-sweep {
          0% {
            transform: translateX(-100%) translateY(-100%);
          }
          100% {
            transform: translateX(100%) translateY(100%);
          }
        }

        @keyframes sparkle-rotate {
          0%, 100% {
            transform: rotate(0deg) scale(1);
            opacity: 0.8;
          }
          50% {
            transform: rotate(180deg) scale(1.3);
            opacity: 1;
          }
        }

        @keyframes sparkle-pulse {
          0%, 100% {
            transform: scale(1);
            opacity: 0.6;
          }
          50% {
            transform: scale(1.5);
            opacity: 1;
          }
        }

        @keyframes light-ray {
          0% {
            opacity: 0;
            transform: translateY(-100%);
          }
          50% {
            opacity: 0.5;
          }
          100% {
            opacity: 0;
            transform: translateY(100%);
          }
        }

        @keyframes fade-in-down {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes bounce-in {
          0% {
            transform: scale(0);
            opacity: 0;
          }
          50% {
            transform: scale(1.2);
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }

        @keyframes bounce-gentle {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes float-gentle {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes heartbeat {
          0%, 100% {
            transform: scale(1);
          }
          10%, 30% {
            transform: scale(1.15);
          }
          20%, 40% {
            transform: scale(1);
          }
        }

        @keyframes pulse-gentle {
          0%, 100% {
            opacity: 0.5;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.05);
          }
        }

        .animate-confetti-burst {
          animation: confetti-burst ease-in forwards;
        }

        .animate-float-heart {
          animation: float-heart linear infinite;
        }

        .animate-sparkle-drift {
          animation: sparkle-drift ease-in-out infinite;
        }

        .animate-shimmer {
          background-size: 200% auto;
          animation: shimmer 3s linear infinite;
        }

        .animate-shimmer-sweep {
          animation: shimmer-sweep 3s ease-in-out infinite;
        }

        .animate-sparkle-rotate {
          animation: sparkle-rotate 2s ease-in-out infinite;
        }

        .animate-sparkle-pulse {
          animation: sparkle-pulse 2s ease-in-out infinite;
        }

        .animate-light-ray {
          animation: light-ray 4s ease-in-out infinite;
        }

        .animate-fade-in-down {
          animation: fade-in-down 1s ease-out;
        }

        .animate-bounce-in {
          animation: bounce-in 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }

        .animate-bounce-gentle {
          animation: bounce-gentle 2s ease-in-out infinite;
        }

        .animate-float-gentle {
          animation: float-gentle 3s ease-in-out infinite;
        }

        .animate-heartbeat {
          animation: heartbeat 1.5s ease-in-out infinite;
        }

        .animate-pulse-gentle {
          animation: pulse-gentle 3s ease-in-out infinite;
        }

        .bg-gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-stops));
        }
      `}</style>
    </div>
  )
}

export default Surprise


