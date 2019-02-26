import { connect } from 'react-redux';
import { clearCompletedItems } from '../actions';
import ClearButton from '../components/ClearButton';

const mapStateToProps = (state) => ({
	items: state.todoItems
});

const mapDispatchToProps = (dispatch) => ({
	onClick: () => dispatch(clearCompletedItems())
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ClearButton);