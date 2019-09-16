import React, { Component } from 'react';
import { TextField } from '@material-ui/core';
import { connect } from "react-redux"
import { addNewTodo } from "../../redux/actions/todoActions"
import "../MainComponent.css";

class AddTodo extends Component
{
	constructor()
	{
		super();
		this.state =
		{
			inputValue: ""
		};
	}
	
	addNewTodo = () =>
	{
		const { mainTitle, addNewTodo, updateFunc, m_ID } = this.props;
		const { inputValue } = this.state;
		if (inputValue.length === 0)
		{
			alert("You must enter the name of your todo!");
			return;
		}
		addNewTodo(mainTitle, inputValue, `${m_ID}`);
		updateFunc();
		this.setState({inputValue: ""});
	}

	render()
	{
		const { inputValue } = this.state;
		return(
			<div className="todoContainer">
				<TextField
					id="add-todo"
					label="Add Todo"
					value={inputValue}
					onChange={(e) => { this.setState({inputValue: e.target.value})}}
					margin="normal"
					/>	
				<a href="#" className="submitButton" onClick={this.addNewTodo}>
					<span>&#43;</span>
				</a>
			</div>
	);
	}
		
};

const mapStateToProps = ({ todos }) => (
	{
		m_ID: todos.m_ID
	}
);

export default connect(mapStateToProps, { addNewTodo })(AddTodo);