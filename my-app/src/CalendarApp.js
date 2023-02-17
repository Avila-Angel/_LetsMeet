import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function CalendarApp() {
  const [date, setDate] = useState(new Date());
    return (
      <div className='app'>
        <h1 className='title-center'>Schedule</h1>
        <div className='calendar-container'>
          <Calendar
            onChange={setDate}
            value={date}
            selectRange={true}
          />
        </div>
        {date.length > 0 ? (
          <p className='text-center'>
            <span className='bold'>Start:</span>{' '}
            {date[0].toDateString()}
            &nbsp;|&nbsp;
            <span className='bold'>End:</span> {date[1].toDateString()}
          </p>
        ) : (
          <p className='text-center'>
            <br></br>
            <span className='bold'>Today's date:</span>{' '}
            {date.toDateString()}<br></br>
            {`Events today - Meeting @ 10pm`}
          </p>
        )}
      </div>
    );
  }

export default CalendarApp;