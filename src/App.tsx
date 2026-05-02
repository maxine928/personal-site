import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Thoughts from './pages/Thoughts'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/thoughts" element={<Thoughts />} />
      </Routes>
    </BrowserRouter>
  )
}
