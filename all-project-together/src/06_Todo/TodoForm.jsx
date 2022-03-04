import React from 'react';

const TodoForm = ({ handleAdd }) => {
  const [text, setText] = React.useState('');
  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text) return;
    handleAdd(text);
    setText('');
  };

  return (
    <>
      <form className='form' onSubmit={handleSubmit}>
        <input
          className='formInput'
          value={text}
          onChange={handleChange}
          type='text'
          placeholder='Add Todo'
        />
        <button type='submit'>Add</button>
      </form>
    </>
  );
};

export default TodoForm;
