import React, { useState } from 'react';
import ProductList from './ProductList';
import './App.css';
import AboutUs from './AboutUs';

function App() {
  const [showProductList, setShowProductList] = useState(false);

  const handleGetStartedClick = () => {
    setShowProductList(true);
  };

  return (
    <div className="app-container">
      <div className={`landing-page ${showProductList ? 'fade-out' : ''}`}>
        <div className="background-image"></div>
        <div className="content text-center text-white">
          <div className="landing_content container py-5">
            <h1 className="display-4 fw-bold">Welcome To Paradise Nursery</h1>
            <div className="divider mx-auto my-3"></div>
            <p className="lead fst-italic">Where Green Meets Serenity</p>
            <button
              className="btn btn-success btn-lg mt-4"
              onClick={handleGetStartedClick}
            >
              Get Started
            </button>
          </div>
          <div className="aboutus_container mt-5">
            <AboutUs />
          </div>
        </div>
      </div>
      <div
        className={`product-list-container ${showProductList ? 'visible' : ''}`}
      >
        <ProductList />
      </div>
    </div>
  );
}

export default App;
