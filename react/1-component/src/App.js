import logo from './logo.svg';
import './App.css';
import Login from './page/Login';
import Alert from './component/Alert';

function App() {
  return (
    <>
      <Alert />
      <Alert />
      <Alert />
      {/* 
        alert is a component and can be used many times
       */}
      <Login />
    </>
  );
}

export default App;
