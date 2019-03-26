import React from 'react';
import PropTypes from 'prop-types';

const ClearButton = ({ onClick }) => (
	<button
		onClick={onClick}
		className="btn btn-light"
	>
		Clear completed
	</button>
);

ClearButton.propTypes = {
	onClick: PropTypes.func.isRequired
};

export default ClearButton;