import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Header from './Components/Header/Header'
import MakeAppointments from './Pages/MakeAppointments/MakeAppointments';

export default function AppRoutes() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/realizaragendamentos" element={<MakeAppointments />} />
      </Routes>
    </BrowserRouter>
  );
}
