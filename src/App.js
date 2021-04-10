import React from "react";
import { Table, Container, Row, Col } from "react-bootstrap";
import TaskList from "./components/TaskList";
import TaskCreator from "./components/TaskCreator";

function App() {
  const [items, setItems] = React.useState([{ title: "to run ", done: true }]);

  const toggleChecked = (task) => {
    setItems((item) =>
      item.map((element) =>
        element.title === task.title
          ? { ...element, done: !element.done }
          : element
      )
    );
  };

  const addTask = (taskName) => {
    if (!items.find(({ title }) => title === taskName)) {
      setItems([...items, { title: taskName, done: false }]);
    } else {
      alert("La tarea ya esta");
    }
  };

  const removeTask = (task) =>
    setItems((items) => items.filter(({ title }) => title !== task));

  return (
    <Container>
      <Row sm={2} className="justify-content-center">
        <Col>
          <Table bordered size="sm">
            <thead className="header">
              <tr>
                <th>{""}</th>
                <th>{"ToDo List"}</th>
              </tr>
            </thead>
            <tbody>
              <TaskList
                items={items}
                toggleChecked={toggleChecked}
                removeTask={removeTask}
              />
            </tbody>
            <TaskCreator addTask={addTask} />
          </Table>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
