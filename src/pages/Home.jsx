import Hero from '../components/Hero'
import YesNoButton from '../components/YesNoButton'



const Home = () => {
  return (
    <div className='flex flex-col justify-center items-center min-h-screen bg-pink-100'>
      <Hero />
      <YesNoButton />
      
    </div>
  )
}

export default Home



