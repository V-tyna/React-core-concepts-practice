import { createContext, useEffect, useState } from 'react';

const AuthContext = createContext({
  isLoggedIn: false,
  onLogout: () => {},
  onLogin: (email, password) => {},
});

export function AuthContextProvider({children}) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

	useEffect(() => {
		const storedUserLoggedIn = localStorage.getItem('isLoggedIn');
		if (storedUserLoggedIn === 'true') {
			setIsLoggedIn(true);
		}
	}, []);

	const loginHandler = (email, password) => {
		localStorage.setItem('isLoggedIn', 'true');

		setIsLoggedIn(true);
	};

	const logoutHandler = () => {
		localStorage.removeItem('isLoggedIn');
		setIsLoggedIn(false);
	};

  return ( <AuthContext.Provider value={{isLoggedIn, onLogout: logoutHandler, onLogin: loginHandler}}>
    {children}
  </AuthContext.Provider>);
}

export default AuthContext;
