import React, { useState } from 'react';
import ArrowLeft from '../UI/Arrow/ArrowLeft'

const allTimeSlots = [
  '8:00 AM', '8:30 AM', '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM',
  '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM',
  '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM',
  '5:00 PM', '5:30 PM', '6:00 PM'
];

const appointmentsData = [
  { id: 1, date: '2024-06-04', time: '9:00 AM', name: 'Zezin' },
  { id: 2, date: '2024-06-03', time: '10:00 AM', name: 'Thor' },
  { id: 3, date: '2024-06-03', time: '11:00 AM', name: 'José Erisvaldo' },
  { id: 4, date: '2024-06-03', time: '12:00 PM', name: 'Davi Santos' },
  { id: 5, date: '2024-06-03', time: '1:00 PM', name: 'Lucia' },
  { id: 8, date: '2024-06-03', time: '4:00 PM', name: 'Telma' }
];

function generateSchedule(date) {
  return allTimeSlots.map(time => {
    const appointment = appointmentsData.find(app => app.date === date && app.time === time);
    return {
      date,
      time,
      booked: !!appointment,
      name: appointment ? appointment.name : null,
    };
  });
}

export default function CompoConsultHaircutAppointments() {
  const [selectedDate, setSelectedDate] = useState('2024-06-03');
  const schedule = generateSchedule(selectedDate);

  return (
    <div className="max-w-2xl mx-auto p-4 sm:p-6 lg:p-8">
        <ArrowLeft to={'/'} />
      <h2 className="text-2xl font-bold mb-4">Consultar Agendamentos</h2>
      <div className="flex items-center mb-6">
        <span className="mr-2">Filtro: </span>
        <div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Data</label>
            <input 
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
        </div>
      </div>
      <div className="bg-white shadow overflow-hidden sm:rounded-lg mb-6">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">{new Date(selectedDate).toLocaleDateString()}</h3>
        </div>
        <ul className="divide-y divide-gray-200">
          {schedule.map((slot, index) => (
            <li key={index} className="px-4 py-4 sm:px-6 flex justify-between items-center">
              <div>
                <p className={`text-sm font-medium ${slot.booked ? 'text-indigo-600' : 'text-gray-500'}`}>
                  {slot.time}
                </p>
              </div>
              <div className={`text-sm ${slot.booked ? 'text-red-600' : 'text-green-600'}`}>
                {slot.booked ? `Reservado por ${slot.name}` : 'Disponível'}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
