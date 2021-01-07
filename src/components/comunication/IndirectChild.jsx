import React from 'react';

export default (props) => {
  return (
    <div>
      <button onClick={() => props.showInfo('Joao', 18, true)}>Mostrar Info</button>
    </div>
  )
}