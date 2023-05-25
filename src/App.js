import React from 'react';
import Header from './components/Header';
import Tab from './components/Tab';
import './App.css';
import { DateTime } from 'luxon';
import Footer from './components/Footer';


export const mockData = [
  { date: 'Today',   when: DateTime.local().startOf('day').valueOf() },
  { date: 'Tomorrow', when: DateTime.local().plus({ days: 1 }).startOf('day').valueOf() },
  { date: 'September 22',when: DateTime.fromObject({ year: 2023, month: 9, day: 22 }).startOf('day')}
];

const App = () => {
  return (
    <div className="app-container">
      <div className="content-container">
        {mockData.map((data, index) => (
          <div key={index}>
            <Header date={data.date} amnt={data.amnt} />
            <Tab date={data.date} started={false} />
          </div>
        ))}
      </div>
      <div className='footer-container'> 
      <Footer />
      </div>
    </div>
  );
};

export default App;
