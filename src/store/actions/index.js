import * as actionTypes from './types';

// ACTION CREATORS
export const addItem = (text) => {
	return {
		type: actionTypes.ADD_ITEM,
		id: Date.now(),
		text
	};
}

export const toggleItem = (index) => {
	return {
		type: actionTypes.TOGGLE_ITEM,
		index
	};
}

export const removeItem = (index) => {
	return {
		type: actionTypes.REMOVE_ITEM,
		index
	};
}

export const toggleAllItems = () => {
	return {
		type: actionTypes.TOGGLE_ALL_ITEMS,
	};
}

export const clearCompletedItems = () => {
	return {
		type: actionTypes.CLEAR_COMPLETED_ITEMS,
	};
}

export const setRenderingFilter = (filter) => {
	return {
		type: actionTypes.SET_RENDERING_FILTER,
		filter
	};
}

