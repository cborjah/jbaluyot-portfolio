import React from 'react';

import '../stylesheets/home.scss';
import data from '../mockData/mockData';
import WorkTile from './WorkTile';

const headerText1 = 'Jessica is a Product Designer';
const headerText2 = 'based in Los Angeles, CA.';
const currentText = 'Product Designer at Hulu';
const previousText = 'Designer at Magento/eBay Enterprise';
const downloadText = 'Download resume';
const mainHeaderText = 'Selected Work';

const renderWorkTiles = () => {
  return data.workTiles.map(data => {
    return <WorkTile key={data.header} data={data} />;
  });
}

const Home = () => {
  return (
    <div className="container">
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
      <main>
        <h2>{mainHeaderText}</h2>
        {renderWorkTiles()}
      </main>
    </div>
  );
}

export default Home;
