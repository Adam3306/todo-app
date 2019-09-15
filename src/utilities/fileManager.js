

export const writeNewTodo = (todoObj) => 
{
	const url = 'http://localhost:8000/asd';
	(async () => {
		const rawResponse = await fetch(url, {
		  method: 'POST',
		  headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		  },
		  body: JSON.stringify({a: 1, b: 'Textual content'})
		});
		const content = await rawResponse.json();
	  
		console.log(content);
	  })();
}

// validateJson (json) {
//     let validJson
    
//     try{
//       validJson = JSON.stringify(JSON.parse(this.state.json), null, 2)
//     } catch(e) {
//       throw e
//     }
    
//     return validJson
//   }
  
//   loadJson = () => {
//     const json = window.localStorage.getItem(LOCALSTORAGE_KEY) || JSON.stringify(SAMPLE_JSON, null, 2)
//     this.setState({ json })
//   }
  
//   saveJson = () => {
 
//   }