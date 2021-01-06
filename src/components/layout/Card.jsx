import React from 'react';
import './Card.css'

export default (props) => {
  const cardStyle = {
    backgroundColor: props.color,
    borderColor: props.color,
  }

  return(
    <div className="Card">
      <div className="Title" style={cardStyle}>
        {props.title}
      </div>
      <div className="Content">
        {props.children}
      </div>
    </div>
  )
}