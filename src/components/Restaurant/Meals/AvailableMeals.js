import { DUMMY_MEALS } from '../../../dummyData/dummyMeals';
import Card from '../Ul/Card';
import classes from './AvailableMeals.module.css';
import MealItem from './MealItem/MealItem';

function AvailableMeals() {
	const mealsList = DUMMY_MEALS.map((meal) => (
		<MealItem
			key={meal.id}
			meal={meal}
		/>
	));
	return (
		<section className={classes.meals}>
			<Card>
				<ul>{mealsList}</ul>
			</Card>
		</section>
	);
}

export default AvailableMeals;
