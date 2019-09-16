import React, { Component } from 'react';
import { connect } from "react-redux"
import { DragDropContext} from 'react-beautiful-dnd';
import { TextField } from '@material-ui/core';
import CardContainer from "./CardContainer/CardContainer";
import { setTodos, removeTodo, addNewList, deleteList } from "../redux/actions/todoActions"
import { reorder, move } from "../utilities/utilities"

class App extends Component {
    state = {
        inputValue: ""
    };

    id2List = {};

    componentDidMount()
    {
        this.generateArrays();
        this.setState({isLoading: false});
    }

    generateArrays = () =>
    {
        this.m_currentID = 0;
        this.m_keyArr = [];
        this.m_valArr = [];

        for (let val in this.props.items)
        {
            let tmpKey = `droppable${this.m_currentID}`;
            this.m_valArr.push(val);
            this.m_keyArr.push(tmpKey);
            this.id2List = { ...this.id2List, [tmpKey]:  val}
            this.m_currentID++;            
        }
    }

    update = () =>
    {
        this.forceUpdate();
    }

    getList = id => this.props.items[this.id2List[id]];

    onDragEnd = result => {
        const { source, destination } = result;
        
        // dropped outside the list
        if (!destination) 
        {
            this.props.removeTodo(this.id2List[source.droppableId], source.index)
            return;
        }

        if (source.droppableId === destination.droppableId)
        {
            const reordered = reorder(
                this.getList(source.droppableId),
                source.index,
                destination.index
            );

            this.props.setTodos([this.id2List[destination.droppableId]], reordered);
        } 
        else
        {
            const res = move(
                this.getList(source.droppableId),
                this.getList(destination.droppableId),
                source,
                destination
            );
                        
            let tmpArr = [];
            for (var prop in res) 
            {   
                tmpArr.push(prop); 
            }
            
            this.props.setTodos([this.id2List[destination.droppableId]], res[tmpArr[1]]);
            this.props.setTodos([this.id2List[source.droppableId]], res[tmpArr[0]]);
        }
    };

    addNewList = () =>
    {
        this.props.addNewList(this.state.inputValue);
        this.generateArrays();
        this.setState({inputValue: "" });

    }

    deleteList = title =>
    {
        this.props.deleteList(title);
        this.generateArrays();
        this.forceUpdate();
    }

    renderAll = () =>
    {
        if (!this.m_keyArr) return;
        let asd = []
        for (let i = 0; i < this.m_keyArr.length; i++)
        {
            asd.push(<CardContainer 
                        key={this.m_keyArr[i]} 
                        id={this.m_keyArr[i]} 
                        source={this.props.items[this.m_valArr[i]]} 
                        title={this.m_valArr[i]} 
                        updateFunc={this.update}
                        deleteList={this.deleteList}
                    />)   
        }

        return asd;
    }

    renderAddNewList = () =>
    (
        <div>
            <TextField
                id="add-todo"
                label="Add new list"
                value={this.state.inputValue}
                onChange={(e) => { this.setState({inputValue: e.target.value})}}
                margin="normal"
            />
            <a href="#" className="submitButton" onClick={this.addNewList}>
                <span>&#43;</span>
            </a>    
        </div>
    )
    
    render() {
        return (
            <div style={{padding: "5%"}}>
                <DragDropContext onDragEnd={this.onDragEnd}>
                <div style={{display: "flex"}}>
                    {this.renderAll()}
                    {this.renderAddNewList()}
                </div>
                </DragDropContext>
            </div>
        );
    }
}

const mapStateToProps = ({ todos }) => (
	{
		items: todos.items
	}
);

export default connect(
    mapStateToProps,
    { setTodos, removeTodo, addNewList, deleteList }
  )(App)