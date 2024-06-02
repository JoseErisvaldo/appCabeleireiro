import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import ArrowLeft from '../UI/Arrow/ArrowLeft';

function CompoMakeAppointments() {
  return (
    <div className="max-w-md mx-auto p-4 sm:p-6 md:p-8">
    <ArrowLeft to={'/'} />
      <div className="space-y-4">
        <div>
          <h2 className="text-2xl font-bold">Realizar Agendamentos</h2>
          <p className="text-gray-500 dark:text-gray-400">Preencha o formulário abaixo para agendar seu corte.</p>
        </div>
        <form className="space-y-4" id="appointmentForm">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nome</label>
              <input type="text" id="name" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" placeholder="Digite seu nome" />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Whatsapp</label>
              <input type="number" id="phone" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" placeholder="Digite seu whatsapp com DD" />
            </div>
          </div>
          <div classN
          ame="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="date" className="block text-sm font-medium text-gray-700">Data</label>
              <input type="date" id="date" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
            </div>
            <div>
              <label htmlFor="time" className="block text-sm font-medium text-gray-700">Hora</label>
              <select id="time" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                <option value="">Selecionar hora</option>
                <option value="9:00 AM">9:00 AM</option>
                <option value="10:00 AM">10:00 AM</option>
                <option value="11:00 AM">11:00 AM</option>
                <option value="12:00 PM">12:00 PM</option>
                <option value="1:00 PM">1:00 PM</option>
                <option value="2:00 PM">2:00 PM</option>
                <option value="3:00 PM">3:00 PM</option>
                <option value="4:00 PM">4:00 PM</option>
                <option value="5:00 PM">5:00 PM</option>
              </select>
            </div>
          </div>
          <button type="submit" className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Agendar
          </button>
        </form>
      </div>
    </div>
  );
}

export default CompoMakeAppointments;
