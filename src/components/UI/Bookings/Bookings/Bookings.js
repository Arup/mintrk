import React, { useState } from 'react';
import BookingForm from '../BookingsForm/BookingForm';
import './Bookings.css'; // Import the CSS for Bookings

function Bookings() {
  // State to hold form data
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    guests: 1,
    occasion: ''
  });

  // Handle change in input fields
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
  };

  return (
    <div className="bookings-container">
      <h2>Book Your Reservation</h2>
      <BookingForm
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

export default Bookings;
