// TodoForm.js
import React, { useState } from 'react';

const TodoForm = ({ addTask }) => {
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.trim()) return;
    addTask(task);
    setTask('');
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add a new task"
        className="todo-input"
      />
      <button type="submit" className="add-task-button">Add Task</button>
    </form>
  );
};

export default TodoForm;
