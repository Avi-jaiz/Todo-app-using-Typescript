import NewToDo from './Components/NewToDo';
import Todos from './Components/Todos';
import Todo from './Models/todo';
import { useState,useContext } from 'react';
import TodosContextProvider, {TodoContext} from '../src/Components/Store/todos-context';



function App() {

const ctx = useContext(TodoContext)
console.log(ctx)

  return (
    <div className="App">
<TodosContextProvider>
  <NewToDo />
  <Todos />

</TodosContextProvider>


    </div>
  );
}

export default App;
