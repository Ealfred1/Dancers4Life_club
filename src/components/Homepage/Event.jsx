import { Link } from 'react-router-dom'
import EventBg from '../../assets/img4.jpg'

const Event = () => {
  return (
    <section className="flex flex-col">
    <div className="flex flex-col sm:flex-row-reverse my-16 p-4 gap-12 justify-center items-center hero rounded-xl">
      <article class="sm:w-1/2 relative bg-transparent">
        <h2 className="max-w-md text-3xl text-DarkOrange text-center sm:text-5xl font-semibold sm:text-left"> Upcoming Dance Events
        </h2>
        <p className="max-w-md text-lg text-slate-600 text-left mt-8 mb-10">
          Join us for electrifying dance events that showcase the vibrancy and rhythm of Dancers4Life Club. Our calendar is filled with exciting gatherings, performances, and workshops that celebrate the artistry of dance.
        </p>
        <Link to="/events" className="btn">View Events</Link>
      </article>
      
      <img className="sm:w-1/2 sm:mb-0 mb-12 rounded-xl" src={EventBg} alt="Hero" />
      </div>
        <div className="flex w-full items-center justify-center mt-24 h-80 px-9
        py-6 bg-redD flex-col md:rounded-xl">
          <h1 className="text-2xl text-center text-white font-semibold my-5"> Stay Connected
          With Us</h1>
          <h1 className="text-lg text-center text-white font-semibold mb-5">
          Subscribe to our newsletter</h1>
          
          <div className="flex justify-between">
            <div className="sm:w-72 h-16 w-56">
              <input type="email" placeholder="Youremail@example.com"
              className="w-full h-full py-5 px-4 text-white bg-transparent
              border border-white text-white text-sm rounded-l-xl
              placeholder-white outline-none "
              />
            </div>
            <div>
              <button className="w-20 h-16 p-4 text-center bg-white text-sm rounded-r-xl grid place-content-center">Subscribe</button>
            </div>
          </div>
        </div>
    </section>
    
  )
}

export default Event