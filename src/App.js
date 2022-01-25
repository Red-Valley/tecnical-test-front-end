import React from 'react';
import BuscadorTodo from './components/BuscadorTodo';
import ContadorTodo from './components/ContadorTodo';
import ListaTodo from './components/ListaTodo';
import ItemTodo from './components/ItemTodo';
import CrearTodo from './components/CrearTodo';

import './App.css';

const lista = [
  {text: 'Task 1', completed:false},
  {text: 'Task 2', completed:false},
  {text: 'Task 3', completed:false},
];


function App() {
  return (
    <React.Fragment>
      <BuscadorTodo/>
      <ContadorTodo/>
      <ListaTodo>
        {lista.map( todo=> (
          <ItemTodo/>
        ))}
      </ListaTodo>
      <button>+</button>
      <CrearTodo/>
    </React.Fragment>
  );
}

export default App;
