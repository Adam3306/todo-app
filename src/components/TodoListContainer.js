import React, { Component } from 'react';
import { connect } from "react-redux";
import CardContainer from './CardContainer';

import "./TodoListContainer.css"
import { addNewTodo, removeTodo, addNewList, deleteList } from "../redux/actions/todoActions";

class TodoListContainer extends Component 
{
	constructor(props)
	{
		super(props)
	}

	addNewList = () =>
	{
		this.props.addNewList("HelloW " + Math.random());
		this.forceUpdate();
	}

	deleteList = () =>
	{
		this.props.deleteList("A borton ablaka soha nem sut be a nap 0.4385252372484676");
		this.forceUpdate();
	}

	removeTodo = e =>
	{
		e.persist();
		this.props.removeTodo(e.target.parentElement.id ,e.target.id);
		this.forceUpdate();
	}

	onPointerDownList = () =>
	{
		console.log(this.props.items);
	}

	onSubmit = e =>
	{
		e.preventDefault();
		e.persist();
		this.props.addNewTodo(e.target.id ,this.refs[e.target.id].value);		
		setTimeout(() => {this.refs[e.target.id].value =""}, 100)
	}


	render()
	{
		return(
			<CardContainer />
		)
	}
}

const mapStateToProps = ({ todos }) => (
	{
		items: todos.items
	}
);

export default connect(
	mapStateToProps,
	{ addNewTodo, removeTodo, addNewList, deleteList }
  )(TodoListContainer)
// export default ;