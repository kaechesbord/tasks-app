import React from 'react';
import Header from './components/Header';
import Tab from './components/Tab';
import './App.css';
import { DateTime } from 'luxon';
import Footer from './components/Footer';
import { mockDataTime } from './components/Tab';
import { calculateTimeDuration } from './components/Tab';

const totalDuration = calculateTimeDuration();

export const mockData = [
  {
    date: 'Today',
    when: DateTime.local().startOf('day'),
    time: totalDuration,
  },
  {
    date: 'Tomorrow',
    when: DateTime.local().plus({ days: 1 }).startOf('day'),
    time: totalDuration,
  },
  {
    date: 'September 22',
    when: DateTime.fromObject({ year: 2023, month: 9, day: 22 }).startOf('day'),
    time: totalDuration,
  },
];


const show = true
const shifts = mockDataTime.length;
const App = () => {
  return (
    <div className="app-container">
      <div className="content-container">
        {mockData.map((data, index) => (
          <div key={index}>
            <Header date={data.date} shifts={shifts} time={data.time} showElement={show} />
            <Tab date={data.date} started={false} />
          </div>
        ))}
      </div>
      <div className="footer-container">
        <Footer />
      </div>
    </div>
  );
};

export default App;
