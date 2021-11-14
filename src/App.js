
import React, {useState, useEffect} from 'react';
import './App.css';
import Header from './components/Header';
import Form from './components/Form';
import TodoList from './components/TodoList';




const App = () => 
{
          const initialState = JSON.parse(localStorage.getItem("todos")) || [];       //current data

          const [input, setInput] = useState("");

          const [todos, setTodos] = useState(initialState);        //data

          const [editTodo, setEditTodo] = useState(null);       //edited data

          //save data in browser's local storage
          useEffect(() => {
              localStorage.setItem("todos", JSON.stringify(todos));
          }, [todos]);

          return (
                     <div className="container">
                           <div className="app-wrapper">
                               <div>
                                   <Header/>
                               </div>
                               <div>
                                   <Form input={input} setInput={setInput} todos={todos} setTodos={setTodos} editTodo={editTodo} setEditTodo={setEditTodo} />
                               </div>
                               <div>
                                   <TodoList todos={todos} setTodos={setTodos} setEditTodo={setEditTodo} />
                               </div>
                               <div className="footer"></div>
                           </div>
                     </div>
                 );
}




export default App;
