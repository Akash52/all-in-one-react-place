import React from "react";
import List from "./List";
import data from "./data";
import "./Birthday.css";

const Birthday = () => {
  const [birthdays, setBirthdays] = React.useState(data);

  const handleDelete = () => {
    setBirthdays([]);
  };

  const removePerson = (id) => {
    const newBirthdays = birthdays.filter((birthday) => birthday.id !== id);
    setBirthdays(newBirthdays);
  };

  return (
    <main>
      {" "}
      <section className="container">
        <h3>{birthdays.length} Birthday todoy</h3>
        {birthdays.map((birthday) => (
          <List
            key={birthday.id}
            birthday={birthday}
            handleRemove={removePerson}
          />
        ))}
        <button onClick={handleDelete}>Clear All</button>
      </section>
    </main>
  );
};

export default Birthday;
