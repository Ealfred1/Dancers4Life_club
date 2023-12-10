import { Link } from 'react-router-dom';

const ClassBox = ({ style, image, description, date, duration, price }) => {
  return (
    <div className="box w-full sm:w-1/2 flex flex-col items-center border border-8 border-silverR rounded-lg bg-white shadow-lg p-8 relative">
          <img src={image} alt="reload your browser" className="h-64 w-full object-cover rounded-lg" />
          <h3 className="text-2xl text-DarkOrange font-semibold py-4 tracking-wide">{style}</h3>
          <p className="p text-center">{description}</p>
         
         <div className="mt-4 space-y-4">
          <div>
            <p className="p font-extrabold">
              Time and Date:
            </p>
            <p className="p text-silverR font-normal">{date}</p>
          </div>
          <div>
            <p className="p font-extrabold">
              Duration:
            </p>
            <p className="p text-silverR font-normal">
              {duration}
            </p>
          </div>
          <div>
            <p className="p font-extrabold">
              Price:
            </p>
            <p className="p text-silverR font-normal">
              {price}
            </p>
          </div>
         </div>
         
         <div className="flex justify-between px-4 w-full gap-6 mt-4">
          <Link to={`/register?selectedDance=${encodeURIComponent(style)}&price=${encodeURIComponent(price)}`} className="bg-redD btn2">Register</Link>
          <Link to="/payment" className="btn2">Payment</Link>
         </div>
        </div>
  )
}

export default ClassBox