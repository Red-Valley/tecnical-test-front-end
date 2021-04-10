import React from "react";
import { Table, Container, Row, Col } from "react-bootstrap";
import TaskList from "./components/TaskList";
import TaskCreator from "./components/TaskCreator";

function App() {
  const [items, setItems] = React.useState([]);
  const [dragAndDrop, setDragAndDrop] = React.useState({
    draggedFrom: null,
    draggedTo: null,
    isDragging: false,
    originalOrder: [],
    updatedOrder: [],
  });

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
      alert("There is already a task with this name");
    }
  };

  const removeTask = (task) =>
    setItems((items) => items.filter(({ title }) => title !== task));

  // the user starts to drag
  const onDragStart = (event) => {
    const initialPosition = Number(event.currentTarget.dataset.position);
    setDragAndDrop((drag) => ({
      ...drag,
      draggedFrom: initialPosition,
      isDragging: true,
      originalOrder: items,
    }));
    event.dataTransfer.setData("text/html", "");
  };

  // valid drop target
  const onDragOver = (event) => {
    event.preventDefault();
    let newList = dragAndDrop.originalOrder;
    const draggedFrom = dragAndDrop.draggedFrom;
    const draggedTo = Number(event.currentTarget.dataset.position);
    const itemDragged = newList[draggedFrom];
    const remainingItems = newList.filter((_, index) => index !== draggedFrom);

    newList = [
      ...remainingItems.slice(0, draggedTo),
      itemDragged,
      ...remainingItems.slice(draggedTo),
    ];

    if (draggedTo !== dragAndDrop.draggedTo) {
      setDragAndDrop((drag) => ({
        ...drag,
        updatedOrder: newList,
        draggedTo: draggedTo,
      }));
    }
  };

  //  draggable element is dropped
  const onDrop = () => {
    setItems(dragAndDrop.updatedOrder);
    setDragAndDrop((drag) => ({
      ...drag,
      draggedFrom: null,
      draggedTo: null,
      isDragging: false,
    }));
  };

  //  is moved out of a drop target
  const onDragLeave = () => {
    setDragAndDrop((drag) => ({ ...drag, draggedTo: null }));
  };

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
                onDragStart={onDragStart}
                onDragOver={onDragOver}
                onDrop={onDrop}
                onDragLeave={onDragLeave}
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
