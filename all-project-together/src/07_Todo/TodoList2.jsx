import React, { useState } from 'react';
import Footer from './TodoFooter';
import Todo from './Todo';
import TodoForm from './TodoForm';
import TodoHeader from './TodoHeader';
import './Todo.css';

const TodoList2 = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: 'Todo 1',
      completed: false,
    },
    {
      id: 2,
      text: 'Todo 2',
      completed: false,
    },
    {
      id: 3,
      text: 'Todo 3',
      completed: false,
    },
  ]);

  // Local Storage

  // Add Todo
  const addTodo = (text) => {
    setTodos([
      ...todos,
      {
        id: todos.length + 1,
        text,
        completed: false,
      },
    ]);
  };

  // Remove todo

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // Clear todos (local storage)

  // Todo length

  return (
    <div className='container'>
      <div className='box'>
        <TodoHeader />
        <TodoForm handleAdd={addTodo} />
        <Todo todos={todos} handleRemove={removeTodo} />
        <Footer />
      </div>
    </div>
  );
};

export default TodoList2;
