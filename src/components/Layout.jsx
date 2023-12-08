import { Outlet, Link } from 'react-router-dom'

import Navbar from './Navbar.jsx'

const Layout = () => {
  return (
    <>
      <div>
        <Navbar />
        <div className="max-w-4xl mx-auto">
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default Layout