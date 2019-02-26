import { combineReducers } from 'redux';
import todoItems from './todoItems';
import renderingFilter from './renderingFilter';

export default combineReducers({
	todoItems,
	renderingFilter
});