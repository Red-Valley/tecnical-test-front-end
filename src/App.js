import logo from './logo.svg';
import './App.css';

const lista = [
  {text: 'Task 1', completed:false},
  {text: 'Task 2', completed:false},
  {text: 'Task 3', completed:false},
];


function App() {
  return (
    <div>
      <BuscadorTodo/>
      <ContadorTodo/>
      <ListaTodo>
        {lista.map( todo=> (
          <ItemTodo/>
        ))}
      </ListaTodo>
      <button>+</button>
      <CrearTodo/>
    </div>
  );
}

export default App;
