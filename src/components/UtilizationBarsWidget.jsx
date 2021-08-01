
import React from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import CarBar from './CarBar';


const UtilizationBarsWidget = (props) => {

  const {dataIndex, fetchedData } = props;
  const data = fetchedData[dataIndex];
  const dataSum = data.available + data.regular + data.carpool;

  return (
    <div className="utilization-panel">
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
