import React,{useState} from 'react'

const FormularioCalendario = (props) => {

  
  return (
    <div className = "Form"  id = "form">
            {props.children}
    </div>
  )
}

export default FormularioCalendario