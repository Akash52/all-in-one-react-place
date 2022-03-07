import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data.js';
import './SliderCSS.css';

const SliderApp = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [slides, setSlides] = useState(data);
  const [loading, setLoading] = useState(true);

  return (
    <section className='section'>
      <div className='title'>
        <h2>
          <span>/</span> reviews
        </h2>
      </div>
      <div className='section-center'>
        {slides.map((slide, index) => {
          const { id, image, name, title, quote } = slide;

          return (
            <article key={id}>
              <div className='slide-image'>
                <img src={image} alt={name} className='person-img' />
              </div>
              <div className='slide-info'>
                <h3>{name}</h3>
                <h4>{title}</h4>
                <p>{quote}</p>
              </div>
            </article>
          );
        })}
        <button
          className='prev'
          onClick={() => setActiveSlide(activeSlide - 1)}
        >
          <FiChevronLeft />
        </button>
        <button
          className='next'
          onClick={() => setActiveSlide(activeSlide + 1)}
        >
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
};

export default SliderApp;
