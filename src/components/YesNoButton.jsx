import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const YesNoButton = () => {
  const navigate = useNavigate()
  const [noPos, setNoPos] = useState({ top: '0px', left: '0px' })

  // Move the NO button randomly when hovered
  const moveNoButton = () => {
    const x = Math.floor(Math.random() * 150) - 75 // random horizontal shift
    const y = Math.floor(Math.random() * 50) - 25  // random vertical shift
    setNoPos({ top: `${y}px`, left: `${x}px` })
  }

  return (
    <div className="flex flex-col items-center mt-4 relative">
      {/* Buttons container */}
      <div className="relative flex items-center justify-center space-x-6">
        {/* YES button */}
        <button
          onClick={() => navigate('/gifts')}
          className="bg-linear-to-r from-pink-400 to-pink-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300"
        >
          Yes 💖
        </button>

        {/* NO button */}
        <button
          onMouseEnter={moveNoButton}
          style={{ position: 'absolute', ...noPos }}
          className="bg-gray-400 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300"
        >
          No 😅
        </button>
      </div>

      {/* Floating hearts under buttons */}
      <div className="mt-8 flex space-x-2 animate-bounce">
        <span className="text-red-400 text-2xl">❤️</span>
        <span className="text-pink-400 text-2xl">💖</span>
        <span className="text-red-500 text-2xl">❤️</span>
      </div>
    </div>
  )
}

export default YesNoButton




