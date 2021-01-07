import React from 'react';
import IndirectChild from './IndirectChild';

export default (props) => {
  let name = '';
  let age = 0;
  let married = false;

  function childInfo(name, age, married) {
    console.log(name);
    name = this.name;
    age = this.age;
    married = this.married;
  }
  return (
    <div>
      <h2>Pai</h2>
      <span>{name}</span>
      <span>{age}</span>
      <span>{married ? 'Casado(a)' : 'Solteiro(a)'}</span>
      <IndirectChild showInfo={childInfo} />
    </div>
  )
}