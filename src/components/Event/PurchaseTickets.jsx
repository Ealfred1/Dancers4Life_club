import { useState, useEffect } from 'react'
import { Link, useParams, useSearchParams } from 'react-router-dom'
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import PaymentForm from '../PaymentForm'
import eventData from '../../data/eventData.json'

const stripePromise = loadStripe('pk_test_51OMIdFIhvoHTIvNwbQ5K04r7iFfLAyErFhNhQdJYHCqAGvBNTiBvenF2dPgYbFeskDnSI2wz7FE5z8HWF2ooG1NV00GoCwhnqi');
const PurchaseTickets = () => {
  const { eventId } = useParams()
  const [searchParams] = useSearchParams()
  const selectedDance = searchParams.get('selectedDance')
  const [event, setEvent] = useState(null)
  
  useEffect(() => {
    const selectedEvent = eventData.find((event) => event.id === parseInt(eventId))
    setEvent(selectedEvent)
  }, [eventId])
  

  return (
    <div>
      <Elements stripe={stripePromise}>
        <PaymentForm text='Checkout' heading={`Register for ${selectedDance} class`} />
      </Elements>
    </div>
  )
}

export default PurchaseTickets