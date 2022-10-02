import React from 'react';

import TodoItem from './TodoItem';
import { useContext } from 'react';
import { TodoContext } from './Store/todos-context';

const Todos:React.FC =()=>
{
const todosctx=    useContext(TodoContext)
   
    return(
        <ul>
           {todosctx.items.map((item)=>(
            <TodoItem key={item.id} text={item.text} onRemoveTodo={todosctx.removeTodo.bind(null,item.id)}/>
           ))}
        </ul>
    )
}

export default Todos;