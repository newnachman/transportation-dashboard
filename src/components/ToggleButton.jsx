import React, {useState} from 'react';

const ToggleButton = (props) => {

  const {widgetStripIsDisplayed, setWidgetStripIsDisplayed} = props;

  const toggleWidgetStrip = () => {
    setWidgetStripIsDisplayed(!widgetStripIsDisplayed);
  }

  return (
    <div 
      className={`toggle-button ${widgetStripIsDisplayed ? 'close' : 'open'}`} 
      title={` ${widgetStripIsDisplayed ? 'close' : 'open'} widget strip`}  
      onClick={toggleWidgetStrip}
    >
      <img src="down.png" className="toggle-arrow" alt=""></img>
    </div>
  )
}

export default ToggleButton;
