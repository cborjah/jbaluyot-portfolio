import React from 'react';
import { Link } from 'react-router-dom';

import '../stylesheets/workTile.scss';

const cardButtonText = 'Category';

const WorkTile = props => {
  return (
    <div className="workContainer">
      <div className="workImage">
        Work
      </div>
      <div className="card">
        <div className="leftContainer">
          <h3>{props.data.header}</h3>
          <p>{props.data.description}</p>
          <Link to={"/"}>View Project</Link>
        </div>
        <button>
          {cardButtonText.toUpperCase()}
        </button>
      </div>
    </div>
  );
};

export default WorkTile;
