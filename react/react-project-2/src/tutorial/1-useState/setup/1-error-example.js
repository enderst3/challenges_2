import React from 'react';

const ErrorExample = () => {

  let title = 'radom title'

  const handleClick = () => {
    title = "Hello World"
    console.log(title)
  }
  return (
    <React.Fragment>
      <h2>{title}</h2>
      <button
        type = 'button'
        className = 'btn'
        onClick = {handleClick}
      >
        Change Title
      </button>
    </React.Fragment>
  )
};

export default ErrorExample;
