import { Link } from 'react-router-dom'

const Footer = () => {
  const year = new Date().getFullYear()
  
  return (
    <footer className="mt-28 w-full h-auto sm:px-12 px-4 py-7 bg-gradient-to-br from-DarkOrange to-redD  text-white flex
      sm:justify-between flex-col sm:flex-row items-center space-y-8
      justify-center relative bottom-0">
      <div className="sm:w-32 h-full w-full text-center space-y-3">
        <h2 className="logo text-3xl font-extrabold tracking-wide text-redD">Dancers<span className="text-silverR">4</span>Life</h2> 
          <p className="text-sm">&copy; Copyright <span id="year">{year}</span></p>
        </div>
        
        <div className=" sm:w-52 h-full w-full space-y-2 text-center flex flex-col
        text-lg">
          <h3 className="text-3xl">Quick Links</h3>
          <Link className="hover:opacity-90" to="/"> Home</Link>
          <Link className="hover:opacity-90" to="/classes"> Classes</Link>
          <Link className="hover:opacity-90" to="/events">Events</Link>
        </div>
        
        <div className="text-center sm:w-52 h-full w-full flex flex-col space-y-3">
          <h2 className="text-3xl">Contact Us</h2>
          
          <p className="text-lg">Our Email</p>
          <a href="mailto:alfrederic371@gmail.com?subject=feedback"
          className="text-sm"><i className="text-blue-300 fas fa-mail mb-3 text-xl
          underline"></i>
            Dancers4Life_club@gmail.com</a>
          
          <div className="flex items-center justify-center space-x-3">
          <div className="text-xl py-3 px-4  
          text-white rounded-full h-10 w-10 flex items-center justify-center">
            <i className="fab fa-facebook-f"></i>  
          </div>
          <div className="text-xl py-3 px-4  
          text-white rounded-full h-10 w-10 flex items-center justify-center">
            <i className="fab fa-twitter"></i>  
          </div>
          <div className="text-xl py-3 px-4  
          text-white rounded-full h-10 w-10 flex items-center justify-center">
            <i className="fab fa-instagram"></i>  
          </div>
          </div>
        </div>
      </footer>
  )
}

export default Footer