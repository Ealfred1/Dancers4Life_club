import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import classData from '../data/classData.json'
import ClassBox from '../components/Classes/ClassBox'
import BallImg from '../assets/ballDance.jpg'
import HipHopImg from '../assets/hipHop.jpeg'
import SalsaImg from '../assets/salsaDance.jpeg'
import LineDanceImg from '../assets/lineDance.jpg'

const Classespage = () => {
  
  useEffect(() => {
    document.title = `Dancers4Life club | Dance Classes`
  }, [])
  
  return (
    <section id="classes" className="px-2 py-4">
      <h2 className="text-4xl text-DarkOrange text-center font-bold underline-offset-0 mb-9">Dance Classes
      </h2>
      
      <p className="p font-sans font-light tracking-wide pl-4">Dive into the world of Dance at Dancers4Life club. Choose from variety of classes including Ballroom, Salsa and more! Our experienced instructors will ensure you learn and grow with style so as to unleash your inner Dancer. </p>
      <div className="flex flex-wrap flex-col sm:flex-row max-w-5xl items-center justify-center md:justify-around space-y-5 space-x-1 mt-9 px-3">
         <ClassBox 
                  id='1'
                  style='Ballroom'
                   image={BallImg}
                   description='Elegant and graceful, Ballroom dance classes emphasize posture, technique, and movement.' 
                   date='Tuesday, January 18, 2024 | 8:00 PM'
                   duration='1 hour / session'
                   price='$20 / session' />
                   
         <ClassBox 
                   id='2'
                   style='Hip-hop'
                   image={HipHopImg}
                   description='High-energy and expressive, Hip-hop dance classes focus on rhythm, coordination, and freestyle moves.' 
                   date='Saturday, January 6, 2024 | 7:00 PM'
                   duration='1.5 hours / session'
                   price='$15 / session' />
                   
         <ClassBox id='3'
                  style='Salsa'
                   image={SalsaImg}
                   description='Passionate and rhythmic, Salsa dance classes teach fundamental steps and partner work.' 
                   date='Friday, January 12, 2024 | 2:00 PM'
                   duration='1 hours / session'
                   price='$18 / session' />
                   
         <ClassBox id='4'
                  style='Line dancing'
                   image={LineDanceImg}
                   description='Fun and social, Line dancing classes cover a variety of dance routines in group settings.' 
                   date='Tuesday, January 2, 2024 | 5:00 PM'
                   duration='1 hours/ session'
                   price='$12 / session' />
        </div>
    </section>
  )
}

export default Classespage