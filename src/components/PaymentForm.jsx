import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const PaymentForm = ({ text, heading }) => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      return;
    }

    // Use elements.getElement to get a reference to the CardElement.
    const cardElement = elements.getElement(CardElement);

    // Simulate a successful payment
    console.log('Payment successful!');

    // Clear the CardElement
    cardElement.clear();
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl space-y-4 px-3 mx-auto">
      <h2 className="text-2xl text-DarkOrange text-center font-bold mt-5 underline-offset-0">{heading}</h2>
      <div>
        <label className="block text-left" htmlFor="name">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="input"
        />
      </div>
      <div>
        <label className="block text-left" htmlFor="email">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="input"
        />
      </div>
      <div>
        <label className="block text-left" htmlFor="phone">
          Phone Number
        </label>
        <input
          type="telephone"
          id="phone"
          name="phone"
          className="input"
        />
      </div>
      <div>
        
      </div>
      <label className="block text-left">
       Payment Method
      </label>
      <div className="bg-white rounded-lg p-4 shadow-md">
        <CardElement
          className="p-2 border rounded-md focus:outline-none focus:border-blue-500"
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#000',
                '::placeholder': {
                  color: '#6B7280',
                },
              },
              invalid: {
                color: '#EF4444',
              },
            },
          }}
        />
      </div>
      <button
        type="submit"
        disabled={!stripe}
        className="w-full h-16 py-4 px-5 text-center bg-redD text-lg grid place-content-center text-white rounded-xl">
        {text}
      </button>
    </form>
  );
};

export default PaymentForm;