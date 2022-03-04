import React from 'react';
import { FaTrashAlt, FaPencilAlt } from 'react-icons/fa';

const Todo = ({ todos, handleRemove, setTodos }) => {
  const handleToggle = (id) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  return (
    <>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input
              type='checkbox'
              onChange={() => handleToggle(todo.id)}
              checked={todo.completed}
            />
            <span
              className={`profile-card ${todo.completed ? 'show' : 'hide'}`}
            >
              {todo.text}
            </span>
            <div className='icons'>
              <FaTrashAlt
                className='trash'
                onClick={() => handleRemove(todo.id)}
              />
              <FaPencilAlt className='edit' />
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Todo;
