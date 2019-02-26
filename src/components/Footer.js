import React from 'react';
import ActiveItemsCounter from '../containers/ActiveItemsCounter';
import FilterLink from '../containers/FilterLink';
import ClearCompletedButton from '../containers/ClearCompletedButton';
import { FilterOptions } from '../actions';

const Footer = () => (
	<div className="btn-group" role="group">
		<ActiveItemsCounter className="btn btn-light"></ActiveItemsCounter>
		<div className="filter-section">
			<FilterLink filter={FilterOptions.SHOW_ALL_ITEMS}>All</FilterLink>
			<FilterLink filter={FilterOptions.SHOW_ACTIVE_ITEMS}>Active</FilterLink>
			<FilterLink filter={FilterOptions.SHOW_COMPLETED_ITEMS}>Completed</FilterLink>
		</div>
		<ClearCompletedButton className="btn btn-light"></ClearCompletedButton>
	</div>
);

export default Footer;