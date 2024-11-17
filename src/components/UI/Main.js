/* global fetchAPI, submitAPI */
import React, { useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import BookingForm from './Bookings/BookingsForm/BookingForm';

const fallbackFetchAPI = (date) => {
  console.warn('fetchAPI is not available. Using fallback implementation.');
  return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
};

const fallbackSubmitAPI = (formData) => {
  console.warn('submitAPI is not available. Using fallback implementation.');
  return true;
};

const fetchAPI = typeof window.fetchAPI === 'undefined' ? fallbackFetchAPI : window.fetchAPI;
const submitAPI = typeof window.submitAPI === 'undefined' ? fallbackSubmitAPI : window.submitAPI;

function initializeTimes() {
  const today = new Date();
  return fetchAPI(today.toISOString().split('T')[0]) || [];
}

function updateTimes(state, action) {
  if (action.type === 'UPDATE_TIMES') {
    return fetchAPI(action.payload) || [];
  }
  return state;
}

function Main() {
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());
  const navigate = useNavigate();

  const submitForm = (formData) => {
    const isSubmitted = submitAPI(formData); // Assume submitAPI is correctly defined
    if (isSubmitted) {
      navigate('/booking-confirmed');
    } else {
      console.error('Form submission failed');
    }
  };

  return (
    <div className="main-container">
      <h1>Reservation System</h1>
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />
    </div>
  );
}

export default Main;