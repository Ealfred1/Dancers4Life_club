import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import EventDetails from './components/Event/EventDetails'
import PurchaseTickets from './components/Event/PurchaseTickets'
import Homepage from './pages/Homepage'
import Classespage from './pages/Classespage'
import EventsPage from './pages/EventsPage'
import RegisterPage from './pages/RegisterPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="w-full h-screen">
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path='/classes' element={<Classespage />} />
          <Route path='/events' element={<EventsPage />} />
          <Route path="/events/:eventId" element={<EventDetails />} />
          <Route path="/payment/:eventId" element={<PurchaseTickets />} />
          <Route path='/register' element={<RegisterPage />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
