import {
	ADD_NEW_TODO,
	DEL_TODO,
	ADD_NEW_LIST,
	DEL_LIST
} from "../types"

function createCORSRequest(method, url) {
	var xhr = new XMLHttpRequest();
	if ("withCredentials" in xhr) {
	  // XHR for Chrome/Firefox/Opera/Safari.
	  xhr.open(method, url, true);
	  xhr.setRequestHeader(
		'X-Custom-Header', 'value');
	}
	//  else if (typeof XDomainRequest != "undefined") {
	//   // XDomainRequest for IE.
	//   xhr = new XDomainRequest();
	//   xhr.open(method, url);
	// }
	 else {
	  // CORS not supported.
	  xhr = null;
	}
	return xhr;
  }

export const addNewTodo = (target, text) => 
{

	return {
		type: ADD_NEW_TODO,
		target,
		payload: {title: text, done: false}
		// payload: { text, createdDate, completed: false }
	}
	// const todoId = uuid()
	const now = new Date()
	const createdDate = now.getTime() + now.getTimezoneOffset() * 60000 // UTC timestamp
	const url = "https://m-todo-app.herokuapp.com/setTodos";

	// const url = "localhost:8000/setTodos";

	// fetch(url,
	// {
	// 	headers: {
	// 	'Accept': 'application/json',
	// 	'Content-Type': 'application/json'
	// 	},
	// 	method: "POST",
	// 	body: JSON.stringify({a: 1, b: 2})
	// })
	// .then(function(res){ console.log(res) })
	// .catch(function(res){ console.log(res) });

	// var url = 'http://api.alice.com/cors';
	// var xhr = createCORSRequest('POST', url);
	// xhr.setRequestHeader(w
	// 	'X-Custom-Header', 'value');
	// xhr.send({asd: "asdsads"});
	// console.log(xhr);

	return {
	  type: ADD_NEW_TODO,
	  payload: { text, createdDate, completed: false },
	//   meta: {
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


export const removeTodo = (target, element) =>
{
	return{
		type: DEL_TODO,
		target,
		payload: element
	}
};

export const addNewList = title =>
{
	return{
		type: ADD_NEW_LIST,
		payload: title
	}
}

export const deleteList = title =>
{
	return{
		type: DEL_LIST,
		payload: title
	}
}