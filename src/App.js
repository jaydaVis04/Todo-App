import React, { useState, useEffect } from 'react';
import './App.css';

function ToDoApp() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');

  const addTask = () => {
    if (input.trim() === '') return;
    setTasks([...tasks, { text: input, done: false }]);
    setInput('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') addTask();
  };

  const toggleDone = (index) => {
    const newTasks = [...tasks];
    newTasks[index].done = !newTasks[index].done;
    setTasks(newTasks);
  };

  const deleteTask = (index) => {
  const newTasks = tasks.filter((_, i) => i !== index);
  setTasks(newTasks);
};

const deleteAllTasks = () => {
  setTasks([]);
};

  return (
    <div className="app">
      <h1 className="glow">To-Do List</h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="Type a task..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button onClick={addTask}>Add</button>
        <button className="delete-all" onClick={deleteAllTasks}>Delete All</button>
      </div>
      <ul className="task-list">
        {tasks.map((task, index) => (
          <li
            key={index}
            className={`task ${task.done ? 'done' : ''}`}
            onClick={() => toggleDone(index)}
          >
            {task.text}
            <span className="delete" onClick={(e) => { e.stopPropagation(); deleteTask(index); }}>✖</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoApp;