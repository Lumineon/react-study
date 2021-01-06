import React from 'react';

export default function Randomize(props) {
  const { min, max } = props;
  const num = parseInt(Math.random() * (max - min) + min);
  return (
    <>
      <h2>Número aleatório</h2>
      <h3>{num}</h3>
    </>
  )
}