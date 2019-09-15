import React, { Component } from 'react';
import { connect } from "react-redux"

import "./CardContainer.css"
import { addNewTodo, removeTodo, addNewList, deleteList } from "../redux/actions/todoActions";

class CardContainer extends Component 
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

	renderTodoLists = () => 
	{
		let {items} = this.props;
		let todoArr = [], ci = 0;
		for (let prop in items) 
		{
			if (Object.prototype.hasOwnProperty.call(items, prop)) 
			{
				todoArr[ci] = items[prop].map((item, index) =>
					{
						return(
						<div className="todoContainer" id={prop}>
							<li key={item.title} >{item.title}</li>
							 <a
								className="removeTodo"
								id={item.title}
								href="#"
								onPointerUp={this.removeTodo}
								>
								✖
								</a>
						</div>
						);
					}
					)
			}
			ci++;
		}

		return Object.keys(this.props.items).map((item, index) => 
			{
				return(
					<div className="list">
						<p>{item}</p>
						<ul>{todoArr[index]}</ul>
						<form onSubmit={this.onSubmit} id={item}>
							<input ref={item}/>
						</form>
					</div>
				)
			}
		);
	}

	render()
	{

		return(
			<div className="board">
				<div className="listContainer">
					{this.renderTodoLists()}
				</div>
				<div onPointerDown={this.onPointerDownList}>
					<p>List todos</p>					
				</div>
				<div onPointerDown={this.addNewList}>
					<p>Add new list</p>					
				</div>
				<div onPointerDown={this.deleteList}>
					<p>Del list</p>					
				</div>
			</div>
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
  )(CardContainer)
// export default ;