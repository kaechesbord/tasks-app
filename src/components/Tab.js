import React, {useState} from 'react'
import './Tab.css'

const Tab = (props) => {
    const [started, setStarted] = useState(props.started)
  return (
    <div>
      <div className='tab'>
        <div className='text'>
        <h2 className='date'>{props.date}</h2>
        <h4 className='location'>{props.location}</h4>
        </div>
        <div className='btn'>
            <button className={started ? 'btn-started': 'btn-notStarted'}>Cancel</button>
        </div>
      </div>
    </div>
  )
}

export default Tab
