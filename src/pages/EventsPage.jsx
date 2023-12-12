import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import eventData from '../data/eventData.json'

const EventsPage = () => {
  
  
  useEffect(() => {
    document.title = `Dancers4Life club | Events`
  }, [])
  
  return (
    <section id="events" className="flex flex-col px-4 pt-4 pb-5">
      <div className="relative bg-transparent py-9">
        
        <h2 className="text-4xl text-DarkOrange text-center font-bold mt-5 underline-offset-0">Upcoming Events</h2>
         <p className="p tracking-wide pl-4 text-center">
          Stay updated on all our outstanding events!!!
         </p>
         
         <div className="flex flex-wrap flex-col sm:flex-row w-full items-center justify-center space-y-8 sm:justify-around mt-5 md:space-x-4">
            { eventData.map((event) => (
              
              <div key={event.id} className="w-[26rem] h-auto shadow-md border border-transparent bg-white rounded-xl">
                <img className="w-full rounded-t-xl h-64 object-cover" src={event.image} alt="" />
                <div className="max-w-prose p-4 space-y-8 text-center flex
                items-center flex-col">
                <h2 className="text-2xl text-slate-600 capitalize
                font-bold">{event.name}</h2>
                <p className="text-lg text-silverR">{event.description}</p>
                <Link to={`/events/${event.id}`} className="w-full h-16 py-4 px-5 text-center bg-redD text-lg grid place-content-center text-white rounded-xl">View Details</Link>
                </div>
              </div>
              )) }
         </div>
      </div>
    </section>
  )
}

export default EventsPage