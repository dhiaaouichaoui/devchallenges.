import React, { useState,useEffect } from 'react';
import Image from './image'
import Navigation from './Nav';
import Todo from './Todo';
import AddTask from './Addtask';
import { BrowserRouter as Router } from 'react-router-dom';

import './App.css';
const LOCALTORAGE = 'todoApp.todos'

function App() {

  const [todo,setTodo] = useState([])

  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useState([
   
  ]);
  useEffect(() => {
    const storedTodos= JSON.parse(localStorage.getItem(LOCALTORAGE))
    if (storedTodos) setTodos(storedTodos)
   }, [])
   
   useEffect(() => {
     localStorage.setItem(LOCALTORAGE, JSON.stringify(todos))
   }, [todos])

  let currentTodos = todos;
  
  
  const handleSubmit = () => {
    const id = Math.floor(Math.random() * 10000);
    const currentElement = {
      task: inputValue,
      isActive: true,
      id,
    };
    const newTodos = todos.concat(currentElement);
    setTodos(newTodos);
    setInputValue('');
  };
  
  const handleChange = event => {
    setInputValue(event.target.value);
  };
  
  const handleCheckboxChange = id => {
    currentTodos.forEach(todo => {
      if (todo.id === id) {
        todo.isActive = !todo.isActive;
      }
    });
    setTodos(currentTodos);
  };
  const handleDeleteTask = id => {
    currentTodos = currentTodos.filter(todo => todo.id !== id);
    setTodos(currentTodos);
  };
  const handleDeleteAll = () => {
    currentTodos = currentTodos.filter(todo => todo.isActive);
    setTodos(currentTodos);
  };
 
  return (
    <div className='container'>
      <Router>
        
        <Navigation />
        <AddTask
          value={inputValue}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
        <Todo
          todos={todos}
          handleCheckboxChange={handleCheckboxChange}
          handleDeleteTask={handleDeleteTask}
          handleDeleteAll={handleDeleteAll}
        />
        
      </Router>
      <Image/>
      
    </div>
  );
}

export default App;