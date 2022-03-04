import React, { useState } from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';
import TodoHeader from './TodoHeader';
import './Todo.css';
import Footer from './TodoFooter';

const TodoList = () => {
  const [showForm, setShowForm] = useState(false);
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

  //function for current date

  const getDate = () => {
    const date = new Date();
    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    return date.toLocaleDateString('en-US', options);
  };

  //Local Storage
  React.useEffect(() => {
    let todoyDate = localStorage.getItem('date');
    console.log(todoyDate);
    let todos = localStorage.getItem('todos');

    //check if date is same as today
    if (JSON.parse(todoyDate) === getDate()) {
      //if same date, get todos from local storage
      setTodos(JSON.parse(todos));
    } else {
      //if not same date, set date to today and set todos to empty array
      setTodos([]);
      localStorage.setItem('todos', JSON.stringify(todos));
      localStorage.setItem('date', JSON.stringify(getDate()));
    }
  }, []);

  React.useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
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

  // const clearTodos = () => {
  //   localStorage.clear();
  //   setTodos([]);
  // };

  //Escape key
  const handleEscape = (e) => {
    if (e.keyCode === 27) {
      setShowForm(false);
    }
  };

  return (
    <div className='container'>
      <div className='box'>
        <TodoHeader />
        <Todo todos={todos} handleRemove={handleRemove} />
        {showForm ? (
          <TodoForm
            handleAdd={addTodo}
            handleKey={handleEscape}
            setShowForm={setShowForm}
          />
        ) : null}

        <div onClick={() => setShowForm(true)}>
          {!showForm && (
            <Footer
              todos={todos}
              // handleClear={clearTodos}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default TodoList;
