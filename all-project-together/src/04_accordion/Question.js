import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const Question = ({ question }) => {
  const [open, setOpen] = useState(false);

  return (
    <article className="question">
      <header>
        <h2>{question.title}</h2>
        <button className="btn" onClick={() => setOpen(!open)}>
          {open ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {open && <p>{question.info}</p>}
    </article>
  );
};
export default Question;
