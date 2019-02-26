import React from 'react';

import InputForm from '../containers/InputForm';
import VisibleTodoList from '../containers/VisibleTodoList';
import Footer from './Footer';

import './App.css';

const App = () => (
	<div className="container">
		<InputForm />
		<VisibleTodoList />
		<Footer />
	</div>
);

export default App;