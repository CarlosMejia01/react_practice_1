import { useState } from "react";

export const CounterApp = ({value}) => {
  const [counter, setCounter] = useState(value);

  const counterIncrement = () => setCounter(c => c + 1);


  return <>
    <h2>The counter value is {counter}</h2>
    <button onClick={counterIncrement} >Increment counter +1</button>
  </>
}