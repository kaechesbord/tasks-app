import React from 'react'
import { mockDataTime } from './Tab'
import './Filter.css'

const Filter = () => {
  return (
    <div className='contain'>
      <div className='places'>
       {mockDataTime.map((data) => {
        return <h1>{data.area}</h1>
       })}
      </div>
    </div>
  )
}

export default Filter
