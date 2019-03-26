import CounterButton from './CounterButton';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
	activeItemsLength: state.todoItems.reduce((acc, item) => (!item.completed ? acc + 1 : acc), 0)
});

export default connect(
	mapStateToProps,
)(CounterButton);