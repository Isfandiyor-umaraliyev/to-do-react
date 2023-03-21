import { useState } from "react";
import "./Form.css";

function Form({ getData }) {
    const [todo, setTodo] = useState('')
    
    const handleSubmit = (e) => {
        e.preventDefault()
        if(todo !== ' '){
            let item = {
                id:  Date.now(),
                text : todo,
                selected: false
            }
            getData((prev)=>{
                return[...prev,item]
            })
            setTodo('')
        }
        else{
            alert('Please enter some text!')
         
        }
        
    }
    return <form className="form" onSubmit={handleSubmit}>
        <input
            type="text"
            className="input"
            placeholder="Add new list item"
            required
            autoComplete="off"
            autoFocus
            onChange={(e) => {
                setTodo(e.target.value)
            }}
            value={todo}

        />
        <button className="btn">Add</button>
    </form>;
}

export default Form;
