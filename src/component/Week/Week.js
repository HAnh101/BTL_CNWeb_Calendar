import React from 'react'
import Day from './DayOfWeek'

export default function Week({week}) {
  return (
    <div className='flex-1 grid grid-cols-7'>
      {week.map((row, i) => (
        <React.Fragment key = {i}>
            {row.map((day, idx) => (
                <Day day={day} key={idx} rowIdx={i}/>
            ))}
        </React.Fragment>
      ))}
    </div>
  );
}
