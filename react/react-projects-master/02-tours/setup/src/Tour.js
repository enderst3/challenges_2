import React, { useState } from 'react';

const Tour = ({id, image, info, price, name, removeTour}) => {
  // toggle text
  const [readMore, setReadMore] = useState(false)
  return (
    <article className='single-tour'>
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className='tour-price'>${price}</h4>
        </div>
        <p>{
          // if readMore is false then only show 200 chars.  If true display all.
          readMore ? info: `${info.substring(0, 200)}...`
          }
          {/* button to toggle between read more or read less.  using inline function to set state or
          readMore opposite of current state. */}
          <button onClick={()=> setReadMore(!readMore)}>
            {readMore ? 'Show Less' : 'Read More'}
          </button>
          </p>
        <button
          className='delete-btn'
          onClick={()=>removeTour(id)}
        >
          Not interested
        </button>
      </footer>
    </article>
  )
};

export default Tour;
