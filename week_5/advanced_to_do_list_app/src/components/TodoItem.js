// TodoItem.js
import React from 'react';

const TodoItem = ({ task, completeTask, removeTask }) => {
  return (
    <div className="todo-item">
      <span
        style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
        className="task-text"
      >
        {task.text}
      </span>
      <button onClick={() => completeTask(task.id)} className="complete-button">
        {task.completed ? 'Undo' : 'Complete'}
      </button>
      <button onClick={() => removeTask(task.id)} className="remove-button">Remove</button>
    </div>
  );
};

export default TodoItem;
