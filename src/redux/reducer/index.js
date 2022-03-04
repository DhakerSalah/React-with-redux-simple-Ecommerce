import { combineReducers } from "redux";
import handleCart from './handleCart';

const rootReducers = combineReducers({
    handleCart : handleCart
});

export default rootReducers;