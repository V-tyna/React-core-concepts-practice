import { Outlet } from 'react-router-dom';
import Navigation from './components/Nav/Navigation';
import configureProductsStore from './hook-store/products-store';

configureProductsStore();

const UseContextLayout = props => {
  return (
    <>
      <Navigation />
      <Outlet />
    </>
  );
};

export default UseContextLayout;
