import React, { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');

  const addTask = () => {
    if (input.trim() === '') return;
    setTasks([{ text: input, completed: false }, ...tasks]);
    setInput('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      addTask();
    }
  };

  const toggleTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div className="app-container">
      <div className="top">
        <h1>To-Do:</h1>
        <div className="input-group">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Add a task..."
          />
          <button onClick={addTask}>⏎</button>
        </div>
      </div>

      <ul className="task-list">
        {tasks.map((task, index) => (
          <li
            key={index}
            onClick={() => toggleTask(index)}
            className="task-item"
          >
            <span className={task.completed ? 'completed' : ''}>{task.text}</span>
            <button
              className="delete-btn"
              onClick={(e) => {
                e.stopPropagation();
                deleteTask(index);
              }}
            >
              x
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
