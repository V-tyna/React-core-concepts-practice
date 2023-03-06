export const getTokenDuration = () => {
  const expIn = localStorage.getItem('expiresIn');
  const duration = expIn - Date.now();
  return duration;
};

const getAuthToken = () => {
  const token = localStorage.getItem('token');
  const expiresIn = getTokenDuration();
  if (expiresIn < 0) {
    return 'EXPIRED';
  }
  return token;
}

export default getAuthToken;