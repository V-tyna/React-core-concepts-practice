import { useEffect, useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

import classes from './AppLayout.module.css';

function AppLayout() {
  const [isHomePage, setIsHomePage] = useState(true);
  const location = useLocation();
  
  useEffect(() => {
    if (location.pathname === '/') {
      setIsHomePage(true);
    } else {
      setIsHomePage(false);
    }
  }, [location]);

	return (
		<>
			<Outlet />
			{!isHomePage && (
				<Link to='/' className={classes['home-page-link']}>
					Back to home page
				</Link>
			)}
		</>
	);
}

export default AppLayout;
