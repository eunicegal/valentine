import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

const Gifts = () => {
  const navigate = useNavigate()
  const [hoveredGift, setHoveredGift] = useState(null)
  const [revealedGifts, setRevealedGifts] = useState([])
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    // Stagger gift reveals
    gifts.forEach((_, index) => {
      setTimeout(() => {
        setRevealedGifts(prev => [...prev, index])
      }, 800 + index * 300)
    })

    // Track mouse for parallax effect
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const gifts = [
    {
      id: 'letter',
      icon: '💌',
      title: 'Love Letter',
      subtitle: 'Words penned from my soul',
      description: 'Every sentence, a confession of my heart',
      route: '/letters',
      gradient: 'from-rose-600 via-pink-600 to-red-600',
      lightGradient: 'from-rose-400/20 via-pink-400/20 to-red-400/20',
      accentColor: 'rose'
    },
    {
      id: 'flowers',
      icon: '🌸',
      title: 'Bouquet',
      subtitle: 'Blooms of eternal devotion',
      description: 'Each petal whispers my love for you',
      route: '/flowers',
      gradient: 'from-purple-600 via-fuchsia-600 to-pink-600',
      lightGradient: 'from-purple-400/20 via-fuchsia-400/20 to-pink-400/20',
      accentColor: 'purple'
    },
    {
      id: 'pictures',
      icon: '📸',
      title: 'Memories',
      subtitle: 'Captured moments of forever',
      description: 'Time standing still in perfect frames',
      route: '/pictures',
      gradient: 'from-amber-600 via-orange-600 to-rose-600',
      lightGradient: 'from-amber-400/20 via-orange-400/20 to-rose-400/20',
      accentColor: 'amber'
    },
    {
      id: 'surprise',
      icon: '🎁',
      title: 'Surprise',
      subtitle: 'A secret wrapped in wonder',
      description: 'Something extraordinary awaits you',
      route: '/surprise',
      gradient: 'from-red-600 via-rose-600 to-pink-600',
      lightGradient: 'from-red-400/20 via-rose-400/20 to-pink-400/20',
      accentColor: 'red'
    }
  ]

  return (
    <div className="min-h-screen bg-linear-to-br from-neutral-950 via-stone-950 to-neutral-900 relative overflow-hidden">
      
      {/* Elegant grain texture */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-noise"></div>
      
      {/* Ambient romantic lighting */}
      <div 
        className="absolute top-0 left-0 w-250 h-250 bg-rose-500/15 rounded-full blur-[150px] transition-transform duration-1000 ease-out"
        style={{
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`
        }}
      ></div>
      <div 
        className="absolute bottom-0 right-0 w-200 h-200 bg-purple-500/15 rounded-full blur-[130px] transition-transform duration-1000 ease-out"
        style={{
          transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)`
        }}
      ></div>

      {/* Floating romantic particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float-romantic"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${8 + Math.random() * 8}s`,
            }}
          >
            <div className="w-1 h-1 bg-rose-300/30 rounded-full blur-sm"></div>
          </div>
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-6 py-20">
        <div className="w-full max-w-7xl">
          
          {/* Sophisticated header */}
          <div className="text-center mb-24 animate-fade-in-elegant">
            <div className="inline-block mb-8">
              <span className="text-rose-400/60 text-sm uppercase tracking-[0.5em] font-light block mb-4">
                For You, My Love
              </span>
              <h1 className="text-7xl md:text-9xl lg:text-[10rem] font-serif font-light text-transparent bg-clip-text bg-linear-to-r from-rose-200 via-pink-100 to-fuchsia-200 tracking-tight leading-none mb-6">
                Treasures
              </h1>
              <div className="w-40 h-px bg-linear-to-r from-transparent via-rose-400/50 to-transparent mx-auto mb-8"></div>
              <p className="text-xl md:text-2xl text-neutral-300 font-light italic max-w-2xl mx-auto leading-relaxed">
                Each gift, a universe of emotions waiting to unfold
              </p>
            </div>
          </div>

          {/* Luxury gift showcase */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-20">
            {gifts.map((gift, index) => (
              <div
                key={gift.id}
                className={`transition-all duration-1000 ${
                  revealedGifts.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <button
                  onClick={() => navigate(gift.route)}
                  onMouseEnter={() => setHoveredGift(gift.id)}
                  onMouseLeave={() => setHoveredGift(null)}
                  className="group relative w-full text-left"
                >
                  {/* Main card */}
                  <div className={`relative bg-linear-to-br from-neutral-900/50 to-stone-900/50 backdrop-blur-xl rounded-2xl overflow-hidden border transition-all duration-700 ${
                    hoveredGift === gift.id 
                      ? 'border-rose-400/40 shadow-2xl shadow-rose-500/20 scale-[1.02]' 
                      : 'border-neutral-700/30 shadow-xl'
                  }`}>
                    
                    {/* Gradient overlay */}
                    <div className={`absolute inset-0 bg-linear-to-br ${gift.lightGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}></div>

                    {/* Shimmer effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                      <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1500"></div>
                    </div>

                    {/* Content container */}
                    <div className="relative p-10 md:p-12 flex items-center space-x-8">
                      
                      {/* Icon with elegant backdrop */}
                      <div className="relative shrink-0">
                        <div className={`absolute inset-0 bg-linear-to-br ${gift.gradient} opacity-20 blur-2xl scale-150 group-hover:scale-[2] group-hover:opacity-30 transition-all duration-700`}></div>
                        <div className={`relative w-24 h-24 md:w-32 md:h-32 rounded-full bg-linear-to-br ${gift.gradient} flex items-center justify-center shadow-2xl transform transition-all duration-700 ${
                          hoveredGift === gift.id ? 'rotate-12 scale-110' : ''
                        }`}>
                          <span className="text-5xl md:text-6xl drop-shadow-2xl">
                            {gift.icon}
                          </span>
                        </div>
                      </div>

                      {/* Text content */}
                      <div className="flex-1 space-y-3">
                        <h3 className="text-3xl md:text-4xl font-serif text-neutral-100 mb-2 group-hover:text-rose-200 transition-colors duration-500">
                          {gift.title}
                        </h3>
                        <p className={`text-lg md:text-xl text-${gift.accentColor}-400/80 font-light italic mb-3`}>
                          {gift.subtitle}
                        </p>
                        <p className="text-neutral-400 text-base leading-relaxed max-w-md opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                          {gift.description}
                        </p>
                      </div>

                      {/* Elegant arrow */}
                      <div className="shrink-0 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-2 transition-all duration-500">
                        <svg className="w-8 h-8 text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </div>
                    </div>

                    {/* Bottom accent line */}
                    <div className={`h-1 bg-linear-to-r ${gift.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left`}></div>
                  </div>

                  {/* Decorative corners */}
                  <div className={`absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-${gift.accentColor}-400/0 group-hover:border-${gift.accentColor}-400/40 transition-all duration-500 rounded-tl-lg`}></div>
                  <div className={`absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-${gift.accentColor}-400/0 group-hover:border-${gift.accentColor}-400/40 transition-all duration-500 rounded-br-lg`}></div>
                </button>
              </div>
            ))}
          </div>

          {/* Romantic quote section */}
          <div className="max-w-4xl mx-auto mb-16 animate-fade-in-elegant" style={{ animationDelay: '1.5s' }}>
            <div className="relative bg-linear-to-br from-neutral-800/40 to-stone-900/40 backdrop-blur-2xl rounded-2xl p-12 md:p-16 border border-neutral-700/30">
              
              {/* Decorative elements */}
              <div className="absolute top-6 left-6 text-7xl text-rose-400/5 font-serif leading-none">"</div>
              <div className="absolute bottom-6 right-6 text-7xl text-rose-400/5 font-serif leading-none">"</div>

              <div className="relative z-10 text-center">
                <p className="text-2xl md:text-3xl text-neutral-200 font-serif italic leading-relaxed mb-6">
                  In every gesture, in every gift, there lies a piece of my soul reaching out to yours. Choose any path, and you'll find me waiting there, with love eternal.
                </p>
                <div className="flex justify-center space-x-2 mt-8">
                  <div className="w-1.5 h-1.5 rounded-full bg-rose-400/60"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-rose-400/40"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-rose-400/20"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating hearts with elegance */}
          <div className="flex justify-center items-center space-x-6 animate-fade-in-elegant" style={{ animationDelay: '2s' }}>
            {['💖', '🌹', '💕'].map((heart, index) => (
              <span
                key={index}
                className="text-4xl md:text-5xl animate-float-slow opacity-40 hover:opacity-100 transition-opacity duration-500"
                style={{
                  animationDelay: `${index * 0.4}s`,
                  animationDuration: `${4 + index * 0.5}s`
                }}
              >
                {heart}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Elegant animations */}
      <style jsx>{`
        @keyframes float-romantic {
          0%, 100% {
            transform: translate(0, 0);
            opacity: 0.2;
          }
          25% {
            transform: translate(10px, -30px);
            opacity: 0.4;
          }
          50% {
            transform: translate(-10px, -60px);
            opacity: 0.3;
          }
          75% {
            transform: translate(15px, -90px);
            opacity: 0.5;
          }
        }

        @keyframes float-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-15px);
          }
        }

        @keyframes fade-in-elegant {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

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

        .animate-float-romantic {
          animation: float-romantic linear infinite;
        }

        .animate-float-slow {
          animation: float-slow ease-in-out infinite;
        }

        .animate-fade-in-elegant {
          animation: fade-in-elegant 1.2s ease-out forwards;
          opacity: 0;
        }

        .bg-noise {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
          animation: grain 8s steps(10) infinite;
        }
      `}</style>
    </div>
  )
}

export default Gifts

