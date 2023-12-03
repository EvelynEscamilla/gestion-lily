import React, { useEffect, useState } from 'react'

const useForm = (data = null) => {

    const [formData, setFormData] = useState(null)

    useEffect(() => {
        setFormData(data)
    }, [])


    const handleFormDataChange = ({ target: { name, value } }) => {
        setFormData({ ...formData, [name]: value })
        console.log(formData)
    }

    const handleDateChange = (date) => {
        setFormData({ ...formData, fecha: date })
        console.log(formData)
    }

    const handleFormFileChange = ({ target: { name, files } }) => {
        setFormData({ ...formData, [name]: files[0] })
        console.log(formData)
    }


    const resetForm = () => setFormData(null)

    return { handleFormDataChange, formData, handleFormFileChange, resetForm, handleDateChange }

}

export default useForm