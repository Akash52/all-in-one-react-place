import React from "react";

const AddForm = ({ handleAdd }) => {
  const [name, setName] = React.useState("");
  const [age, setAge] = React.useState("");
  const [image, setImage] = React.useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "name") {
      setName(value);
    } else if (name === "age") {
      setAge(value);
    } else if (name === "image") {
      setImage(value);
    }
  };

  return (
    <form className="addForm" onChange={handleChange}>
      <input
        type="text"
        value={name}
        onChange={handleChange}
        placeholder="Name"
      />
      <input
        type="number"
        value={age}
        onChange={handleChange}
        placeholder="Age"
      />
      <input type="text" value={image} placeholder="Image" />
      <button>Add</button>
    </form>
  );
};

export default AddForm;
