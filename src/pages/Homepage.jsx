import Hero from '../components/Homepage/Hero'
import About from '../components/Homepage/About'
import Classes from '../components/Homepage/Classes'
import Event from '../components/Homepage/Event'

const Homepage = () => {
  return (
    <div className="max-w-5xl ">
      <Hero />
      <About />
      <Classes />
      <Event />
    </div>
  )
}

export default Homepage