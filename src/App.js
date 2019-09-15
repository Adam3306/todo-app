import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { connect } from "react-redux"
import { DragDropContext, Draggable, Droppable  } from "react-beautiful-dnd";

import './App.css';
import CardContainer from "./components/TodoListContainer";
import Asad from "./ASsdasdasdasda";

// const NavBar = () => (
//   <div className="navbar">
//     <h3>Task Manager</h3>
//     <Link to="/">Current Tasks</Link>
//     <Link to="/completed">Completed Tasks</Link>
//   </div>
// );

// const Template = (props) => (
//   <div>
//     <NavBar />
//     <div  id="taskContainer">
//       <p className="page-info">
//         {props.title}:
//       </p>    
//       <ul className={props.status} id="taskContainer">
//           <li>Task 2</li>
//           <li>Task 3</li>
//       </ul>
//     </div>
//   </div>
// );

// const CurrentTasks = () => (
//   <Template title="Current Tasks" status="Current"/>
// );

// const CompletedTasks = () => (
//   <Template title="Completed Tasks" status="Completed"/>
// );

class App extends Component {
  constructor(props)
  {
    super(props)
  }
  
  render() {
    return (
      // <BrowserRouter>
      // <ASsdasdasdasda />
      <Asad />
        //  <CardContainer /> 

        // {/* <div>
        // <ul id="taskContainer">
        //   {items}
        //   </ul>
        //   <div>
        //     ADSasd
        //   </div>
        //   <Route exact path="/" component={CurrentTasks}/>
        //   <Route path="/completed" component={CompletedTasks}/>
        // </div> */}
        // {/* // </BrowserRouter> */}
    );
  }
}

export default
  (App)
// export default App;