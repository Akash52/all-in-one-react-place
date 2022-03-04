import React from 'react';
import { FaTrashAlt, FaPencilAlt } from 'react-icons/fa';

const Todo = ({ todos, handleRemove }) => {
  //Toggle Todo (completed)

  //remove Todo (todo.id)

  return (
    <>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input
              type='checkbox'

              //Dont forget to add checked
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
