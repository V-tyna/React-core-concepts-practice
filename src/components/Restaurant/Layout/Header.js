import mealsImg from '../../../assets/photo-1655293636616-cade6a3cdc10.avif';
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';

function Header({ onShowCart }) {
	return (
		<>
			<header className={classes.header}>
				<h1>Restaurant </h1>
				<HeaderCartButton onClick={onShowCart}/>
			</header>
			<div className={classes['main-image']}>
				<img src={mealsImg} alt='Grilled meat.' />
			</div>
		</>
	);
}

export default Header;
