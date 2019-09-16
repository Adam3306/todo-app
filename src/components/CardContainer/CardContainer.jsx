import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import AddTodo from '../AddTodo/AddTodo';
import Card from '../Card/Card';
import { grid } from "../../utilities/constants"
import "./CardContainer.css"

const getListStyle = isDraggingOver => (
{
    background: isDraggingOver ? 'lightblue' : 'lightgrey',
    padding: grid,
	width: "80%",
	borderRadius: 8
});

const CardContainer = ({id, source, title, updateFunc, deleteList}) =>
{
    return (
		<div className="baseContainer">
			<div style={{display: "flex"}}>
				<p>{title}</p>
				<a href="#" className="deleteList" onClick={() => deleteList(title)}>X</a>
			</div>
			<Droppable droppableId={id}>
				{(provided, snapshot) => (
					<div
						key={id}
						ref={provided.innerRef}
						style={getListStyle(snapshot.isDraggingOver)}>
						{source.map((item, index) => (
							<Card key={index} item={item} index={index} />
						))}
						{provided.placeholder}
					</div>
				)}
			</Droppable>
			<AddTodo mainTitle={title} updateFunc={updateFunc} />
		</div>
	)
};

export default CardContainer;