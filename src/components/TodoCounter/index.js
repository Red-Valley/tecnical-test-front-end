import React from 'react';

import { TodoContext } from '../TodoContext';
import './TodoCounter.css';
import ProgressBar from 'react-bootstrap/ProgressBar'

function TodoCounter() {
  const { totalTodos, completedTodos } = React.useContext(TodoContext);
  const percent = (completedTodos*100)/totalTodos;
  
  return (
    <div>
      <ProgressBar className="Progress" striped variant="success" animated now={percent} />
      <img className="img" src={process.env.PUBLIC_URL + '/Assets/objetive.png'} alt="to complete to objetive"/>
      {
        totalTodos?
        <h2 className="TodoCounter">Has completado {completedTodos} de {totalTodos} Objetivos</h2>
        :<h2 className="TodoCounter">No tenemos Objetivos por ahora, vamos a hacerlo</h2>
      }
    </div>
  
    );
}

export { TodoCounter };
