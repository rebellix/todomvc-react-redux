import FilterLink from './FilterLink';
import { connect } from 'react-redux';
import { setRenderingFilter } from '../../../store/actions';

const mapStateToProps = (state, ownProps) => ({
	active: ownProps.filter === state.renderingFilter
});

const mapDispatchToProps = (dispatch, ownProps) => ({
	onClick: () => dispatch(setRenderingFilter(ownProps.filter))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(FilterLink);