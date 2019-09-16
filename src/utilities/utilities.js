export const reorder = (list, sourceIndex, destIndex) => 
{
    const result = Array.from(list);
    const [removed] = result.splice(sourceIndex, 1);
    result.splice(destIndex, 0, removed);

    return result;
};

export const move = (source, destination, droppableSource, droppableDestination) => 
{
    const sourceClone = Array.from(source);
    const destClone = Array.from(destination);
    const [removed] = sourceClone.splice(droppableSource.index, 1);

    destClone.splice(droppableDestination.index, 0, removed);

    const result = {};
    result[droppableSource.droppableId] = sourceClone;
    result[droppableDestination.droppableId] = destClone;

    return result;
};