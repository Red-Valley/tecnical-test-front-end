import React from "react";

const TaskCreator = ({ addTask }) => {
  const [newTask, setNewTask] = React.useState("");

  const updateTask = (event) => setNewTask(event.target.value);

  const createTask = (task) => {
    if (newTask !== "") {
      addTask(task);
      setNewTask("");
    } else {
      alert("Fill the empty field");
    }
  };

  return (
    <tfoot>
      <tr className="td-footer">
        <td style={{ textAlign: "center" }}>
          <button className="button-plus" onClick={() => createTask(newTask)}>
            <i className="fas fa-plus" />
          </button>
        </td>
        <td>
          <input
            type="text"
            className="input"
            autoFocus
            value={newTask}
            onChange={updateTask}
          />
        </td>
      </tr>
    </tfoot>
  );
};

export default TaskCreator;
