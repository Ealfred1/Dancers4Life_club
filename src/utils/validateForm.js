const validateForm = (formData) => {
  const newErrors = {};

  formData.full_name === '' ? (newErrors.full_name = 'Your Full Name is required') : '';

  formData.email.trim() === '' ? (newErrors.email = 'Email is required') : '';

  formData.phone_number.trim() === '' || formData.phone_number.trim().length < 11
    ? (newErrors.phone_number = 'Phone Number is invalid')
    : '';

  formData.dance_experience.trim() === ''
    ? (newErrors.dance_experience = 'The experience field is required')
    : '';

  formData.dance_class.trim() === ''
    ? (newErrors.dance_class = 'The dance class field is required')
    : '';

  formData.email.trim().includes('@gmail.com') ? '' : (newErrors.email = 'Email is invalid');

  return newErrors;
};

export default validateForm;