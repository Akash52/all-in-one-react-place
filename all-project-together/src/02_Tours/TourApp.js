import React from "react";
import Loading from "./Loading";
import Tours from "./Tours";
import "./TourApp.css";

const url = "https://course-api.com/react-tours-project";

const TourApp = () => {
  const [tours, setTours] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  const fetchTours = async () => {
    const response = await fetch(url);
    const data = await response.json();

    setTours(data);
    setLoading(false);
  };
  React.useEffect(() => {
    fetchTours();
  }, []);

  if (loading) {
    return <Loading />;
  }
  if (tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>No tours available</h2>
          <button className="btn" onClick={fetchTours}>
            Add a tour
          </button>
        </div>
      </main>
    );
  }
  return (
    <>
      <section>
        <div className="title">
          <h2>All Tours</h2>
          <div className="underline"></div>
          {tours.map((tour) => (
            <Tours key={tour.id} tour={tour} handleRemove={removeTour} />
          ))}
        </div>
      </section>
    </>
  );
};

export default TourApp;
