import React from 'react';

const Card = ({mainTitle ,items, dispatch}) => {
	return items.map((item, index) =>
		{
			return(
			<div className="todoContainer" id={index}>
				<li key={item.title} >{item.title}</li>
					<a
					className="removeTodo"
					id={item.title}
					href="#"
					onClick={() => dispatch({ type: 'del_todo', target: mainTitle, payload: item.id})}
					>
					✖
					</a>
			</div>
			);
		}
	)
};

export default Card;