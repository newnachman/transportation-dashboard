import React from 'react';
import { LinearProgress } from '@material-ui/core';

const CarBar = (props) => {

  const {dataTypeName, data, dataSum} = props;

  return (
    <div className={`car-bar ${dataTypeName}`}>
      <div className="title-line">
        {dataTypeName}
      </div>
      <div className="bar-line">
        <div className="bar-element bar-img">
          <img src={`fill-${dataTypeName}.png`} alt={dataTypeName} />
        </div>
        <div className="bar-element bar-graphLine">
          <LinearProgress variant="determinate" value={data} valueBuffer={dataSum} />
        </div>
        <div className="bar-element bar-count">
          {data}
        </div>
      </div>
    </div>
  )
}

export default CarBar;
