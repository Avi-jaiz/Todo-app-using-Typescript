import {createContext ,useState} from 'react';
import React from 'react';
import Todo from '../../Models/todo';


type TodosContextObj ={items:Todo[]
    addTodo:(text:string)=>void ; removeTodo:(id:string)=>void;
    }

export const TodoContext =React.createContext<TodosContextObj>({
    items: [],
    addTodo:()=>{},
    removeTodo:(id:string)=>{},
})

const TodosContextProvider :React.FC<{children:React.ReactNode}> =(props)=>
{

const [todos,setTodos] =useState<Todo[]>([]);



const addToDoHandler =(todoText:string)=>
{
    const newTodo =new Todo(todoText)

  setTodos((prevState)=>{
    return prevState.concat(newTodo)
  })
}

const removeTodoHandler =(todoId:string)=>
{
    setTodos((prevState)=>
    {
        return prevState.filter(todo=>todo.id!==todoId)
    })
}


const contextValue: TodosContextObj ={
    items:todos,
    addTodo:addToDoHandler,
    removeTodo:removeTodoHandler,
}

    return(
<TodoContext.Provider value={contextValue}>
   {props.children}
</TodoContext.Provider>
    )
}

export default TodosContextProvider;