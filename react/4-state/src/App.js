
function App() {

  /* 
    TODO: 
    in our browser, the count should be increased and decreased respecively.
      - make use of useState hook
  */

  console.log("render")
  let count = 0;

  function handleIncrement() {
    console.log("increment the counter")
  }

  return (
    <>
      <h1>count:{count}</h1>
      <button onClick={handleIncrement}>incrment</button>
      <button>decrement</button>
    </>
  )

}

export default App;
