//this component is use to list tasks, using props as: task, is to define the properties of the tasks.


import React from 'react'

const TaskRow = (props) => (
    <div key={props.task.id} className={props.task.done ? "alert alert-primary d-flex justify-content-between align-item-center" : "alert alert-warning d-flex justify-content-between align-item-center"}>

        <input
            type="checkbox"
            className=" form-check-input"
            checked={props.task.done}
            onChange={() => props.toggleTask(props.task)}
        />
        {
            props.task.done ?
                <p style={{ color: "#9eb2c0", textDecoration: "line-through" }} className="title">
                    {props.task.title}
                </p>
                :
                <p style={{ color: "#2e3641" }} className="title">
                    {props.task.title}
                </p>

        }
        <h3 className="m-0">
            <i
                className="fas fa-trash-alt text-dark"
                role="button"
                onClick={() => props.deleteTask(props.task.id)}
            ></i>
        </h3>
    </div>

)

export default TaskRow;
