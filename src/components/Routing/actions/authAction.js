import { json, redirect } from 'react-router-dom';

const authAction = async ({ request }) => {
	const data = await request.formData();
	const authData = {
		email: data.get('email'),
		password: data.get('password'),
	};
	const searchParams = new URL(request.url).searchParams;
	const mode = searchParams.get('mode') || 'login';
	let url = 'http://localhost:4200/login';
	if (mode === 'signup') {
		authData.repeat_password = data.get('repeat_password');
		url = 'http://localhost:4200/signup';
	}
	const response = await fetch(url, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(authData),
	});

  if (response.status === 422 || response.status === 401) {
		return response;
	}
	if (!response.ok) {
		throw json({ message: mode + ' failed.' }, { status: 500 });
	}
  const resData = await response.json();
  localStorage.setItem('token', resData.token);
	const expiration = Date.now() + 3600000;
	localStorage.setItem('expiresIn', expiration);
  return redirect('/');
};

export default authAction;
