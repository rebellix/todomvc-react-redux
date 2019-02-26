const todoItems = (state = [], action) => {
	switch (action.type) {
	case 'ADD_ITEM':
		return [
			{
				id: action.id,
				text: action.text,
				completed: false
			}, ...state
		];
	case 'TOGGLE_ITEM':
		return state.map(item =>
			item.id === action.index ? {
				...item,
				completed: !item.completed
			} : item
		);
	case 'REMOVE_ITEM':
		return state.filter(item => item.id !== action.index);
	case 'TOGGLE_ALL_ITEMS':
		return state.some(item => !item.completed) ?
			state.map(item => {
				item.completed = true;
				return item;
			}) :
			state.map(item => {
				item.completed = false;
				return item;
			});
	case 'CLEAR_COMPLETED_ITEMS':
		return state.filter(item => !item.completed);
	default:
		return state;
	}
};

export default todoItems;