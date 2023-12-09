import { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [open, setOpen] = useState(false)
  
  const handleToggle = () => {
    setOpen(!open)
  }
  
  return (
    <section className="">
      <header className="w-full bg-transparent backdrop-blur-2xl h-16 z-10 fixed top-0 shadow-sm ">
        <div className="flex justify-between px-7 sm:px-12 py-4 mx-auto max-w-4xl">
          <div className="logo">
            <h2 className="text-3xl font-extrabold tracking-wide text-redD">Dancers<span className="text-silverR">4</span>Life</h2>
          </div>
      
          <div className={`hamburger sm:hidden font-bold     ${open ? 'open' : '' }`} onClick={handleToggle}>
            <div className="hamburger-top"></div>
            <div className="hamburger-middle"></div>
            <div className="hamburger-bottom"></div>
          </div>
      
          <nav className="hidden sm:block space-x-8 text-xl text-silverR">
            <Link className="hover:text-redD" to="/"> Home</Link>
            <Link className="hover:text-redD" to="/classes"> Classes</Link>
            <Link className="hover:text-redD" to="/events"> Events</Link>
          </nav>
        </div>
      </header>
      
      <div className="absolute inset-0 flex items-center justify-center">
      <section className={`w-[80%]  bg-gradient-to-br from-DarkOrange to-redD h-[18.3rem] flex flex-col space-y-4 text-lg text-white fixed z-10 text-center items-center justify-center rounded-lg shadow-2xl  menu ${open ? 'toggle' : '' }`} onClick={handleToggle}>
        <Link className="link" to="/" >Home</Link>
        <Link className="link" to="/classes" >Classes</Link>
        <Link className="link" to="/events" >Events</Link>
      </section>
      </div>
    </section>
  )
}

export default Navbar