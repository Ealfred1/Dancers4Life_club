import { Link } from 'react-router-dom'
import EventBg from '../../assets/img4.jpg'

const Event = () => {
  return (
    <section className="flex flex-col sm:flex-row-reverse my-16 p-4 gap-12
    justify-center items-center hero rounded-xl">
      <article class="sm:w-1/2 relative bg-transparent">
        <h2 className="max-w-md text-3xl text-DarkOrange text-center sm:text-5xl font-semibold sm:text-left"> Upcoming Dance Events
        </h2>
        <p className="max-w-md text-lg text-slate-600 text-left mt-8 mb-10">
          Join us for electrifying dance events that showcase the vibrancy and rhythm of Dancers4Life Club. Our calendar is filled with exciting gatherings, performances, and workshops that celebrate the artistry of dance.
        </p>
        <Link to="/events" className="btn">View Events</Link>
      </article>
      
      <img className="sm:w-1/2 sm:mb-0 mb-12 rounded-xl" src={EventBg} alt="Hero" />
    </section>
    
  )
}

export default Event