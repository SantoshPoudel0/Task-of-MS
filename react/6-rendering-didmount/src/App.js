import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [count, setCount] = useState(0);

  setCount(count + 1)

  /* 
   TODO: change count to 1 &  prevent infinite re-rendering  of our component
     
       when does our App Component render ?
         - it renders for the first time when our component gets loaded/displayed  in the browser
         - another time it renders is only if the state or props of our component gets changed.
             here count is a state
             if it  gets changed( here setCount is changing it ), our component will render and code will run from line 6
             and again at line 9 , setCount gets called , cause the re-render from line 6  and again at line 9, state
             gets changed cause re-render again and again.  
 
   */


  /* 
    here, we need to change our count state only once, for that we have life cycle methods..
      - componentDidMount // a function that gets called when our component renders() for the very first time
        and it gets called only once.

      - componentDidUpdate // a function that gets called when state or props of a component changes.

  */

  /*
    Hint 
    we need to call our setCount function inside componentDidMount and change our state only one. 
    BUT we dont have componentDidMount methods in react functional component and only class component.

    we can simulate react lifecycle methods using useEffect Hook. 

    => use useEffect Hook. 

   */

  console.log("render")
  return (
    <div>
      <p>count {count}</p>
    </div>
  );
}

export default App;
