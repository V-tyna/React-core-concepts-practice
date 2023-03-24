import { useCallback, useEffect, useState } from 'react';
import Card from '../Ul/Card';
import classes from './AvailableMeals.module.css';
import MealItem from './MealItem/MealItem';

const errorMessage = 'errorMessage';

function AvailableMeals() {
	const [meals, setMeals] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [hasError, setHasError] = useState(null);
	const mealsList = meals.map((meal) => (
		<MealItem key={meal.id} meal={meal} />
	));

	const fetchMeals = useCallback(async () => {
		try {
			setIsLoading(true);
			const response = await fetch(
				'https://react-http-5b516-default-rtdb.firebaseio.com/meals.json'
			);
			if (!response.ok) {
				throw new Error('Fetching meals failure.');
			}
			const data = await response.json();
			const transformedData = Object.entries(data).map(([id, value]) => ({
				id,
				...value,
				price: +value.price,
			}));
			setMeals(transformedData);
		} catch (e) {
			console.log(e);
			setHasError(e.message);
		}
		setIsLoading(false);
	}, []);

	useEffect(() => {
		fetchMeals();
	}, [fetchMeals]);

	return (
		<>
			{(isLoading && !hasError) && (
				<div className={classes.loading}>
					<p>Loading...</p>
				</div>
			)}

			{!isLoading && !hasError && (
				<section className={classes.meals}>
					<Card>
						<ul>{mealsList}</ul>
					</Card>
				</section>
			)}

			{hasError && !isLoading && (
				<div role={errorMessage} className={classes.error}>{hasError}</div>
			)}
		</>
	);
}

export default AvailableMeals;
