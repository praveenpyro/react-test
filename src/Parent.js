import React ,{useState, useEffect} from 'react';
import Child from './Child'
const Parent = () =>  {

  
  const [counter, setCounter] = useState(0);
  const increment = () =>{
    setCounter(counter+1);
  }
  const decrement = () => {
    setCounter(counter-1);
  }

  
  return(
    <div className="container">
      Counter : {counter}
      <Child increment={increment} decrement={decrement}/>
      </div>
  )

 
}

export default Parent;