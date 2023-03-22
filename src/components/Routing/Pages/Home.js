import { Link } from 'react-router-dom';

import classes from './Home.module.css';
import Card from '../UI/Card';
import TextTyping from '../Components/TextTyping';


function Home() {
	return (
		<div className='body-container'>
			<h1>Home page</h1>
			<TextTyping />
			
			<Link to='/restaurant' className={classes.link}><Card>Restaurant page</Card></Link>
			<Link to='/shop' className={classes.link}><Card>Shop page</Card></Link>
			<Link to='/movies' className={classes.link}><Card>Movies page</Card></Link>
			<Link to='/animation' className={classes.link}><Card>Animation page</Card></Link>
			<Link to='/basic' className={classes.link}><Card>Basic page</Card></Link>
			<Link to='/redux-demo' className={classes.link}><Card>Redux demo page</Card></Link>
			<Link to='/demo-memo' className={classes.link}><Card>Demo memo page</Card></Link>
		</div>
	);
}

export default Home;
