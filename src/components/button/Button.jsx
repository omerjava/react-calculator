import React from 'react'
import "./Button.css";

function Button({btnClass, value, event}) {
  return (
    <div className='btn'>
        <input type="button" className={btnClass} value={value} onClick={event}/>
    </div>
  )
}

export default Button