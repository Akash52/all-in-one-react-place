import React from 'react';

const Footer = ({ handleClear, todos, handleKey }) => {
  return (
    <>
      <p>
        You have {todos.filter((todo) => todo.completed === false).length} Todo
      </p>
      <button
        className='clear'
        onKeyDown={handleKey}
        onClick={() => handleClear()}
      >
        Clear
      </button>
    </>
  );
};

export default Footer;
