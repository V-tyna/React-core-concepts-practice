import { redirect } from 'react-router-dom';
import getAuthToken from '../../../utils/auth';

const tokenLoader = () => {
  return {
    token: getAuthToken()
  }; 
}

export const checkAuthLoader = () => {
 const token = getAuthToken();
  if (!token) {
    return redirect('/auth?mode=login');
  }
 
  return null; 
};

export default tokenLoader;