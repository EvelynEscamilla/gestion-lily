import React, { useState } from 'react'

const useForm = () => {

    const [formData, setFormData] = useState(null)

    const handleFormDataChange = ({ target: { name, value } }) => {
        setFormData({ ...formData, [name]: value })
        console.log(formData)
    }

    return {handleFormDataChange, formData}

}

export default useForm