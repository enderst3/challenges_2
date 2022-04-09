import React, { useState } from 'react';

const UseStateBasics = () => {

  // const value = useState(1)[0]
  // const handler = useState(1)[1]
  // console.log(value, handler)

  // its convention to ues set then the variable
  const [text, setText] = useState('random title')

  // handle click then use logic to toggle back and forth between text on clicks
  const handleClick = () => {
    if (text === 'random title') {
      setText("Hello World")
    } else {
      setText('random title')
    }
  }

  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button
        className='btn'
        onClick={handleClick}
      >
        Change the Title!
      </button>
    </React.Fragment>
  )
};

export default UseStateBasics;
