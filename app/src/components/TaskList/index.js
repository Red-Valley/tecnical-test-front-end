import { useState } from 'react'
import { ReactSortable } from "react-sortablejs";
import { v4 } from 'uuid'

import PropTypes from 'prop-types'
import TrashIcon from './assets/trash.svg'

const TaskListComponent = ({ title, preloadTasks }) => {
  const [tasksData, setTaskData] = useState([...preloadTasks])
  const [taskText, setTaskText] = useState('')

  const addTask = (event) => {
    if (event.key === 'Enter' && taskText !== '') {
      const newData = [...tasksData, {
        id: v4(),
        label: taskText.trim(),
        done: false
      }]

      setTaskData(newData)
      setTaskText('')
    }
  }

  const switchTask = (id) => {
    const newData = tasksData.map((task) => {
      if (id === task.id) {
        return {
          ...task,
          done: !task.done
        }
      } else {
        return task
      }
    })

    setTaskData(newData)
  }

  const removeTask = (id) => {
    const newData = tasksData.filter((task) => {
      return id !== task.id
    })

    setTaskData(newData)
  }

  return (
    <section className="bg-white w-full">
      {/* Header */}
      <header className="flex flex-row bg-gray-700 text-white m-0">
        <div className="flex w-10 border-r-2 border-gray-600 h-auto">
          <div
            className="
              flex w-8 mr-1 border-r-2
              border-gray-600 h-full block mr-1
              items-center justify-center
            "
          />
        </div>

        <div className="w-full px-2 py-2">
          <h2>{title}</h2>
        </div>
      </header>

      {/* TaskList */}
      <section className="bg-white w-full">
        <ReactSortable list={tasksData} setList={setTaskData}>
          {tasksData.map((task, index) => {
            return (
              <div
                className="flex flex-row h-full border-1 border-b-2"
                key={`task-${task.id}-${index}}`}
              >
                <div className="flex w-10 h-auto border-r-2 border-red-100">
                  <div
                    className="
                      flex mr-1 items-center
                      justify-center w-8 block
                      border-r-2 border-red-100
                    "
                  >
                    <input
                      onChange={() => switchTask(task.id)}
                      checked={task.done}
                      className="rounded text-green-500"
                      type="checkbox"
                    />
                  </div>
                </div>

                <div className="w-full px-2 flex flex-row py-2 cursor-pointer">
                  <div
                    className={`w-full ${task.done ? 'checked' : 'todo'}`}
                  >
                    {task.label}
                  </div>

                  <figure
                    className="w-7 m-0 p-0 flex justify-center"
                    onClick={() => removeTask(task.id)}
                  >
                    <img
                      src={TrashIcon}
                      width="24"
                      height="24"
                      alt="Trash Icon"
                    />
                  </figure>
                </div>
              </div>
            )
          })}
        </ReactSortable>

        {/* Task Input */}
        <div className="flex flex-row h-full">
          <div
            className="flex w-10 h-auto border-r-2 border-red-100"
          >
            <div
              className="
                cnt-plus
                flex mr-1 items-center
                justify-center w-8 block
                border-r-2 border-red-100
              "
            >
              +
            </div>
          </div>

          <div className="w-full flex flex-row">
            <input
              onChange={({ target }) => setTaskText(target.value)}
              onKeyDown={addTask}
              value={taskText}
              className="p-2 m-0 w-full outline-none"
            />
          </div>
        </div>
      </section>
    </section>
  )
}

TaskListComponent.defaultProps = {
  title: 'ToDo List (Default)',
  preloadTasks: []
}

TaskListComponent.propTypes = {
  title: PropTypes.string.isRequired,
  preloadTasks: PropTypes.array
}

export default TaskListComponent
