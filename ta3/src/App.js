import './App.css';
import React, { useState } from 'react';

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]); 
      setNewTask(''); 
    }
  };

  const removeTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div id="container">
      <h1>Lista de Tareas</h1>
      <input
        type="text"
        placeholder="Escribe una tarea"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button id="tarea" onClick={addTask}>Agregar Tarea</button>

      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task} <button onClick={() => removeTask(index)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;