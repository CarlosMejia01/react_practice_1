export const CounterApp = () => {
  let counter = 0;
  const counterIncrement = () => {
    counter++;
    console.log('click!' + counter);
  }
  return <>
    <h2>The counter value is { counter }</h2>
    <button onClick={() => { counterIncrement() }} >Increment counter +1</button>
  </>
}