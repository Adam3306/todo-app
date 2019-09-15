import React, {useState, useEffect, useReducer} from 'react';
import Card from './Card';
import AddTodo from './AddTodo';
import todos, {initialState} from '../redux/reducers/todoReducer';

const CardContainer = () => {
	const [state, dispatch] = useReducer(todos, initialState);
	const [todoState, setTodoState] = useState(state.items ||initialState.items);

	useEffect(() => {
		setTodoState(state.items);
	}, [state]); 


	return Object.keys(todoState).map((item, index) => 
			{
				return(
					<div className="list">
						<p>{item}</p>
						<Card mainTitle={item} items={todoState[item]} dispatch={dispatch} />
						<AddTodo mainTitle={item} dispatch={dispatch} />
					</div>
				)
			}
		);
	};

export default CardContainer;