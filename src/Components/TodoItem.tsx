import React from "react";



const TodoItem :React.FC <{text:string , onRemoveTodo:()=>void}> =(props)=>
{


       return(
        <div>
            {props.text}
           <button onClick={props.onRemoveTodo}>Delete</button>
        </div>
       )
}

export default TodoItem;