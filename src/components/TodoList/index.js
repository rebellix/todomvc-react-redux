import TodoList from './TodoList';
import { connect } from 'react-redux';
import { toggleItem, removeItem } from '../../store/actions';
import { FilterOptions } from '../../store/actions/types';

const itemsToShow = (items, filter) => {
	switch (filter) {
		case FilterOptions.SHOW_ALL_ITEMS:
			return items;
		case FilterOptions.SHOW_COMPLETED_ITEMS:
			return items.filter(item => item.completed);
		case FilterOptions.SHOW_ACTIVE_ITEMS:
			return items.filter(item => !item.completed);
		default:
			return items;
		}
};

const mapStateToProps = state => ({
	items: itemsToShow(state.todoItems, state.renderingFilter)
});

const mapDispatchToProps = dispatch => ({
	toggleItem: id => dispatch(toggleItem(id)),
	removeItem: id => dispatch(removeItem(id))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps 
)(TodoList);