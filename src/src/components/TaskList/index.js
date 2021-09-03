import { useState } from 'react'

import PropTypes from 'prop-types'
import TrashIcon from './assets/trash.svg'

import './styles.css'

const TaskListComponent = ({
  title
}) => {
  const [tasksData, setTaskData] = useState([])
  const [taskText, setTaskText] = useState('')

  const switchTask = (position) => {
    const newData = tasksData.map((task, index) => {
      if (position === index) {
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

  const addTask = (event) => {
    if (event.key === 'Enter' && taskText !== '') {
      const newData = [...tasksData, {
        label: taskText.trim(),
        done: false
      }]

      setTaskData(newData)
      setTaskText('')
    }
  }

  const removeTask = (position) => {
    const newData = tasksData.filter((task, index) => {
      return index !== position
    })

    setTaskData(newData)
  }

  return (
    <section className="bg-white w-full">
      <header className="flex flex-row bg-gray-700 text-white m-0">
        <div className="flex w-10 border-r-2 border-gray-600 h-auto">
          <div className="flex w-8 mr-1 border-r-2 border-gray-600 h-full block mr-1 items-center justify-center">*</div>
        </div>

        <div className="w-full px-2 py-2">
          <h2>{ title }</h2>
        </div>
      </header>

      {/* TaskList */}
      <section className="bg-white w-full">
        {tasksData.map((task, index) => {
          return (
            <div className="flex flex-row h-full border-1 border-b-2" key={`task-${index}`}>
              <div className="flex w-10 h-auto border-r-2 border-red-100">
                <div className="flex mr-1 items-center justify-center w-8 block border-r-2 border-red-100">
                  <input
                    onChange={() => switchTask(index)}
                    type="checkbox"
                    checked={task.done}
                  />
                </div>
              </div>

              <div className="w-full px-2 flex flex-row py-2">
                <div className={`w-full ${task.done ? 'checked': ''}`}>{ task.label }</div>

                <figure className="w-7 m-0 p-0 flex justify-center cursor-pointer" onClick={() => removeTask(index)}>
                  <img src={TrashIcon} width="24" height="24" alt="Trash Icon" />
                </figure>
              </div>
            </div>
          )
        })}

        {/* Task Input */}
        <div className="flex flex-row h-full">
          <div className="flex w-10 h-auto border-r-2 border-red-100">
            <div className="flex mr-1 items-center justify-center w-8 block border-r-2 border-red-100">
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
  title: 'ToDo List (Default)'
}

TaskListComponent.propTypes = {
  title: PropTypes.string.isRequired
}

export default TaskListComponent
