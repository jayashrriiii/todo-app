

import React from 'react'


/*    Display list   */


const TodoList = ({todos, setTodos, setEditTodo}) => 
{
    //compeleted
    const handleComplete = (todo) => {
        setTodos(todos.map((item) => {
                if(item.id === todo.id)
                {
                    return {...item, completed: !item.completed}
                }
                return item;
            })
        )
    }

    //edit
    const handleEdit = ({ id }) => {
        const findTodo = todos.find((value) => value.id === id);
        setEditTodo(findTodo);
    }

    //delete
    const handleDelete = ({ id }) => {
        setTodos(todos.filter((value) => value.id !== id));
    }

    return (
                <div className="ll">
                        {todos.map((value) => (
                            <li className="list-item" key={value.id}>
                                    <input type="text" value={value.title} className={`list ${value.completed ? "complete" : ""}`} onChange={(event) => event.preventDefault()}/>
                                    <div>
                                        <button className="button-complete task-button" onClick={() => handleComplete(value)}>
                                            <i className="fa fa-check-square-o"></i>
                                        </button>
                                        <button className="button-edit task-button" onClick={() => handleEdit(value)}>
                                            <i className="fa fa-pencil"></i>
                                        </button>
                                        <button className="button-delete task-button" onClick={() => handleDelete(value)}>
                                            <i className="fa fa-trash-o"></i>
                                        </button>
                                    </div>
                            </li>
                       ))} 
                </div>
                
           )
}



export default TodoList
