import React, { useState } from "react";
import moment from "moment/moment";
const useForm = () => {
  const [formData, setFormData] = useState([]);

  const handleFormPrecioDataChange = ({ target: { name, value, dataset } }) => {
    setFormData({ ...formData, [name]: value, precio: dataset.precio });
    console.log(formData);
  };

  const formCliente = ({ userData }) => {
    
    setFormData({ ...formData, Cliente: userData.nombreCompleto, Contacto: userData.telefono, Correo: userData.email });
  };

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
    if (formData.fecha !== null) {
      const fechaHora = moment(
        `${moment(formData.fecha).format("YYYY-MM-DD")} ${hora24}`,
        "YYYY-MM-DD HH:mm"
      );

      setFormData({ ...formData, fecha: fechaHora.toDate() });
    } else {
      console.log("todavia no existe una fecha");
    }
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
    handleFormPrecioDataChange,
    formCliente
  };
};

export default useForm;
