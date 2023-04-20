import './App.css';
import DisplayProduct from './component/DisplayProduct';
import DisplayProductBrands from './component/DisplayProductBrands';
import DisplayProductByCategory from './component/DisplayProductByCategory';
import MultipleTodos from './component/MultipleTodos';
import NamesList from './component/NamesList';
import ProductDetail from './component/ProductDetail';
import SingleTodoDetail from './component/SingleTodoDetail';

function App() {
  return (
    <>

      <SingleTodoDetail />
      <hr />
      <ProductDetail />
      <hr />
      <NamesList />
      <hr />
      <MultipleTodos />
      <hr />
      <DisplayProduct />
      <hr />
      <DisplayProductByCategory />
      <hr />
      <DisplayProductBrands />
      <hr />

    </>
  );
}

export default App;
