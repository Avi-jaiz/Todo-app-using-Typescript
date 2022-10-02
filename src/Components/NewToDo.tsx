import React, { useRef ,useContext } from "react";


import { TodoContext } from "./Store/todos-context";

const NewToDo: React.FC =()=>
{
 
const newtodoCtx = useContext(TodoContext)
    const inputRef =useRef<HTMLInputElement>(null);

const submitHandler=(e:React.FormEvent)=>
{
    e.preventDefault();

const enteredText = inputRef.current!.value;

if(enteredText.trim().length===0)
{
 
    return ;
}

 newtodoCtx.addTodo(enteredText)

}

   return (
    <div>

<form onSubmit={submitHandler}>
<label htmlFor="text">
    Todo Text
</label>
<input type='text' id="text" ref={inputRef}/>

<button>submit</button>

</form>

    </div>
   )
}

export default NewToDo;