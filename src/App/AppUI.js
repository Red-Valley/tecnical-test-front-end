import React from 'react';
import { TodoContext } from '../components/TodoContext';
import { TodoCounter } from '../components/TodoCounter';
import { TodoSearch } from '../components/TodoSearch';
import { TodoList } from '../components/TodoList';
import { TodoItem } from '../components/TodoItem';
import { TodoForm } from '../components/TodoForm';
import { TitleApp } from '../components/TitleApp';
import  Modal from '../components/Modal';

import Container from 'react-bootstrap/Container';
import Row  from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function AppUI() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
  } = React.useContext(TodoContext);
  
  return (
    <React.Fragment>
      <TitleApp/>
      <Container>
        <Row>
          <Col sm>
            <TodoCounter />
            <TodoSearch />
          </Col>
          <Col sm>
            <TodoList>
              {error && <p>Hay un error, Pero ya lo andamos resolviendo...</p>}
              {loading && <p>Estamos cargando nuestros objetivos, </p>}
              {(!loading && !searchedTodos.length) && <p>¡Crea tu primer Objetivo!</p>}
              
              {searchedTodos.map(todo => (
                <TodoItem
                  key={todo.text}
                  text={todo.text}
                  completed={todo.completed}
                  onComplete={() => completeTodo(todo.text)}
                  onDelete={() => deleteTodo(todo.text)}
                />
              ))}
            </TodoList>
            <TodoForm />
          </Col>
        </Row>
      </Container>
      <Modal></Modal>
    </React.Fragment>
  );
}

export { AppUI };
