import { redirect } from 'react-router-dom';

const logoutAction = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('expiresIn');
  return redirect('/');
}

export default logoutAction;
