import React from "react";
import { useState } from "react";


const Pruebas = () => {
  const [appointments, setAppointments] = useState([]);
  const [newAppointment, setNewAppointment] = useState({
    startTime: '',
    duration: 0,
  });

  const handleStartTimeChange = (e) => {
    setNewAppointment({
      ...newAppointment,
      startTime: e.target.value,
    });
  };

  const handleDurationChange = (e) => {
    setNewAppointment({
      ...newAppointment,
      duration: parseInt(e.target.value, 10),
    });
  };

  const handleAddAppointment = () => {
    // Verificar si la nueva cita se sobrepone con las citas existentes
    const newAppointmentStartTime = new Date(newAppointment.startTime);
    const newAppointmentEndTime = new Date(
      newAppointmentStartTime.getTime() + newAppointment.duration * 60000
    );
console.log(newAppointmentStartTime)
console.log(newAppointmentEndTime)
    const isOverlapping = appointments.some((appointment) => {
      const appointmentStartTime = new Date(appointment.startTime);
      const appointmentEndTime = new Date(
        appointmentStartTime.getTime() + appointment.duration * 60000
      );

      return (
        (newAppointmentStartTime >= appointmentStartTime &&
          newAppointmentStartTime < appointmentEndTime) ||
        (newAppointmentEndTime > appointmentStartTime &&
          newAppointmentEndTime <= appointmentEndTime) ||
        (newAppointmentStartTime <= appointmentStartTime &&
          newAppointmentEndTime >= appointmentEndTime)
      );
    });

    // Si no hay superposición, agregar la nueva cita
    if (!isOverlapping) {
      setAppointments([...appointments, newAppointment]);
      setNewAppointment({
        startTime: '',
        duration: 0,
      });
    } else {
      alert('La nueva cita se superpone con una cita existente. Por favor, elija otro horario.');
    }
  };

  return (
    <div>
      <h1>Appointment Scheduler</h1>
      <div>
        <label htmlFor="startTime">Hora de inicio:</label>
        <input
          type="datetime-local"
          id="startTime"
          value={newAppointment.startTime}
          onChange={handleStartTimeChange}
        />
      </div>
      <div>
        <label htmlFor="duration">Duración (minutos):</label>
        <input
          type="number"
          id="duration"
          value={newAppointment.duration}
          onChange={handleDurationChange}
        />
      </div>
      <button onClick={handleAddAppointment}>Agregar Cita</button>

      <div>
        <h2>Citas Programadas</h2>
        <ul>
          {appointments.map((appointment, index) => (
            <li key={index}>
              {`Hora de inicio: ${appointment.startTime}, Duración: ${appointment.duration} minutos`}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Pruebas;
