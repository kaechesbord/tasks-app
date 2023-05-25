import React, { useEffect, useState } from 'react';
import './Tab.css';
import { DateTime } from 'luxon';
import { v4 as uuidv4 } from 'uuid';
import { mockData } from '../App';

const createMockShift = (values) =>
  Object.assign(
    {
      id: uuidv4(),
      booked: false,
    },
    values
  );

const currentDate = DateTime.local().startOf('day');

const mockDataTime = [
  createMockShift({
    area: 'Helsinki',
    startTime: currentDate.set({ hour: 19 }).valueOf(),
    endTime: currentDate.set({ hour: 20 }).valueOf(),
  }),
  createMockShift({
    area: 'Helsinki',
    startTime: currentDate.set({ hour: 10 }).valueOf(),
    endTime: currentDate.set({ hour: 12 }).valueOf(),
  }),
  createMockShift({
    area: 'Helsinki',
    startTime: currentDate.set({ hour: 16 }).valueOf(),
    endTime: currentDate.set({ hour: 17, minutes: 30 }).valueOf(),
  }),
  createMockShift({
    area: 'Turku',
    startTime: currentDate.set({ hour: 16 }).valueOf(),
    endTime: currentDate.set({ hour: 21, minutes: 30 }).valueOf(),
  }),
  createMockShift({
    area: 'Turku',
    startTime: currentDate.set({ hour: 16 }).valueOf(),
    endTime: currentDate.set({ hour: 17, minutes: 30 }).valueOf(),
  }),
];

const Tab = ({ startTime, endTime, location, started }) => {
  const [isStarted, setStarted] = useState(false);
  const [today, setToday] = useState()

  const formattedStartTime = DateTime.fromMillis(startTime).toFormat('HH:mm');
  const formattedEndTime = DateTime.fromMillis(endTime).toFormat('HH:mm');

  useEffect(() => {
    const currentTime = DateTime.local().toMillis();
    const startTimestamp = startTime;
    const endTimestamp = endTime;
    mockData.forEach((data) => {
      if(currentDate.hasSame(data.when , 'day')) {
        setToday(true)
      }
    })
    if(today) {
      if (currentTime >= startTimestamp && currentTime <= endTimestamp) {
        setStarted(true);
      } else {
        setStarted(false);
      }
    }
  }, [startTime, endTime]);

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
      {mockDataTime.map((shift) => (
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

