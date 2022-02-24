import React from "react";

const Menu = ({ item }) => {
  console.log(item);
  return (
    <article className="menu-item">
      <img src={item.img} alt={item.title} />
      <div className="item-info">
        <h3>{item.title}</h3>
        <p>{item.desc}</p>
        <p className="price">{item.price}</p>
        <button>Add to Cart</button>
      </div>
    </article>
  );
};

export default Menu;
