import React from 'react';

export default function Parametrizado(props) {
  return (
    <div>
      <h2>Props</h2>
      <h3> {props.title} </h3>
      <h4> {props.subtitle} </h4>
    </div>
  )
}