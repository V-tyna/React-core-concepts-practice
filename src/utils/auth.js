export const getTokenDuration = () => {
  const expIn = localStorage.getItem('expiresIn');
  const duration = expIn - Date.now();
  return duration;
};

const getAuthToken = () => {
  const token = localStorage.getItem('token');
  const expiresIn = getTokenDuration();
  if (expiresIn < 0) {
    localStorage.removeItem('token');
    localStorage.removeItem('expiresIn');
    return null;
  }
  return token;
}

export default getAuthToken;