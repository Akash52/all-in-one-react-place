import React from "react";

const Tours = ({ tour, handleRemove }) => {
  const [readMore, setReadMore] = React.useState(false);
  const { name, info, image, price, id } = tour;
  return (
    <main>
      <article className="single-tour">
        <img src={image} alt={name} />
        <footer>
          <div className="tour-info">
            <h3>{name}</h3>
            <h4>${price}</h4>
          </div>
          <p>
            {readMore ? (
              <>
                <span>{info}</span>
                <button onClick={() => setReadMore(false)}>Read Less</button>
              </>
            ) : (
              <>
                <span>{info.slice(0, 100)}</span>
                <button onClick={() => setReadMore(true)}>Read More</button>
              </>
            )}
          </p>
          <button className="delete-btn" onClick={() => handleRemove(id)}>
            not interested
          </button>
        </footer>
      </article>
    </main>
  );
};

export default Tours;
