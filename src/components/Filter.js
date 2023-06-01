import React from 'react'
import { mockDataTime } from './Tab'
import './Filter.css'

const Filter = () => {
  return (
    <div className='contain'>
      <div className='places'>
       {mockDataTime.map((data, id) => {
        return <h1 key={id}>{`${data.area} (${mockDataTime.length})`}</h1>
       })}
      </div>
    </div>
  )
}

export default Filter
