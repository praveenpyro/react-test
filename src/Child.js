import React from 'react';

const Child = ({increment, decrement}) => {

  return(
    <div>
      <button data-test-id="increment" onClick = {() => increment()} >increment</button>
      <button data-test-id="decrement" onClick = {() => decrement()}>decrement</button>
      </div>
  )
}

export default Child;