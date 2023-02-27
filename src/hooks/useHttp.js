import { useCallback, useState } from 'react';

const useHttp = (url) => {
	const [loading, setIsLoading] = useState(false);
	const [error, setFetchingError] = useState(null);

	const fetchData = useCallback(async (options, setDataFn) => {
		try {
			setIsLoading(true);
			setFetchingError(null);
			const response = await fetch(url, options);

			if (!response.ok) {
				throw new Error('Fetch failure.');
			}
			const data = await response.json();
			console.log('RESPONSE: ', data);
			if (data !== null) {
				setDataFn(data);
			}
			setIsLoading(false);
		} catch (e) {
			setFetchingError(e.message);
		}
	}, [url]);

	return { fetchData, loading, error };
};

export default useHttp;
