import { Home, Destination, Crew, Technology } from './pages'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="crew" element={<Crew />} />
      <Route path="destination" element={<Destination />} />
      <Route path="technology" element={<Technology />} />
    </Routes>
  )
}

export default App
