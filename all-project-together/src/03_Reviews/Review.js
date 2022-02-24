import React from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [currentPerson, setCurrentPerson] = React.useState(0);
  const { name, job, image, text } = people[currentPerson];

  const handleLeft = () => {
    if (currentPerson === 0) {
      setCurrentPerson(people.length - 1);
    } else {
      setCurrentPerson(currentPerson - 1);
    }
  };
  const handleRight = () => {
    if (currentPerson === people.length - 1) {
      setCurrentPerson(0);
    } else {
      setCurrentPerson(currentPerson + 1);
    }
  };

  const randomPerson = () => {
    const random = Math.floor(Math.random() * people.length);
    console.log(random);
    setCurrentPerson(random);
  };

  return (
    <div className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={handleLeft}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={handleRight}>
          <FaChevronRight />
        </button>
        <button onClick={randomPerson} className="random-btn">
          Suprise me
        </button>
      </div>
    </div>
  );
};

export default Review;
