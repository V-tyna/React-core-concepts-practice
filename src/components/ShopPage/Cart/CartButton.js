import { useDispatch, useSelector } from 'react-redux';
import { uiCartActions } from '../../../store/uiSlice';
import classes from './CartButton.module.css';

const CartButton = (props) => {
  const cart = useSelector(state => state.cart.cart);
  const dispatch = useDispatch();
  const toggleCartHandler = () => {
    dispatch(uiCartActions.toggle());
  };

  return (
    <button className={classes.button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cart.length}</span>
    </button>
  );
};

export default CartButton;
