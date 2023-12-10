import { useSearchParams } from 'react-router-dom';

const RegisterPage = () => {
  const [searchParams] = useSearchParams();
  const selectedDance = searchParams.get('selectedDance');
  const price = searchParams.get('price');

  return (
    <div>
      <h2>Register for {selectedDance}</h2>
      <p>Price: {price}</p>
      {/* Rest of the registration form */}
    </div>
  );
};

export default RegisterPage;