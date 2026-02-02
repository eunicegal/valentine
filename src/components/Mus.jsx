import { useRef } from 'react'

const Music = () => {
  const audioRef = useRef(null)

  const playMusic = () => {
    audioRef.current.play()
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <audio ref={audioRef} loop>
        <source src="/music/song1.mp3" type="audio/mpeg" />
      </audio>

      <button
        onClick={playMusic}
        className="bg-pink-500 text-white px-4 py-2 rounded-full shadow-lg hover:bg-pink-600"
      >
        ▶ Play Music
      </button>
    </div>
  )
}

export default Music
