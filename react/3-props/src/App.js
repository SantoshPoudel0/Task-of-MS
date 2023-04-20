import logo from './logo.svg';
import './App.css';
import Alert from './component/Alert';
import Form from './component/Form';

function App() {
  return (
    <>
      {/*
     TODO
         show different alerts from following alert components
    */}
      <Alert />
      <Alert />
      <Alert />

      {/* 
        TODO:
        - create a login button of one color and signup button of another color
         - make use of props and component
         -
      */}

      <Form>
        <input placeholder='22' />
        <input placeholder='33' />
      </Form>

    </>
  );
}

export default App;
