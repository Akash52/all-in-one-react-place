import React from "react";
import Categories from "./Categories";
import data from "./data";
import Menu from "./Menu";
import "./Menu.css";

const MenuApp = () => {
  const [menuItem, setMenuItem] = React.useState(data);
  const [category, setCategory] = React.useState([]);

  const filterItems = (category) => {
    if (category === "all") {
      setMenuItem(data);
      return;
    }
    const newItems = menuItem.filter((item) => item.category === category);
    setMenuItem(newItems);
  };

  //   React.useEffect(() => {
  //     const getCategory = menuItem.map((item) => item.category);
  //     const uniqueCategory = [...new Set(getCategory)];
  //     setCategory(uniqueCategory);
  //   }, [menuItem]);

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Our Menu</h2>
          <div className="underline"></div>
        </div>
        <Categories filterItems={filterItems} />
        {menuItem.map((item) => (
          <Menu key={item.id} item={item} />
        ))}
      </section>
    </main>
  );
};

export default MenuApp;
