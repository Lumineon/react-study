import React from 'react';

export default props => {
  const isEven = props.num % 2 === 0;
  return (
    <div>
      { isEven ? 
        <span>Par</span> :
        <span>ímpar</span>
      }
    </div>
  )
}