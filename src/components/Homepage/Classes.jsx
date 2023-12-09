import { Link } from 'react-router-dom'
import ClassesBg from '../../assets/img5.jpg'

const Classes = () => {
  return (
    <section className="flex flex-col sm:flex-row my-16 p-4 gap-12
    justify-center items-center hero rounded-xl">
      <article class="sm:w-1/2 relative bg-transparent">
        <h2 className="max-w-md text-4xl text-DarkOrange text-center sm:text-5xl font-semibold sm:text-left"> Join Our Classes
        </h2>
        <p className="max-w-md text-lg text-slate-600 text-left mt-8 mb-10">
          Discover a variety of dance styles at Dancers4Life Club. Our classes welcome dancers of all levels and ages. From Ballroom to Hip-hop, Salsa, and Line dancing, we offer a diverse range of classes. Find your favorite style or try something new.
Browse our classes, find the perfect fit, and start your dance journey with us. 
        </p>
        <Link to="/classes" className="btn">Explore Classes</Link>
      </article>
      
      <img className="sm:w-1/2 sm:mb-0 mb-12 rounded-xl" src={ClassesBg} alt="Hero" />
    </section>
    
  )
}

export default Classes