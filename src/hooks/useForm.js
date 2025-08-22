import { useState } from "react";

const useForm = (initialState, validationRules) => {
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    // Clear error as user types
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    Object.keys(validationRules).forEach(field => {
      if (field === 'confirmPassword') {
        newErrors[field] = validationRules[field](formData[field], formData.password);
      } else if (field === 'password' && formData.username) {
        newErrors[field] = validationRules[field](formData[field], formData.username);
      } else {
        newErrors[field] = validationRules[field](formData[field]);
      }
    });

    setErrors(newErrors);
    return !Object.values(newErrors).some(error => error);
  };

  return { formData, errors, isLoading, setIsLoading, handleChange, validateForm };
};

export default useForm;
