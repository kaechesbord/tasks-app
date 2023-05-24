import React from 'react';
import Header from './components/Header';
import Tab from './components/Tab';
import './App.css';
import Footer from './components/Footer';

const mockData = [
  { date: 'Today', amnt: '5 shifts 9h' },
  { date: 'Tomorrow', amnt: '5 shifts 9h' },
  { date: 'September 22', amnt: '5 shifts 9h' }
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
      <Footer />
    </div>
  );
};

export default App;
