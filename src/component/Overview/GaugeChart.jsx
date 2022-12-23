import ReactSpeedometer from 'react-d3-speedometer';

export const WaterGaugeChart = ({ data }) => {
  
  return(<ReactSpeedometer
    maxValue={30}
    value={data.rate}
    // needleColor="red"#F2F7D1 #E1ED97
    startColor={data.startColor}
    segments={10}
    endColor={data.endColor}
    // textColor={textColor}
    paddingVertical={0}
  />)
  };
export default WaterGaugeChart;
