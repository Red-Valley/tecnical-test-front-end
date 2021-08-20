// ToDo List Component

import React, { useEffect, useState } from 'react'
import TaskBanner from './TaskBanner';
import TaskCreator from './TaskCreator';
import TaskRow from './TaskRow';
import { v4 as uuidv4 } from "uuid";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

function ToDoList() {

    const [taskItems, setTaskItems] = useState([])

    useEffect(() => {
        let data = localStorage.getItem('tasks');
        if (data != null) {
            setTaskItems(JSON.parse(data));
        } else {
            setTaskItems([
                { id: uuidv4(), title: 'Task One Example', done: false },
                { id: uuidv4(), title: 'Task Two Example', done: false },
                { id: uuidv4(), title: 'Task Three Example', done: true },
                { id: uuidv4(), title: 'Task Four Example', done: false },
            ])
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(taskItems));
    }, [taskItems]);

    /** 
      *@description Used to create new task, this is send to taskCreator component
      *@param (any)taskTitle
    */
    const createNewTask = taskTitle => {
        if (taskTitle.trim() !== '') {
            if (!taskItems.find(t => t.title === taskTitle)) {
                setTaskItems([...taskItems, { id: uuidv4(), title: taskTitle, done: false }])
            }
        }
    }
    /** 
      *@description Used to change task status
      *@param (any)task
    */
    const toggleTask = (task) => {
        setTaskItems(taskItems.map(t => (t.id === task.id ? { ...t, done: !t.done } : t)))
    }
    /** 
      *@description Used to delete a task
      *@param (any)id
    */
    const deleteTask = (id) => {
        const arrayFiltrado = taskItems.filter(task => task.id !== id)
        setTaskItems(arrayFiltrado);

    }


    /** 
      *@description Used to sort the list supporting the react-beautiful-dnd library
      *@param (any) list, startIndex, endIndex
    */
    const reorder = (list, startIndex, endIndex) => {
        const result = [...list];
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);

        return result;
    }
    return (
        <DragDropContext onDragEnd={(result) => {
            const { source, destination } = result;
            if (!destination) {
                return;
            }
            if (source.index === destination.index
                && source.droppableId === destination.droppableId) {
                return;
            }
            setTaskItems(prevTasks => reorder(prevTasks, source.index, destination.index))

        }}>
            <div className="m-3" >
                <h1 className="text-center my-3 bg-dark text-white p-3" data-testid="toDoList-1">
                    ToDo List
                </h1>
                <TaskBanner taskItems={taskItems} />
                <div className="my-4">

                    {
                        taskItems.length === 0 ?
                            (
                                <div className="alert alert-dark text-center">
                                    No hay tareas pendientes
                                </div>
                            )
                            :
                            (
                                <Droppable droppableId="task">
                                    {(droppableProvided) => (
                                        <div
                                            {...droppableProvided.droppableProps}
                                            ref={droppableProvided.innerRef}
                                        >
                                            {
                                                taskItems
                                                    .map((task, index) => (
                                                        <Draggable key={task.id} draggableId={task.id} index={index}>
                                                            {(draggableProvided) => (
                                                                <div
                                                                    {...draggableProvided.draggableProps}
                                                                    ref={draggableProvided.innerRef}
                                                                    {...draggableProvided.dragHandleProps}
                                                                >

                                                                    <TaskRow
                                                                        task={task}
                                                                        toggleTask={toggleTask}
                                                                        deleteTask={deleteTask}
                                                                    />
                                                                </div>
                                                            )}
                                                        </Draggable>
                                                    ))
                                            }
                                            {droppableProvided.placeholder}
                                        </div>
                                    )}
                                </Droppable>
                            )
                    }
                </div>
                <TaskCreator callBack={createNewTask} />
            </div>
        </DragDropContext>
    );
}

export default ToDoList;
