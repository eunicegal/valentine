import Hero from '../components/Hero'
import YesNoButton from '../components/YesNoButton'
import Music from '../components/music'


const Home = () => {
  return (
    <div className='flex flex-col justify-center items-center min-h-screen bg-pink-100'>
      <Hero />
      <YesNoButton />
      <Music />
    </div>
  )
}

export default Home



