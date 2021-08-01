
import React from 'react';
import CarBar from './CarBar';


const UtilizationBarsWidget = (props) => {

  const {data} = props;
  const dataSum = data.available + data.regular + data.carpool;

  return (
    <div className="utilization-panel bars-widget">
      <div className="card-header">
        <div className="header-text">
          {`utilization (${dataSum})`}
        </div>
      </div>
      <CarBar dataTypeName={'available'} data={data.available} dataSum={dataSum} />
      <CarBar dataTypeName={'regular'} data={data.regular} dataSum={dataSum} />
      <CarBar dataTypeName={'carpool'} data={data.carpool} dataSum={dataSum} />
    </div>
  )
}

export default UtilizationBarsWidget;
