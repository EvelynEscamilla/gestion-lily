
import React, { useState } from "react";
import moment from "moment/moment";
const useForm = () => {
  const [formData, setFormData] = useState([]);

  const handleFormPrecioDataChange = ({ target: { name, value, dataset } }) => {
    setFormData({ ...formData, [name]: value, precio: dataset.precio });
    
  };

  const formCliente = ({ userData }) => {
    
    setFormData({ ...formData, Cliente: userData.nombreCompleto, Contacto: userData.telefono, Correo: userData.email });
  };
  const setInitialState = (initialState)=>setFormData(initialState)

  const handleFormDataChange = ({ target: { name, value } }) => {
    setFormData({ ...formData, [name]: value });
    
  };
  const handleDateChange = (date) => {
    setFormData({ ...formData, fecha: date });
    
  };
  const handleTimeChange = (date) => {
    const hora24 = moment(date, "hh:mm A").format("HH:mm");
    if (formData.fecha !== null) {
      const fechaHora = moment(
        `${moment(formData.fecha).format("YYYY-MM-DD")} ${hora24}`,
        "YYYY-MM-DD HH:mm"
      );

      setFormData({ ...formData, fecha: fechaHora.toDate() });
    } else {
    }
    
  };

  const handleFormFileChange = ({ target: { name, files } }) => {
    setFormData({ ...formData, [name]: files[0] });
    
  };

  const resetForm = () => setFormData(null);

  return {
    handleFormDataChange,
    formData,
    handleFormFileChange,
    resetForm,
    handleDateChange,
    handleTimeChange,
    handleFormPrecioDataChange,
    formCliente,
    setInitialState
  };
};

export default useForm;

