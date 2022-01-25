import React from 'react';
import { BuscadorTodo } from './components/Buscador/BuscadorTodo';
import { ContadorTodo } from './components/Contador/ContadorTodo';
import { ListaTodo } from './components/Lista/ListaTodo';
import { ItemTodo } from './components/Lista/ItemTodo';
import { CrearTodo } from './components/Crear/CrearTodo';
import { Button } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const listaData = [
  {id: 1, text: 'Task 1: Realizar To-do', completed:false},
  {id: 2, text: 'Task 2: Testear To-do', completed:false},
  {id: 3, text: 'Task 3; enviar To-do', completed:false},
];


function App() {
  return (
    <React.Fragment>
      <Container>
        <Row>
          <Col>
            <BuscadorTodo/>
              <Button>+</Button>
            <CrearTodo/>
            <ContadorTodo/>
          </Col>
          <Col>
            <ListaTodo>
              {listaData.map( data=> (
                <ItemTodo key={data.id} text={data.text}/>
              ))}
            </ListaTodo>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}

export default App;
