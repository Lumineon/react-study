import React from 'react';
import Children from './DirectChild'

export default (props) => {
  return (
    <>
      <Children name="John" age="26" married={true} />
      <Children name="Joann" age="29" married={true} />
      <Children name="Cinthia" age="21" married={false} />
    </>
  )
}