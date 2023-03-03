import { Outlet } from 'react-router-dom';
import MainNavigation from '../Components/MainNavigation';

function RoutingLayout() {
  return ( <div className='body-container'>
  <MainNavigation />
  <main>
    <Outlet />
  </main>
  </div> );
}

export default RoutingLayout;