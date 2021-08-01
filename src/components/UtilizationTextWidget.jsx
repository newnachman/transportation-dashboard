
import React from 'react';

const UtilizationTextWidget = (props) => {
  const {data} = props;

  return (
    <div className="utilization-panel text-widget">
      <div className="card-header">
        <div className="header-text">
          {`utilization text`}
        </div>
      </div>
      <div className="title-line">
        {`available: ${data.available}`}
      </div>
      <div className="title-line">
        {`regular: ${data.regular}`}
      </div>
      <div className="title-line">
        {`carpool: ${data.carpool}`}
      </div>
    </div>
  )
}

export default UtilizationTextWidget;
