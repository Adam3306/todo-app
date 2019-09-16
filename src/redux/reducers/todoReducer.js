import {
	ADD_NEW_TODO,
	DEL_TODO,
	ADD_NEW_LIST,
	DEL_LIST,
	SET_TODOS
} from "../types";

const initialState = {
	items: 
	{
			
		"TODO":
		[
			{
				content: "Drink a coffee",
				id: "0",
				// done: false,
			},
		],
		
		"INPROGRESS":
		[
			{
				content: "This is some hopeful text",
				id: "1",
			},
			{
				content: "To remove a todo just drop it to the universe",
				id: "2",
			},
		],

		"DONE":
		[
			{
				content: "This task is done",
				id: "3",
			},
		],
	},
	m_ID: 4,
	isFetchingTodos: false,
	isErrorFetchingTodos: false,
	submitting: {},
	filterBy: "ALL"
  }
  
  const todos = (state = initialState, action) => {
	switch (action.type) 
	{
		case ADD_NEW_TODO:
		{
			state.items[action.target].push(action.payload);
			state.m_ID++;
			return {
				...state,				
			}
		}
		case SET_TODOS:
		{
			let tmpItems = state.items;
			tmpItems[action.target] = action.source;
			
			return {
				...state,
				items: {...tmpItems}
			}
		}
		case DEL_TODO:
		{
			state.items[action.target].splice(action.index, 1);		
			
			return {
				...state,	
			}
		}
		case ADD_NEW_LIST:
		{
			console.log(ADD_NEW_LIST)
			state.items[action.payload] = [];
			return {
				// items: {...state.items, action.payload: []}
				...state,	
			}
		}
		case DEL_LIST:
		{
			console.log(state.items[action.payload])
			delete state.items[action.payload];
			return {
				...state,
			}
		}
		default:
			return state;
	}
  }
  
  export {initialState, todos as default};
  