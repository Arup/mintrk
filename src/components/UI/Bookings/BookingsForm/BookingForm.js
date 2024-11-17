import React from 'react';
import './BookingForm.css';

function BookingForm({ availableTimes, dispatch }) {
  const handleDateChange = (e) => {
    // Dispatch an action to update available times when date changes
    dispatch({ type: 'UPDATE_TIMES', payload: e.target.value });
  };

  return (
    <form className="booking-form">
      <label htmlFor="date">Choose date</label>
      <input
        type="date"
        id="date"
        onChange={handleDateChange} // Handle date change
      />

      <label htmlFor="time">Choose time</label>
      <select id="time">
        {availableTimes.map((time, index) => (
          <option key={index} value={time}>{time}</option>
        ))}
      </select>

      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        id="guests"
        placeholder="1"
        min="1"
        max="10"
      />

      <label htmlFor="occasion">Occasion</label>
      <select id="occasion">
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>

      <input type="submit" value="Make Your Reservation" />
    </form>
  );
}

export default BookingForm;
