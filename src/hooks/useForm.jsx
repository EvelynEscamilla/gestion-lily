import React, { useState } from "react";
import moment from "moment/moment";
const useForm = () => {
  const [formData, setFormData] = useState(null);

  const handleFormDataChange = ({ target: { name, value } }) => {
    setFormData({ ...formData, [name]: value });
    console.log(formData);
  };

  const handleDateChange = (date) => {
    setFormData({ ...formData, fecha: date });
    console.log(formData);
  };
  const handleTimeChange = (date) => {
    const hora24 = moment(date, "hh:mm A").format("HH:mm");
    setFormData({ ...formData, hora: hora24 });
    console.log(formData);
  };

  const handleFormFileChange = ({ target: { name, files } }) => {
    setFormData({ ...formData, [name]: files[0] });
    console.log(formData);
  };

  const resetForm = () => setFormData(null);

  return {
    handleFormDataChange,
    formData,
    handleFormFileChange,
    resetForm,
    handleDateChange,
    handleTimeChange,
  };
};

export default useForm;
