import { connect } from 'react-redux';
import CounterButton from '../components/CounterButton';

const mapStateToProps = (state) => ({
	activeItemsLength: state.todoItems.reduce((acc, item) => (!item.completed ? acc + 1 : acc), 0)
});

export default connect(
	mapStateToProps,
)(CounterButton);