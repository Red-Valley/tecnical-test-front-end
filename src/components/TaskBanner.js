//this component is use to show how many tasks have been done, using props as: taskItems, contains the task object

import React from 'react'

const TaskBanner = (props) => (
    <h4 className=" text-dark text-center p-1">
        Tasks ({props.taskItems.filter(t => !t.done).length} tasks to do)
    </h4>
)

export default TaskBanner;
