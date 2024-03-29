import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0)
  useEffect(() => {
    console.log('call useEffect')
    if (value >= 1) {
      document.title = `New Messages(${value})`
    }
    // The second parameter as an empty list means useEffect will only run on startup.
    // add a value to make it run each time the value changes
    }, [value])
  console.log('render component')

  const buttonClick = () => {
    setValue(value + 1)
  }
  return (
    <>
      <h1>{value}</h1>
      <button
        className='btn'
        onClick = {buttonClick}
      >
        Click Me!
      </button>
    </>
  )
};

export default UseEffectBasics;
