import React, { useState, useEffect } from 'react';
import './TabCSS.css';
import { FaAngleDoubleRight, FaChevronLeft } from 'react-icons/fa';

const url = 'https://course-api.com/react-tabs-project';

const TabApp = () => {
  const [loading, setLoading] = useState(true);
  const [tabs, setTabs] = useState([]);
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    fetchTabs();
  }, []);

  const fetchTabs = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setTabs(data);
    setLoading(false);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  const { company, dates, duties, title, jobs } = tabs[activeTab];
  console.log(company, dates, duties, title);

  return (
    <section className='section'>
      <div className='title'>
        <h2>Experience</h2>
        <div className='underline'></div>
      </div>
      <div className='jobs-center'>
        {/* btn container */}
        <div className='btn-container'>
          {tabs.map((job, index) => (
            <button
              key={index}
              className={`job-btn ${activeTab === index ? 'active' : ''}`}
              onClick={() => setActiveTab(index)}
            >
              {job.company}
            </button>
          ))}
        </div>

        <article className='job-info'>
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className='job-dates'>{dates}</p>
          {duties.map((duty, index) => (
            <div key={index} className='job-desc'>
              <FaAngleDoubleRight className='job-icon'></FaAngleDoubleRight>
              <p>{duty}</p>
            </div>
          ))}
        </article>
      </div>
    </section>
  );
};

export default TabApp;
