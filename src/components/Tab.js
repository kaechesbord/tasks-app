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

export const mockDataTime = [
  createMockShift({
    area: 'Helsinki',
    startTime: currentDate.set({ hour: 19 }).valueOf(),
    endTime: currentDate.set({ hour: 20 }).valueOf(),
  }),
  createMockShift({
    area: 'Turbe',
    startTime: currentDate.set({ hour: 10 }).valueOf(),
    endTime: currentDate.set({ hour: 12 }).valueOf(),
  }),
  createMockShift({
    area: 'Stockholm',
    startTime: currentDate.set({ hour: 13 }).valueOf(),
    endTime: currentDate.set({ hour: 14, minutes: 30 }).valueOf(),
  }),
  createMockShift({
    area: 'Turku',
    startTime: currentDate.set({ hour: 16 }).valueOf(),
    endTime: currentDate.set({ hour: 17, minutes: 30 }).valueOf(),
  }),
  createMockShift({
    area: 'Antananarivo',
    startTime: currentDate.set({ hour: 20 }).valueOf(),
    endTime: currentDate.set({ hour: 23, minutes: 30 }).valueOf(),
  }),
];

export function calculateTimeDuration() {
  let totalDuration = 0;

  mockDataTime.forEach((item) => {
    const duration = item.endTime - item.startTime;
    totalDuration += duration;
  });

  return Math.round((totalDuration / 3600000) * 10) / 10;;
}

const Tab = ({ startTime, endTime, location }) => {
  const [isStarted, setStarted] = useState(false);
  const [today, setToday] = useState()

  const formattedStartTime = DateTime.fromMillis(startTime).toFormat('HH:mm');
  const formattedEndTime = DateTime.fromMillis(endTime).toFormat('HH:mm');
  useEffect(() => {
    const currentTime = DateTime.local().toMillis();
    location = currentTime
    const startTimestamp = startTime;
    const endTimestamp = endTime;
    mockData.forEach((data) => {
      if(currentDate.hasSame(data.when, 'day')) {
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
  }, [startTime, endTime, location]);

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

