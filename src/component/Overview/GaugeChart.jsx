import ReactSpeedometer from 'react-d3-speedometer';

export const WaterGaugeChart = ({ data }) => (
  <ReactSpeedometer
    maxValue={20}
    value={data}
    // needleColor="red"
    // startColor="green"
    segments={10}
    // endColor="blue"
    // textColor={textColor}
    height={200}
    paddingVertical={0}
  />
);
export default WaterGaugeChart;
