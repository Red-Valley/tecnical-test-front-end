import React from "react";

const TaskList = ({
  items,
  toggleChecked,
  removeTask,
  onDragStart,
  onDragOver,
  onDrop,
  onDragLeave,
}) => {
  return (
    <>
      {items.length ? (
        items.map((task, index) => (
          <tr
            key={`task-${index}`}
            data-position={index}
            draggable
            onDragStart={onDragStart}
            onDragOver={onDragOver}
            onDrop={onDrop}
            onDragLeave={onDragLeave}
            className="items-task"
          >
            <td>
              <input
                type="checkbox"
                className="checkbox"
                checked={task.done}
                onChange={() => toggleChecked(task)}
              />
            </td>
            <td>
              <div
                className={[
                  "task",
                  task.done ? "strikethrough" : "no-strikethrough",
                ].join(" ")}
              >
                {task.title.charAt(0).toUpperCase() + task.title.slice(1)}
                <button
                  className={["button-trash", task.done && "color-trash"].join(
                    " "
                  )}
                  onClick={() => removeTask(task.title)}
                >
                  <i className="fas fa-trash-alt" />
                </button>
              </div>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan="2" className="message">
            {"There aren't things to do"}
          </td>
        </tr>
      )}
    </>
  );
};

export default TaskList;
