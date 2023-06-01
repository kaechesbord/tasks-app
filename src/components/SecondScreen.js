import React from 'react'
import Footer from './Footer'
import Filter from './Filter'
import Header from './Header'
import { mockData } from '../App'

const SecondScreen = () => {
  const shouldShowElement = false;
  return (
    <div>
      <Filter/>
      <Footer/>
      {mockData.map((data, index) => <Header key={index} date={data.date} showElement={shouldShowElement} />)}
    </div>
  )
}

export default SecondScreen
