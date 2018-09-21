import React from 'react';
import '../stylesheets/home.scss';

const headerText1 = 'Jessica is a Product Designer';
const headerText2 = 'based in Los Angeles, CA.';
const currentText = 'Product Designer at Hulu';
const previousText = 'Designer at Magento/eBay Enterprise';
const downloadText = 'Download resume';

const Home = () => {
  return (
    <header>
      <h1>{headerText1}<br />{headerText2}</h1>
      <div className="textContainer">
        <div className="current">
          <h4>Current</h4>
          <span>{currentText}</span>
        </div>
        <div className="previous">
          <h4>Previous</h4>
          <span>{previousText}</span>
        </div>
      </div>
      <button>
        {downloadText}
      </button>
    </header>
  );
}

export default Home;
