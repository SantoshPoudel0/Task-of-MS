import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

function App() {
  let initialState = true;
  const [login_status, setLoginStatus] = useState(initialState);
  const [start_infinte_rendering, setStartInfiniteRendering] = useState(false);
  const [count, setCount] = useState(5);


  useEffect(() => {
    /* 
      unline setTimeout, setIterval will run every given <miliseconds>
    */

    setInterval(() => {
      setCount((prev) => prev - 1)
    }, 1000)

  }, []);


  useEffect(() => {

    if (count == 0) {
      setStartInfiniteRendering(true)
    }

  }, [count])


  console.log("render.")
  /* 
  TODO:prevent infinite re-rendering  of our component
    
      when does our App Component render ?
        - it renders for the first time when our component gets loaded/displayed  in the browser
        - another time it renders is only if the state or props of our component gets changed.
            here our states are login_status, start_infinte_rendering & count
            if any one of the state gets changed, our component will render, i.e, our JSX elements will be recreated.

  */

  return (
    <>
      <p>check browser console</p>
      <h1>will crash in {count}s</h1>

      {
        start_infinte_rendering
        &&
        <button onClick={setLoginStatus(!login_status)}></button> /* HINT: problem is in this line */
      }
    </>
  );
}

export default App;
