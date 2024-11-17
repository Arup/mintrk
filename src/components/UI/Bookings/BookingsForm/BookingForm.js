import React from 'react';
import './BookingForm.css'; // Import the CSS for BookingForm

function BookingForm({ formData, handleChange, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit} className="booking-form">
      <label htmlFor="date">Choose date</label>
      <input
        type="date"
        id="date"
        value={formData.date}
        onChange={handleChange}
      />

      <label htmlFor="time">Choose time</label>
      <select id="time" value={formData.time} onChange={handleChange}>
        <option value="17:00">17:00</option>
        <option value="18:00">18:00</option>
        <option value="19:00">19:00</option>
        <option value="20:00">20:00</option>
        <option value="21:00">21:00</option>
        <option value="22:00">22:00</option>
      </select>

      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        id="guests"
        placeholder="1"
        min="1"
        max="10"
        value={formData.guests}
        onChange={handleChange}
      />

      <label htmlFor="occasion">Occasion</label>
      <select id="occasion" value={formData.occasion} onChange={handleChange}>
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>

      <input type="submit" value="Make Your Reservation" />
    </form>
  );
}

export default BookingForm;
