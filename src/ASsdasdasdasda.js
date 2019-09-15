import React, { Component, useState } from 'react';
import ReactDOM from 'react-dom';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

// fake data generator
const getItems = (count, offset = 0) =>
    Array.from({ length: count }, (v, k) => k).map(k => ({
        id: `item-${k + offset}`,
        content: `item ${k + offset}`
    }));

// a little function to help us with reordering the result
const reorder = (list, sourceIndex, destIndex) => {
    // atrakja tombon belul a megfelelo helyre - csak listan belul
    const result = Array.from(list);
    const [removed] = result.splice(sourceIndex, 1);
    result.splice(destIndex, 0, removed);

    return result;
};

/**
 * Moves an item from one list to another list.
 */
const move = (source, destination, droppableSource, droppableDestination) => {
    const sourceClone = Array.from(source);
    const destClone = Array.from(destination);
    const [removed] = sourceClone.splice(droppableSource.index, 1);

    destClone.splice(droppableDestination.index, 0, removed);

    const result = {};
    result[droppableSource.droppableId] = sourceClone;
    result[droppableDestination.droppableId] = destClone;

    return result;
};

const grid = 8;

const getItemStyle = (isDragging, draggableStyle) => ({
    // some basic styles to make the items look a bit nicer
    userSelect: 'none',
    padding: grid * 2,
    margin: `0 0 ${grid}px 0`,

    // change background colour if dragging
    background: isDragging ? 'lightgreen' : 'grey',

    // styles we need to apply on draggables
    ...draggableStyle
});

const getListStyle = isDraggingOver => ({
    background: isDraggingOver ? 'lightblue' : 'lightgrey',
    padding: grid,
    width: 250,
    
    
});

export default class App extends Component {
    state = {
        items: getItems(10),
        selected: getItems(5, 10),
        asd: getItems(5, 30),
        siker: getItems(8, 40),
    };

    /**
     * A semi-generic way to handle multiple lists. Matches
     * the IDs of the droppable container to the names of the
     * source arrays stored in the state.
     */

    id2List = {};

    componentDidMount()
    {
        let id = 0;
        for (let prop in this.state)
        {
            this.id2List = { ...this.id2List, [`droppable${id}`]:  prop}
            id++;
        }
        let sadsda = this.id2List;
        debugger;
    }
    
    

    getList = id => this.state[this.id2List[id]];

    onDragEnd = result => {
        const { source, destination } = result;
        console.log(result)
        // dropped outside the list
        if (!destination) {
            return;
        }

        if (source.droppableId === destination.droppableId)
        {
            const reordered = reorder(
                this.getList(source.droppableId),
                source.index,
                destination.index
            );
            
            let state = { [this.id2List[destination.droppableId]]: reordered };
            
            this.setState(state);
        } 
        else 
        {
            const res = move(
                this.getList(source.droppableId),
                this.getList(destination.droppableId),
                source,
                destination
            );
            console.log(res);
            let ci = 0;
            let tmpArr = [];
            for (var prop in res) 
            {   
                console.log(prop);
                tmpArr.push(prop); 
                ci++;
            }
            // debugger;
            
            this.setState({
                [this.id2List[destination.droppableId]]: res[tmpArr[1]],
                [this.id2List[source.droppableId]]: res[tmpArr[0]],
            });
        }
    };

    // ID - lista kategoria, source - array
    renderDroppable = (id, source) =>
    {
      return (
      <Droppable droppableId={id}>
          {(provided, snapshot) => (
              <div
                  ref={provided.innerRef}
                  style={getListStyle(snapshot.isDraggingOver)}>
                  {source.map((item, index) => (
                      <Draggable
                          key={item.id}
                          draggableId={item.id}
                          index={index}>
                          {(provided, snapshot) => (
                              <div
                                  ref={provided.innerRef}
                                  {...provided.draggableProps}
                                  {...provided.dragHandleProps}
                                  style={getItemStyle(
                                      snapshot.isDragging,
                                      provided.draggableProps.style
                                  )}>
                                  {item.content}
                              </div>
                          )}
                      </Draggable>
                  ))}
                  {provided.placeholder}
              </div>
          )}
      </Droppable>)
    }

    
    // Normally you would want to split things out into separate components.
    // But in this example everything is just done in one place for simplicity
    render() {
        return (
            <DragDropContext onDragEnd={this.onDragEnd}>
              <div style={{display: "flex"}}>
                {this.renderDroppable("droppable0", this.state.items)}         
                {this.renderDroppable("droppable1", this.state.selected)}
                {this.renderDroppable("droppable2", this.state.asd)}         
                {this.renderDroppable("droppable3", this.state.siker)}         
              </div>
            </DragDropContext>
        );
    }
}

// Put the things into the DOM!
// ReactDOM.render(<App />, document.getElementById('root'));
