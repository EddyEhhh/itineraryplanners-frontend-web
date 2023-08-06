import React from "react";
import {useSortable} from "@dnd-kit/sortable";
import {CSS} from "@dnd-kit/utilities";
import {DndContext, useDraggable, useDroppable} from '@dnd-kit/core';

const TestBlock = () => {
    // const {
    //     attributes,
    //     listeners,
    //     setNodeRef,
    //     transform,
    //     transition,
    // } = useSortable({id: 1});
    const {attributes, listeners, setNodeRef} = useDraggable({
        id: 'unique-id',
    });

    //
    // const style = {
    //     transform: CSS.Transform.toString(transform),
    //     transition,
    // };

    return (
        <div className={"outline w-32"} ref={setNodeRef}>
            <button  {...listeners} {...attributes}> drag me </button>
            <button> cant drag</button>
        </div>
    )
}

export default TestBlock;