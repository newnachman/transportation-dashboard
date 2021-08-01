
import React, { useState, useRef } from 'react';
import CenterMapStrip from '../strips/CenterMapStrip';
import NavBarStrip from '../strips/NavBarStrip';
import WidgetStrip from '../strips/WidgetStrip';
import ToggleButton from "../ToggleButton";


const MainDashboard = () => {

  // Widget strip display status state
  const [widgetStripIsDisplayed, setWidgetStripIsDisplayed] = useState(false);

  // Sets if explanation-arrow is display or not (only on refresh page will display again) 
  const displayArrow = useRef(true)

  // Toggles the widget strip - display/not 
  const toggleWidgetStrip = () => {
    // On first click hide arrow
    if (displayArrow.current) {
      displayArrow.current = false;
    }
    setWidgetStripIsDisplayed(!widgetStripIsDisplayed);
  }

  console.log('displayArrow.current', displayArrow.current)

  return (
    <div className="container">
      { displayArrow.current &&
        <div className="explanation-arrow">
        <img src="note-arrow-tr.png" alt="explanation arrow" />
      </div>}
      <NavBarStrip/>
      <CenterMapStrip/>
      <WidgetStrip widgetStripIsDisplayed = {widgetStripIsDisplayed} />
      <ToggleButton widgetStripIsDisplayed = {widgetStripIsDisplayed} toggleWidgetStrip = {toggleWidgetStrip}/>
    </div>
  )
}

export default MainDashboard;


