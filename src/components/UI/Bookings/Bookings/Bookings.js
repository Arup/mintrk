import React from 'react';
import BookingForm from '../BookingForm/BookingForm';

function Bookings({ availableTimes, dispatch }) {
  return (
    <div className="bookings-container">
      <h2>Make a Booking</h2>
      <BookingForm
        availableTimes={availableTimes}
        dispatch={dispatch}
      />
    </div>
  );
}

export default Bookings;
