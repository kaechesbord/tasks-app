import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Tab from './components/Tab';
import './App.css';
import { DateTime } from 'luxon';
import Footer from './components/Footer';
import TabContainer, { mockDataTime } from './components/Tab';
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

const App = () => {
  const [tabs, setTabs] = useState(mockDataTime);

  const handleTabCancel = (id) => {
    const updatedTabs = tabs.filter(tab => tab.id !== id);
    setTabs(updatedTabs);
  };

  useEffect(() => {
    const totalDuration = calculateTimeDuration(tabs);
    const updatedMockData = mockData1.map((data) => ({
      ...data,
      time: totalDuration,
    }));
    setMockData1(updatedMockData);
  }, [tabs]);

  const [mockData1, setMockData1] = useState(mockData)

  return (
    <div className="app-container">
      <div className="content-container">
        {mockData1.map((data, index) => (
          <div key={index}>
            <Header
              date={data.date}
              shifts={tabs.length}
              time={data.time}
              showElement={true}
            />
            <TabContainer
              tabs={tabs}
              onTabCancel={handleTabCancel}
            />
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