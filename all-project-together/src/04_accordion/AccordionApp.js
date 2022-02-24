import React from "react";
import data from "./data";
import Question from "./Question";
import "./acorCss.css";

const AccordionApp = () => {
  const [activeQuestion, setActiveQuestion] = React.useState(data);

  return (
    <main>
      <div className="container">
        <h3>Accordion</h3>
        <section className="info">
          {activeQuestion.map((question) => (
            <Question key={question.id} question={question} />
          ))}
        </section>
      </div>
    </main>
  );
};

export default AccordionApp;
