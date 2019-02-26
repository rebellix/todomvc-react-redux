import React from 'react';
import { connect } from 'react-redux';
import { addItem, toggleAllItems } from '../actions';

const InputForm = ({ dispatch }) => {
	let input, checkInput;
	const placeholder = 'What needs to be done?';
	return (
		<form 
			onSubmit={e => {
				e.preventDefault();
				if (!input.value.trim()) {
					alert('Nothing was typed');
					return;
				}
				dispatch(addItem(input.value));
				input.value = '';
				checkInput.checked = false;
			}}>
			<div className="input-group sm-12">
				<div className="input-group-prepend">
					<div className="input-group-text">
						<input
							onClick={ () => dispatch(toggleAllItems()) } 
							type="checkbox" 
							aria-label="Checkbox for following text input"
							ref={node => (checkInput = node)}	
						/>
					</div>
				</div>							
				<input
					type="text" 
					className="form-control" 
					aria-label="Text input with checkbox"
					placeholder={placeholder}
					ref={node => (input = node)}
				/>
			</div>
		</form>
	);
};

export default connect()(InputForm);