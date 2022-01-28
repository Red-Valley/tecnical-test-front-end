import React  from 'react';
import { TodoContext } from '../components/TodoContext';
import { TodoCounter } from '../components/TodoCounter';
import { TodoSearch } from '../components/TodoSearch';
import { TodoList } from '../components/TodoList';
import { TodoItem } from '../components/TodoItem';
import { TodoForm } from '../components/TodoForm';
import { TitleApp } from '../components/TitleApp';

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
    <React.Fragment >
      <TitleApp/>
      <Container className='App'>
        <Row>
          <Col sm className='izquierda'>
            <TodoSearch />
            <TodoCounter />
          </Col>
          <Col sm>
              <TodoList >
                {error && <p className='Textp'>Hay un errooorrr, acaben con tooooodo...</p>}
                {loading && <p className='Textp'>Cargando..... </p>}
                {(!loading && !searchedTodos.length) }
                      {searchedTodos.map(todo => (
                          <TodoItem
                            key={todo.text}
                            text={todo.text}
                            completed={todo.completed}
                            onComplete={() => completeTodo(todo)}
                            onDelete={() => deleteTodo(todo.text)}
                          />
                      ))}
              </TodoList>
              <TodoForm />
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}

export { AppUI };


