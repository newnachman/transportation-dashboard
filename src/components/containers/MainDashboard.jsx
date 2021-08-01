
import React, { useState } from 'react';
import CenterMapStrip from '../strips/CenterMapStrip';
import NavBarStrip from '../strips/NavBarStrip';
import WidgetStrip from '../strips/WidgetStrip';
import ToggleButton from "../ToggleButton";


const MainDashboard = () => {

  const [widgetStripIsDisplayed, setWidgetStripIsDisplayed] = useState(false);

  return (
    <div className="container">
      <NavBarStrip/>
      <CenterMapStrip/>
      <WidgetStrip widgetStripIsDisplayed = {widgetStripIsDisplayed} />
      <ToggleButton widgetStripIsDisplayed = {widgetStripIsDisplayed} setWidgetStripIsDisplayed = {setWidgetStripIsDisplayed}/>
    </div>
  )
}

export default MainDashboard;


