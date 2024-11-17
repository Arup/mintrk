import React, { useReducer } from 'react';
import BookingForm from './Bookings/BookingsForm/BookingForm';

function initializeTimes() {
  // Initialize available times 
  return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
}

function updateTimes(state, action) {
  // Update available times based on selected date
  // For now, we return the same state
  switch (action.type) {
    case 'UPDATE_TIMES':
      // filter or modify times based on action.payload (selected date)
      return state;
    default:
      return state;
  }
}

function Main() {
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

  return (
    <div>
      <h1>Reservation System</h1>
      <BookingForm
        availableTimes={availableTimes}
        dispatch={dispatch}
      />
    </div>
  );
}

export default Main;
