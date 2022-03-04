import React, { useState } from 'react';
import Footer from './TodoFooter';
import Todo from './Todo';
import TodoForm from './TodoForm';
import TodoHeader from './TodoHeader';
import './Todo.css';

const TodoList = () => {
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

  //Local Storage
  React.useEffect(() => {
    const todoStore = JSON.parse(localStorage.getItem('todoStore'));
    if (todoStore) setTodos(todoStore);
  }, []);

  React.useEffect(() => {
    localStorage.setItem('todoStore', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => {
    const newTodo = {
      id: todos.length + 1,
      text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  //remove todo
  const handleRemove = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const clearTodos = () => {
    localStorage.clear();
    setTodos([]);
  };

  const todoLength = todos.length;

  return (
    <div className='container'>
      <div className='box'>
        <TodoHeader />
        <TodoForm handleAdd={addTodo} />
        <Todo todos={todos} handleRemove={handleRemove} setTodos={setTodos} />
        {todoLength > 0 && <Footer handleClear={clearTodos} todos={todos} />}
      </div>
    </div>
  );
};

export default TodoList;
