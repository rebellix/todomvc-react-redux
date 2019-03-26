import InputForm from './InputForm';
import { connect } from 'react-redux';
import { addItem, toggleAllItems } from '../../store/actions';

const mapDispatchToProps = (dispatch) => {
  return {
    addItem: text => dispatch(addItem(text)),
    toggleAllItems: () => dispatch(toggleAllItems())
  }
}

export default connect(null, mapDispatchToProps)(InputForm)