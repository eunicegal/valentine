import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Gifts from './pages/Gifts'
import Flowers from './pages/Flowers'
import Letter from './pages/Letter'
import Pictures from './pages/Pictures'
import Surp from './pages/Surp' 




const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/gifts" element={<Gifts/>} />
      <Route path="/flowers" element={<Flowers/>} />
      <Route path="/letters" element={<Letter/>} />
      <Route path="/pictures" element={<Pictures/>} />
      <Route path="/surprise" element={<Surp/>} />
    </Routes>
  )
}

export default App



