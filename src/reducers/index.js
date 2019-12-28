import {combineReducers} from 'redux';
import products from './products';
import user from './user';
import cartProduct from './cartProduct'
const appReducers = combineReducers({
	products,
	user,
	cartProduct
});

export default appReducers;