import React from 'react';

export default props => {
  const user = props.user || {};
  return (
    <div>
      <span>Seja bem vindo</span> {user.name}
    </div>
  )
}