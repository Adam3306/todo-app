import React, { useState } from 'react';
import {TextField, Button} from '@material-ui/core';

const AddTodo = ({ mainTitle, dispatch }) => {
	const [inputValue, setInputValue] = useState("");
	return(
		<div className="todoContainer">
			<TextField
				id="add-todo"
				label="Add Todo"
				value={inputValue}
				onChange={async (e) => {
					await setInputValue(e.target.value)}}
				margin="normal"
			/>	
			<Button
				color="primary"
				variant="contained"
				size="small"
				onClick={() =>{ 
					dispatch({type: "add_new_todo", target: mainTitle, payload: {title: inputValue, done: false}})
					setInputValue("");
				}
				}

			>
				Submit
				</Button>	
		</div>
	);
		
};

export default AddTodo;