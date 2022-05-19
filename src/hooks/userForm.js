import { useState } from 'react';

export function userForm(inputs = {}) {
  const [formState, setFormState] = useState(inputs);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    setFormState((prevState) => {
      return {
        ...prevState,
        [name]: type === 'checkbox' ? checked : value
      };
    });
  };

  return { formState, handleChange };
}
