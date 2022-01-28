import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoForm.css';

function TodoForm() {
  const [newTodoValue, setNewTodoValue] = React.useState('');
  const {
    addTodo,
  } = React.useContext(TodoContext);
  
  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    newTodoValue ? addTodo(newTodoValue): alert('No se puede agregar un objetivo vacío');
    setNewTodoValue('');

  };

  return (
    <form onSubmit={onSubmit}>
      <div className='TodoItem'>
        <input
              placeholder='¿Cúal es nuestro siguiente Objetivo?'
              value={newTodoValue}
              onChange={onChange}
              name='text'
              className='todo-input edit'
        />
        <button
          type="submit"
          className="TodoForm-button TodoForm-button--add"
        >
          +
        </button>
      </div>
    </form>
  );
}

export { TodoForm };
