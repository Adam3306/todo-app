import {
	ADD_NEW_TODO,
	DEL_TODO,
	ADD_NEW_LIST,
	DEL_LIST
} from "../types";

const initialState = {
	items: 
	{
			
		"Hazimiunka":
		[
			{
				title: "Megcsinalni a hazit",
				done: false,
				id: 0,
			},
		],
		
		"Suli":
		[
			{
				title: "bebaszni",
				done: false,
				id: 1,
			},
			{
				title: "Kristofnak atkuldeni a beadandot",
				done: false,
				id: 2,
			},
		],
	},
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
			let tmp = state.items[action.target].push(action.payload);
			return {
				...state,				
				items: {...state.items, ...tmp}
			}
		}
		case DEL_TODO:
		{
			let { items } = state;
			let searchedIndex = null;
			
			
			for (let prop in items) 
			{
				if (Object.prototype.hasOwnProperty.call(items, prop)) 
				{
					items[prop].map((item, index) =>
					{						
						if (item.id === action.payload) searchedIndex = index;
					}
					);
				}
			}

			if (searchedIndex != null)
			{
				items[action.target].splice(searchedIndex, 1);		
			}

			return {
				...state,	
			}
		}
		case ADD_NEW_LIST:
		{
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
  