import React from 'react';
import PropTypes from 'prop-types';

const CounterButton = ({ activeItemsLength }) => (
	<button
		className="btn btn-light"
	>
		{activeItemsLength} items left
	</button>
);

CounterButton.propTypes = {
	activeItemsLength: PropTypes.number.isRequired
};

export default CounterButton;