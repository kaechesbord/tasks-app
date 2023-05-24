import React, { useState } from 'react';
import './Tab.css';
import { DateTime } from 'luxon';
import { v4 as uuidv4 } from 'uuid';

const shiftTime = (dateObj, shiftDays = 0) =>
  DateTime.fromObject(dateObj).plus({ days: shiftDays }).valueOf();

const createMockShift = (values) =>
  Object.assign(
    {
      id: uuidv4(),
      booked: false,
    },
    values
  );

const mockData = [
  createMockShift({
    area: 'Helsinki',
    startTime: shiftTime({ hour: 12 }),
    endTime: shiftTime({ hour: 14 }),
  }),
  createMockShift({
    area: 'Helsinki',
    startTime: shiftTime({ hour: 10 }),
    endTime: shiftTime({ hour: 12 }),
  }),
  createMockShift({
    area: 'Helsinki',
    startTime: shiftTime({ hour: 16 }),
    endTime: shiftTime({ hour: 17, minutes: 30 }),
  }),
  createMockShift({
    area: 'Turku',
    startTime: shiftTime({ hour: 16 }),
    endTime: shiftTime({ hour: 17, minutes: 30 }),
  }),
];

const Tab = ({ startTime, endTime, location, started }) => {
  const [isStarted, setStarted] = useState(started);

  const formattedStartTime = DateTime.fromMillis(startTime).toFormat('HH:mm');
  const formattedEndTime = DateTime.fromMillis(endTime).toFormat('HH:mm');

  return (
    <div>
      <div className='tab'>
        <div className='text'>
          <h2 className='time'>{formattedStartTime} - {formattedEndTime}</h2>
          <h4 className='location'>{location}</h4>
        </div>
        <div className='btn'>
          <button className={isStarted ? 'btn-started' : 'btn-notStarted'}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

const TabContainer = () => {
  return (
    <div>
      {mockData.map((shift) => (
        <Tab
          key={shift.id}
          startTime={shift.startTime}
          endTime={shift.endTime}
          location={shift.area}
          started={shift.booked}
        />
      ))}
    </div>
  );
};

export default TabContainer;
