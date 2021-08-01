import React, { useEffect, useState } from 'react';
import UtilizationBarsWidget from './UtilizationBarsWidget';
import UtilizationTextWidget from './UtilizationTextWidget';
import { data as fetchedData} from '../dataSource/data';

const tabsIndex = {
  UTILIZATION_BAR: 0,
  UTILIZATION_TEXT: 1,
}

const dataSourceLength = fetchedData.length;

const TabPanelWrapper = (props) => {

  // Just value to decide which tab to render 
  const { tabValue } = props;
  
  // An index for retrieving different data every time
  const [dataIndex, setDataIndex] = useState(0);

  useEffect(() => {
    // Implementation of round-robin to display different data every 3s:
    const interval = setInterval(() => setDataIndex(prev => {
        console.log('prev', prev);
        return (prev + 1) % dataSourceLength
    }), 3000 );
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      {tabValue === tabsIndex.UTILIZATION_BAR &&
        <UtilizationBarsWidget data={fetchedData[dataIndex]}/>
      }
      {tabValue === tabsIndex.UTILIZATION_TEXT &&
        <UtilizationTextWidget data={fetchedData[dataIndex]}/>
      }
    </>
  )
}

export default TabPanelWrapper;
