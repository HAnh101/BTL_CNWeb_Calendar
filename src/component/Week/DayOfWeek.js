import React, { useEffect, useState, useContext } from 'react'
import dayjs from 'dayjs';
import GlobalContext from '../../context/Week/GlobalContext2';

export default function Day({ day, rowIdx }) {
  const [dayEvents, setDayEvents] = useState([]);
  const {setDaySelected, setShowEventModal, filteredEvents, setSelectedEvent,} = useContext(GlobalContext);

  useEffect(()=> {
    const events = filteredEvents.filter(
      (evt) =>
        dayjs(evt.day).format("DD-MM-YY") === day.format("DD-MM-YY")
    );
    setDayEvents(events);
  }, [filteredEvents, day]);

  function getCurrentDayClass() {
    return day.format("DD-MM-YY") === dayjs().format("DD-MM-YY")
      ? "bg-blue text-white rounded-full"
      : "";
  }
  
  return (
    <div className="border flex flex-col">
      <header className="flex flex-col items-center border-bottom">
        {rowIdx === 0 && (
          <p className={`'text-center' ${getCurrentDayClass()}`} >{day.format('ddd, MMM DD ').toUpperCase()} </p>
          )}
      </header>
      <div 
        className='flex-1 cursor-pointer'
        onClick={() => {
          setDaySelected(day);
          setShowEventModal(true);
        }}
      >
        {dayEvents.map((evt,idx) => (
          <div
            key={idx}
            onClick={() => setSelectedEvent(evt)}
            className={`bg-${evt.label} `}
          >
          {evt.title}
          </div>
        ))}
      </div>
    </div>
  );
}
