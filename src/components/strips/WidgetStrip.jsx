 
import "../../styles/widgetStrip.css";
import React, { useState } from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TabPanelWrapper from '../TabPanelWrapper';

const WidgetStrip = (props) => {
  
  const {widgetStripIsDisplayed} = props;
  const [tabValue, setTabValue] = useState(0);
  
  return (
    <div className={`strip widget-strip ${widgetStripIsDisplayed ? 'display' : ''}`}>
      <Tabs value={tabValue} onChange={(e, newValue)=>setTabValue(newValue)} centered>
        <Tab label="Utilization Bars" />
        <Tab label="Utilization Text" />
      </Tabs>

      <TabPanelWrapper tabValue={tabValue}/>
      
    </div>
  );
}

export default WidgetStrip;