import React from "react";

const List = ({ birthday, handleRemove }) => {
  const { name, age, image, id } = birthday;

  return (
    <article className="person">
      <img src={image} alt={name} />
      <h4 onDoubleClick={() => handleRemove(id)}>{name}</h4>
      <p>{age}</p>
    </article>
  );
};

export default List;
