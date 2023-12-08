import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import Layout from './components/Layout'
import Homepage from './pages/Homepage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="w-full h-screen">
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Homepage />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
