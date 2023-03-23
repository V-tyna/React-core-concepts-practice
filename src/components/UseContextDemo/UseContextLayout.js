import { Outlet } from 'react-router-dom';
import Navigation from './components/Nav/Navigation';
import ProductsContextProvider from './context/products-context';

const UseContextLayout = props => {
  return (
    <ProductsContextProvider>
      <Navigation />
      <Outlet />
    </ProductsContextProvider>
  );
};

export default UseContextLayout;
