import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const YesNoButton = () => {
  const navigate = useNavigate()
  const [noPos, setNoPos] = useState({ top: 0, left: 150 }) // Start to the right of YES
  const [yesScale, setYesScale] = useState(1)
  const [showMessage, setShowMessage] = useState(false)
  const [hoverCount, setHoverCount] = useState(0)

  // Move the NO button randomly when hovered
  const moveNoButton = () => {
    // Random position within viewport boundaries
    const maxX = 300
    const maxY = 200
    const x = Math.floor(Math.random() * maxX * 2) - maxX
    const y = Math.floor(Math.random() * maxY * 2) - maxY
    
    setNoPos({ top: y, left: x })
    
    // Increase YES button size each time NO is hovered
    setYesScale(prev => Math.min(prev + 0.15, 2.5))
    setHoverCount(prev => prev + 1)
    setShowMessage(true)
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-100 relative">
      {/* Encouraging message */}
      {showMessage && (
        <div className="absolute top-0 text-center animate-pulse">
          <p className="text-pink-500 font-bold text-xl mb-2">
            ✨ This is a sign to say YES! ✨
          </p>
          {hoverCount > 2 && (
            <p className="text-pink-400 text-lg">
              The universe wants you to click YES! 💫
            </p>
          )}
        </div>
      )}

      {/* Buttons container */}
      <div className="relative flex items-center justify-center mt-16 w-full h-64">
        {/* YES button - grows bigger */}
        <button
          onClick={() => navigate('/gifts')}
          style={{ 
            transform: `scale(${yesScale})`,
            transition: 'transform 0.3s ease'
          }}
          className="bg-linear-to-r from-pink-400 to-pink-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 z-10"
        >
          Yes 💖
        </button>

        {/* NO button - runs away */}
        <button
          onMouseEnter={moveNoButton}
          onClick={moveNoButton}
          style={{ 
            position: 'absolute',
            top: `${noPos.top}px`,
            left: `${noPos.left}px`,
            transition: 'all 0.2s ease-out'
          }}
          className="bg-gray-400 text-white font-semibold py-2 px-6 rounded-full shadow-lg cursor-pointer"
        >
          No 😅
        </button>
      </div>

      {/* Floating hearts */}
      <div className="mt-12 flex space-x-2 animate-bounce">
        <span className="text-red-400 text-2xl">❤️</span>
        <span className="text-pink-400 text-2xl">💖</span>
        <span className="text-red-500 text-2xl">❤️</span>
      </div>

      {/* Extra encouragement after multiple hovers */}
      {hoverCount > 4 && (
        <div className="mt-4 text-center">
          <p className="text-pink-600 font-semibold animate-pulse">
            You know you want to say yes! 😊💕
          </p>
        </div>
      )}
    </div>
  )
}

export default YesNoButton




