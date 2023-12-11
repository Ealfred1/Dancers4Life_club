import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import eventData from '../../data/eventData.json';

const EventDetails = () => {
    const { eventId } = useParams();
    const event = eventData.find((event) => event.id === parseInt(eventId));
    
    useEffect(() => {
     document.title = `Dancers4Life club | Event Details`
     }, [])
  
    if (!event) {
      return <div>Event not found</div>;
    }
  return (
    <section className="flex flex-col px-4 pt-4 pb-5">
      <div className="relative bg-transparent py-9">
        
        <h2 className="text-4xl text-DarkOrange text-center font-bold mt-5 underline-offset-0">Upcoming Events</h2>
         <p className="p tracking-wide pl-4 text-center">
          Stay updated on all our outstanding events!!!
         </p>
         
         <div className="flex flex-wrap flex-col sm:flex-row w-full items-center justify-center space-y-8 sm:justify-around mt-5">
              <div className="max-w-2xl h-auto shadow-md border border-transparent bg-white rounded-xl py-3">
                <img className="w-full rounded-t-xl h-64 object-cover" src={event.image} alt="" />
                <div className="max-w-prose p-4 space-y-8 text-center flex flex-col">
                <h2 className="text-2xl text-slate-600 capitalize
                font-bold">{event.name}</h2>
                <p className="text-lg text-silverR">{event.description}</p>
                <div className="mt-4 space-y-4">
                  <div>
                    <p className="p font-extrabold">
                      Time and Date:
                    </p>
                    <p className="p text-silverR font-normal">{event.date}</p>
                  </div>
                  <div>
                    <p className="p font-extrabold">
                      Venue:
                    </p>
                    <p className="p text-silverR font-normal">
                      {event.venue}
                    </p>
                  </div>
                  <div>
                    <p className="p text-3xl font-extrabold">
                      {event.price}
                    </p>
                  </div>
                </div>
         
                <Link className="w-full h-16 py-4 px-5 text-center bg-redD text-lg grid place-content-center text-white rounded-xl">Purchase Tickets</Link>
                </div>
              </div>
         </div>
      </div>
    </section>
  )
}

export default EventDetails