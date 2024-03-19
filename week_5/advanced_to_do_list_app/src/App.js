// App.js
import React, { useState } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (text) => {
    const newTask = {
      id: Math.random().toString(36).substr(2, 9),
      text,
      completed: false
    };
    setTasks([...tasks, newTask]);
  };

  const completeTask = (id) => {
    setTasks(tasks.map((task) => {
      if (task.id === id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    }));
  };

  const removeTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="app-container">
      <h1 className="app-title">Todo List</h1>
      <TodoForm addTask={addTask} />
      <TodoList
        tasks={tasks}
        completeTask={completeTask}
        removeTask={removeTask}
      />
    </div>
  );
};

export default App;
