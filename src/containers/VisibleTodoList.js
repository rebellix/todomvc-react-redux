import { connect } from 'react-redux';
import { toggleItem, removeItem, toggleAllItems } from '../actions';
import TodoItemsList from '../components/TodoItemsList';
import { FilterOptions } from '../actions';

const itemsToShow = (items, filter) => {
	switch (filter) {
	case FilterOptions.SHOW_ALL_ITEMS:
		return items;
	case FilterOptions.SHOW_COMPLETED_ITEMS:
		return items.filter(item => item.completed);
	case FilterOptions.SHOW_ACTIVE_ITEMS:
		return items.filter(item => !item.completed);
	default:
		throw new Error('Unknown filter: ' + filter);
	}
};

const mapStateToProps = state => ({
	items: itemsToShow(state.todoItems, state.renderingFilter)
});

const mapDispatchToProps = dispatch => ({
	toggleItem: id => dispatch(toggleItem(id)),
	removeItem: id => dispatch(removeItem(id)),
	toggleAllItems: () => dispatch(toggleAllItems())
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(TodoItemsList);