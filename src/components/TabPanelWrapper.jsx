import React, { useEffect, useState } from 'react';
import UtilizationBarsWidget from './UtilizationBarsWidget';
import UtilizationTextWidget from './UtilizationTextWidget';
import { data as fetchedData} from '../dataSource/data';

const tabsIndex = {
  UTILIZATION_BAR: 0,
  UTILIZATION_TEXT: 1,
}

const dataSourceLength = fetchedData.length;

// const sleep = (ms) => {return new Promise(r => setTimeout(r, ms));}

const TabPanelWrapper = (props) => {
  const { tabValue } = props;

  const [dataIndex, setDataIndex] = useState(0);

  // const fetchData = async ()=>{
  //   await sleep(3000);
  //   setDataIndex(prev=> {
  //     // console.log('prev', prev);
  //     // return (prev >= (dataSourceLength-1)? 0 : prev + 1);
  //     return (prev + 1) % dataSourceLength;
  //   });
  // }

  useEffect(() => {
    const interval = setInterval(() => setDataIndex(prev => {
        console.log('prev', prev);
        return (prev + 1) % dataSourceLength
    }), 3000 );
    return () => {
      clearInterval(interval);
    };
  }, []);

  // useEffect(()=>{
  //   // fetchData();
  //   setTimeout(()=>{
  //     setDataIndex(prev=> {
  //       console.log('prev', prev);
  //       // return (prev >= (dataSourceLength-1)? 0 : prev + 1);
  //       return (prev + 1) % dataSourceLength;
  //     });
  //   },3000);
  // },[dataIndex]);



  return (
    <>
      {/* <>
      {'aejbefjbekjbef  ' + fetchedData[1].available}
      </> */}
      {tabValue === tabsIndex.UTILIZATION_BAR &&
        <UtilizationBarsWidget dataIndex={dataIndex} fetchedData={fetchedData}/>
      }
      {tabValue === tabsIndex.UTILIZATION_TEXT &&
        <UtilizationTextWidget dataIndex={dataIndex} fetchedData={fetchedData}/>
      }
    </>
  )
}

export default TabPanelWrapper;
