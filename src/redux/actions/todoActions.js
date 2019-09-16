import {
	ADD_NEW_TODO,
	DEL_TODO,
	ADD_NEW_LIST,
	DEL_LIST,
	SET_TODOS
} from "../types"

export const addNewTodo = (target, text, id) => 
{
	return {
		type: ADD_NEW_TODO,
		target,
		payload: {content: text, id}
		// meta: {
		// 	offline: {
		// 	  effect: {
		// 		url: url,
		// 		method: "POST",
		// 		// headers:{
		// 		// 	'X-Requested-With': 'XMLHttpRequest'
		// 		// },
		// 		body: JSON.stringify({ text, completed: false, createdDate })
		// 	  }
		// 	}
		//   }
	}
}

export const setTodos = (target, source) =>
{
	return {
		type: SET_TODOS,
		target,
		source,
		// meta: {
		// 	offline: {
		// 	  effect: {
		// 		url: url,
		// 		method: "POST",
		// 		// headers:{
		// 		// 	'X-Requested-With': 'XMLHttpRequest'
		// 		// },
		// 		body: JSON.stringify({ text, completed: false, createdDate })
		// 	  }
		// 	}
		//   }
	}
}


export const removeTodo = (target, index) =>
{
	return {
		type: DEL_TODO,
		target,
		index
	}
};

export const addNewList = title =>
{
	return {
		type: ADD_NEW_LIST,
		payload: title
	}
}

export const deleteList = title =>
{
	return {
		type: DEL_LIST,
		payload: title
	}
}