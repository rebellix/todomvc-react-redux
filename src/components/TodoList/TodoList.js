import React from 'react';
import PropTypes from 'prop-types';
import './TodoList.css';

const TodoList = ({ items, toggleItem, removeItem }) => (
	<ul className="list-group">
		{
			items.map(todoItem => (
				<li 
					className="list-group-item"
					key={todoItem.id}
					onClick={ () => toggleItem(todoItem.id) }
				>
					<button
						className="btn btn-light circle" 
					>
						<i className={todoItem.completed ? 'fas fa-check completed' : 'fas fa-check'}></i>    
					</button>
					<div className="content-box">
						<span className={todoItem.completed ? 'item-content item-completed' : 'item-content'}>{todoItem.text}</span>
					</div>
					<button
						className="btn btn-light no-border hidden"  
						onClick={ () => removeItem(todoItem.id) }>
						<i className="fas fa-times"></i>    
					</button>
				</li>
			))
		}
	</ul>
);

TodoList.propTypes = {
	items: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			completed: PropTypes.bool.isRequired,
			text: PropTypes.string.isRequired
		}).isRequired
	).isRequired,
	toggleItem: PropTypes.func.isRequired,
	removeItem: PropTypes.func.isRequired
};

export default TodoList;