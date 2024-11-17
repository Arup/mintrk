import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from './components/UI/Main';
import ConfirmedBooking from './components/ConfirmedBooking';

function App() {
  return (
    <div>
      <Routes>
        {/* Define routes */}
        <Route path="/" element={<Main />} />
        <Route path="/booking-confirmed" element={<ConfirmedBooking />} />
      </Routes>
    </div>
  );
}

export default App;