import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import validateForm from '../utils/validateForm'

const RegisterPage = () => {
  const [searchParams] = useSearchParams()
  const selectedDance = searchParams.get('selectedDance')
  const price = searchParams.get('price')
  const [error, setError] = useState({})
  
  const [formData, setFormData] = useState({
    full_name: '',
    phone_number: '',
    email: '',
    dance_experience: '',
    dance_class: '',
  })
  
  useEffect(() => {
    document.title = `Dancers4Life Club | ${selectedDance} class Registration`
  }, [])
  
  useEffect(() => {
    handleClassClick(selectedDance)
  }, [])
  
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({...formData, [name]: value})
  }
  
  const handleExperienceClick = (value) => {
    setFormData({...formData, dance_experience: value})
  }
  
  const handleClassClick = (value) => {
    setFormData({...formData, dance_class: value})
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    const newErrors = validateForm(formData)
    setError(newErrors)
    const isValid = Object.keys(newErrors).length === 0;
    if (isValid) {
      alert('Registration Successful')
      console.log(formData)
      setFormData({})
      setError({})
    }
  }
  
  
  return (
  <section>
    <div className="flex flex-col px-4 pt-4 pb-5">
      <article className="relative bg-transparent py-9">
       <h2 className="text-4xl text-DarkOrange text-center font-bold mt-5 underline-offset-0">Dance Class Registration </h2>
       <p className="p tracking-wide pl-4 text-center">Register for the {selectedDance} dance class!
       </p>
       
      <form className="mt-14 px-2 max-w-3xl mx-auto" method="post" onSubmit={handleSubmit}>
        <div className="flex flex-col space-y-2 mb-4">
          <label className="p md:text-left">Full Name</label>
          <input type="text" 
              name="full_name" 
              value={formData.full_name}
              onChange={handleInputChange}
              className="input"
              placeholder="John Doe"
            />
           {error.full_name && <span className="error-message">{error.full_name}</span>}
        </div>
        
        <div className="flex flex-col space-y-2 mb-4">
          <label className="p md:text-left">Phone Number</label>
          <input type="text" 
              name="phone_number" 
              value={formData.phone_number}
              onChange={handleInputChange}
              className="input"
              placeholder="08001002000"
            />
          {error.phone_number && <span className="error-message">{error.phone_number}</span>}
        </div>
        <div className="flex flex-col space-y-2 mb-4">
          <label className="p md:text-left">Email Address</label>
          <input type="email" 
              name="email" 
              value={formData.email}
              onChange={handleInputChange}
              className="input"
              placeholder="email@example.com"
            />
          {error.email && <span className="error-message">{error.email}</span>}
        </div>
        <div className="flex flex-col space-y-4 mb-6">
          <label className="p md:text-left"> Dancing
          Experience</label>
          <div className="flex space-x-3">
            <a
            onClick={() => handleExperienceClick('beginner')}
            className={`button ${formData.dance_experience === 'beginner' ? 'active' : ''}`}>Beginner</a>
            <a
            onClick={() => handleExperienceClick('intermediate')}
            className={`button ${formData.dance_experience === 'intermediate' ? 'active' : ''}`}>Intermediate</a>
            <a
            onClick={() => handleExperienceClick('expert')}
            className={`button ${formData.dance_experience === 'expert' ? 'active' : ''}`}>Expert</a>
          </div>
        {error.dance_experience && <span className="error-message">{error.dance_experience}</span>}
        </div> 
        
        <div className="flex flex-col space-y-4 mb-6">
          <label className="p md:text-left"> Dance Class </label>
          <div className="flex space-x-3">
            <a
            onClick={() => handleClassClick('Ballroom')}
            className={`button ${formData.dance_class === 'Ballroom' ? 'active'
            : ''}`}>Ballroom</a>
            <a
            onClick={() => handleClassClick('Hip-hop')}
            className={`button ${formData.dance_class === 'Hip-hop' ? 'active' : ''}`}>Hip-hop</a>
            <a
            onClick={() => handleClassClick('Salsa')}
            className={`button ${formData.dance_class === 'Salsa' ? 'active' : ''}`}>Salsa</a>
            <a
            onClick={() => handleClassClick('Line dancing')}
            className={`button ${formData.dance_class === 'Line dancing' ? 'active' : ''}`}>Line dancing</a>
          </div>
          {error.dance_class && <span className="error-message">{error.dance_class}</span>}
        </div> 

        <button className="btn-register" disabled={!Object.keys(error).length === 0}>Register</button>
      </form>
        
      </article>
      </div>
      
  </section>
  )
}

export default RegisterPage