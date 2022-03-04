import React from 'react';

const Footer = ({ handleClear, todos }) => {
  return (
    <>
      <p>
        You have {todos.filter((todo) => todo.completed === false).length} Todo
      </p>
      <button className='clear' onClick={() => handleClear()}>
        Clear
      </button>
    </>
  );
};

export default Footer;
