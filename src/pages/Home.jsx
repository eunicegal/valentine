import Hero from '../components/Hero'
import YesNoButton from '../components/YesNoButton'
import Mus from '../components/Mus'


const Home = () => {
  return (
    <div className='flex flex-col justify-center items-center min-h-screen bg-pink-100'>
      <Hero />
      <YesNoButton />
      <Mus />
    </div>
  )
}

export default Home



