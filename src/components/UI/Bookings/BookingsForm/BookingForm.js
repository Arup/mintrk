import React, { useState } from 'react';

function BookingForm({ availableTimes, dispatch, submitForm }) {
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    guests: 1,
    occasion: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value
    }));

    if (id === 'date') {
      dispatch({ type: 'UPDATE_TIMES', payload: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitForm(formData); // Call the submitForm function from props
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'grid', maxWidth: '200px', gap: '20px' }}>
      <label htmlFor="date">Choose date</label>
      <input type="date" id="date" value={formData.date} onChange={handleChange} required />

      <label htmlFor="time">Choose time</label>
      <select id="time" value={formData.time} onChange={handleChange} required>
        {availableTimes.map((time) => (
          <option key={time}>{time}</option>
        ))}
      </select>

      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        id="guests"
        min="1"
        max="10"
        value={formData.guests}
        onChange={handleChange}
        required
      />

      <label htmlFor="occasion">Occasion</label>
      <select id="occasion" value={formData.occasion} onChange={handleChange} required>
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>

      <button type="submit">Make Your Reservation</button>
    </form>
  );
}

export default BookingForm;
