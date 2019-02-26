// ACTION CONSTANTS
export const ADD_ITEM = 'ADD_ITEM';
export const TOGGLE_ITEM = 'TOGGLE_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const TOGGLE_ALL_ITEMS = 'TOGGLE_ALL_ITEMS';
export const CLEAR_COMPLETED_ITEMS = 'CLEAR_COMPLETED_ITEMS';
export const SET_RENDERING_FILTER = 'SET_RENDERING_FILTER';


// FILTER OPTIONS CONSTANTS
export const FilterOptions = {
	SHOW_ALL_ITEMS: 'SHOW_ALL_ITEMS',
	SHOW_COMPLETED_ITEMS: 'SHOW_COMPLETED_ITEMS',
	SHOW_ACTIVE_ITEMS: 'SHOW_ACTIVE_ITEMS'
};


// ACTION CREATORS
export function addItem(text) {
	return {
		type: ADD_ITEM,
		id: Date.now(),
		text
	};
}

export function toggleItem(index) {
	return {
		type: TOGGLE_ITEM,
		index
	};
}

export function removeItem(index) {
	return {
		type: REMOVE_ITEM,
		index
	};
}

export function toggleAllItems() {
	return {
		type: TOGGLE_ALL_ITEMS,
	};
}

export function clearCompletedItems() {
	return {
		type: CLEAR_COMPLETED_ITEMS,
	};
}

export function setRenderingFilter(filter) {
	return {
		type: SET_RENDERING_FILTER,
		filter
	};
}