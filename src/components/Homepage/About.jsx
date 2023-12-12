import Herobg from '../../assets/img3.png'

const About = () => {
  return (
    <>
    <section id="about">
    <div className="flex flex-col sm:flex-row mt-8 px-4 pt-28 pb-5 sm:space-x-7 justify-between items-center">
      <article className="sm:w-1/2 relative bg-transparent py-9">
       <h2 className="text-4xl text-DarkOrange text-center font-bold
       underline-offset-0">About Dancers4Life Club </h2>
       <p className="max-w-md text-lg text-slate-600 text-center mt-8 font-semibold">
         We believe in the transformative power of dance!
       </p>
       
       <p className="max-w-md text-lg text-slate-600 text-center sm:text-left mt-8">
         At Dancers4Life, we are passionate about fostering a community dedicated to the art of dance. Established with a vision to inspire and empower individuals through movement and expression, we offer a diverse range of dance classes and exhilarating events catering to enthusiasts of all ages and skill levels.
       </p>
       
      </article>
      
      <img className="sm:w-1/2 rounded-lg  border-l-8 border-l-redR"
      src={Herobg} alt="Rocket dab" />
      </div>
      
    <div className="flex flex-col sm:flex-row -mt-20 px-4 sm:space-x-12 justify-between items-center">
      <article className="sm:w-1/2 relative bg-transparent">
       <h2 className="text-3xl text-DarkOrange text-center font-bold mt-32
       underline-offset-0">Our Commitment </h2>
       
       <p className="max-w-md text-lg text-slate-600 text-center sm:text-left mt-8">
         Driven by a commitment to excellence, we strive to create an inclusive and vibrant space where dance becomes a transformative experience. With a team of experienced instructors, we curate a curriculum that not only hones technical proficiency but also ignites creativity and passion for dance.
       </p>
       
      </article>
      
      <article className="sm:w-1/2 relative bg-transparent">
       <h2 className="text-3xl text-DarkOrange text-center font-bold mt-32
       underline-offset-0">Experience The Difference </h2>
       
       <p className="max-w-md text-lg text-slate-600 text-center sm:text-left mt-8">
         Whether you're taking your first steps onto the dance floor or seeking to refine your expertise, Dancers4Life provides a supportive environment for growth and exploration. Our dedication to providing exceptional dance education, coupled with our energetic and welcoming atmosphere, ensures an enjoyable and fulfilling journey into the world of dance.
       </p>
       
      </article>
      
      </div>
       
    </section>
    <hr className=" w-2/3 mx-auto bg-black my-10" />
  </>
  )
}

export default About