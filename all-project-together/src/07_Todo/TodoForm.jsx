import React from 'react';
import Footer from './TodoFooter';

const TodoForm = ({ handleAdd, setShowForm }) => {
  const [text, setText] = React.useState('');

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length > 0) {
      handleAdd(text);
      setText('');
    }
  };

  const keyEvent = (e) => {
    if (e.key === 'Enter') {
      setShowForm(false);
    }
    console.log('keyEvent', e.key);
  };

  return (
    <>
      <form className='form' onSubmit={handleSubmit}>
        <input
          className='formInput'
          value={text}
          type='text'
          onChange={handleChange}
          placeholder='Add Todo'
          onKeyDown={keyEvent}
        />
        <button type='submit'>Add</button>
      </form>
      <div>
        <h1>Hello Wolrd!</h1>
      </div>
    </>
  );
};

export default TodoForm;
