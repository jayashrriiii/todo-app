

import React, {useEffect} from 'react'
import {v4 as uuidv4} from 'uuid';


/*    Form -  Textbox, button   */


const Form = ({input, setInput, todos, setTodos, editTodo, setEditTodo}) => 
{
    //update data function
    const updateTodo = (title, id, completed) =>
    {
        const newTodo = todos.map((value) => 
            value.id === id ? {title, id, completed} : value
        );
        setTodos(newTodo);
        setEditTodo("");
    };


    //after clicking edit button, text will have that previous text, else it will be empty
    useEffect(() => {
        if(editTodo)
        {
            setInput(editTodo.title);
        }
        else
        {
            setInput("")
        }
    }, [setInput, editTodo]);


    /*   save or edit  */
    const onFormSubmit = (event) =>
    {
        event.preventDefault();
        if(!editTodo)
        {
            //save
            setTodos([...todos, {id: uuidv4(), title: input, completed: false}]);
            setInput("");
        } 
        else
        {
            //update and save
            updateTodo(input, editTodo.id, editTodo.completed)
        }
    };


    /*   Enable writing in textbox   */
    const onInputChange = (event) =>
    {
        setInput(event.target.value);
    };

    return (
                <form onSubmit={onFormSubmit}>
                     <input type="text" placeholder="Enter a todo" className="task-input" value={input} onChange={onInputChange} />
                     <button className="button-add" type="submit">
                         {editTodo ? <i className="fa fa-pencil"></i> : <i className="fa fa-floppy-o"></i>}
                     </button>
                </form>
           )
}



export default Form
