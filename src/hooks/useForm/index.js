import { useState } from "react";

const useForm = (initialState) => {
  const [value, setValue] = useState(initialState);
  const [formError, setFormError] = useState({});
  const [formSuccess, setFormSuccess] = useState({});

  const handleChange = (e, customInput) => {
    clearSuccess();
    if (customInput) {
      setValue((state) => ({ ...state, [e.name]: e.value }));
    } else {
      e.persist();
      setValue((state) => ({ ...state, [e.target.name]: e.target.value }));
    }
  };

  const handleError = (name, message) => {
    setFormError((state) => ({ ...state, [name]: message }));
  };

  const handleSuccess = (name, message) => {
    setFormSuccess((state) => ({ ...state, [name]: message }));
  };

  const clearInput = () => {
    setValue(initialState);
  };

  const clearError = () => {
    setFormError({});
  };

  const clearSuccess = () => {
    setFormSuccess({});
  };

  const bulkUpdate = (formFields) => {
    setValue(formFields);
  };

  return {
    value,
    handleChange,
    formError,
    handleError,
    formSuccess,
    bulkUpdate,
    handleSuccess,
    clearInput,
    clearError,
    clearSuccess,
  };
};

export default useForm;
