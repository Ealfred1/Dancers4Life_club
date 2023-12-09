import { Outlet, Link } from 'react-router-dom'

import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'

const Layout = () => {
  return (
    <>
      <div>
        <Navbar />
        <div className="max-w-4xl mx-auto mt-24">
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Layout