import { Link } from 'react-router-dom'
import Herobg from '../../assets/img1.png'

const Hero = () => {
  return (
    <>
    <section className="flex flex-col-reverse sm:flex-row my-16 p-4 gap-12
    justify-center items-center hero rounded-xl">
      <article class="sm:w-1/2 relative bg-transparent">
        <h2 className="max-w-md text-4xl text-DarkOrange text-center sm:text-5xl font-semibold sm:text-left">Discover a world of <span className="text-silverR">Dance</span>
        </h2>
        <p className="max-w-md text-xl text-slate-600 text-left mt-8 mb-5">
          Where rhythm meets passion! Explore our diverse dance classes, experience the joy of movement and immerse yourself in the exhilarating world of dance.</p>
        <Link to="/classes" className="btn">Explore Classes</Link>
      </article>
      
      <img className="sm:w-1/2 sm:mb-0 mb-12 rounded-xl" src={Herobg} alt="Hero" />
    </section>
    
    <hr className="md:w-full w-2/3 mx-auto bg-black" />
  </>
  )
}

export default Hero