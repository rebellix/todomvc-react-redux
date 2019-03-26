import ClearButton from './ClearButton';
import { connect } from 'react-redux';
import { clearCompletedItems } from '../../../store/actions';

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