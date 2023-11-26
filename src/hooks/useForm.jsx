import React, { useState } from 'react'

const useForm = () => {

    const [formData, setFormData] = useState(null)

    const handleFormDataChange = ({ target: { name, value } }) => {
        setFormData({ ...formData, [name]: value })
        console.log(formData)
    }

    const handleFormFileChange = ({ target: { name, files } }) => {
        setFormData({ ...formData, [name]: files[0] })
        console.log(formData)
    }

    const resetForm = () => setFormData(null)

    return { handleFormDataChange, formData, handleFormFileChange, resetForm }

}

export default useForm