import React from 'react'
import './toggle.css'

function Toggle() {
  return (
    <div className='t'>
    <img src={require('../../image/sun.png')} alt='' className='t-icon' />
    <img src={require('../../image/moon.png')} alt='' className='t-icon' />
    <div className="t-button"></div>
    </div>
  )
}

export default Toggle