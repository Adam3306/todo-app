import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { grid } from "../../utilities/constants"


const getItemStyle = (isDragging, draggableStyle) => (
{
    userSelect: 'none',
    padding: grid * 2,
	margin: `0 0 ${grid}px 0`,
	borderRadius: 8,
    background: isDragging ? 'lightgreen' : 'grey',
    ...draggableStyle
});

const onTodoClicked = (e) =>
{
	e.persist();
	console.log("onTodoClicked ", e);
}

const Card = ({item, index}) => 
{
	return(
		<Draggable
			key={item.id}
			draggableId={item.id}
			index={index}>
			{(provided, snapshot) => (
				<div
					onClick={onTodoClicked}
					ref={provided.innerRef}
					{...provided.draggableProps}
					{...provided.dragHandleProps}
					style={getItemStyle(
						snapshot.isDragging,
						provided.draggableProps.style
					)}>
					{item.content}
				</div>
			)}
		</Draggable>
		);
	
};

export default Card;