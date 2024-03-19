// TodoList.js
import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ tasks, completeTask, removeTask }) => {
  return (
    <div className="todo-list">
      {tasks.map((task, index) => (
        <TodoItem
          key={index}
          task={task}
          completeTask={completeTask}
          removeTask={removeTask}
        />
      ))}
    </div>
  );
};

export default TodoList;
