import styled from 'styled-components';
import SelectBasic from '../Overview/SelectList';
// import DefaultWithNoConfig from '../Overview/GaugeChart';
import ReactSpeedometer from 'react-d3-speedometer';
import WaterGraph from '../Overview/WaterGraph';
import WaterStreamGraph from '../Overview/WaterStreamGraph';

const Contents = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
`;

const Text = styled.h2`
  font-weight: 600;
  font-size: 20px;
  margin: 20px;
`;

const SelectRow = styled.div`
  height: 60px;
  width: 100px;
  display: flex;
  margin-bottom: 10px;
`;

const SelectLocation = styled.div`
  height: 20px;
  width: 100px;
  margin-right: 20px;
`;

const SelectCity = styled.div`
  height: 60px;
  width: 100px;
  margin-right: 20px;
`;

const Location = styled.h2`
  font-size: 12px;
`;

const City = styled.h2`
  font-size: 30px;
`;

const Connection = styled.h2`
  font-size: 12px;
  color: grey;
  margin-right: 10px;
`;

const Off = styled.h2`
  font-size: 12px;
  color: red;
  margin-left: 10px;
`;
const On = styled.h2`
  font-size: 12px;
  color: green;
`;
const MonitoringText = styled.h2`
  font-size: 40px;
  color: Black;
`;

const ConnectionRow = styled.div`
  display: flex;
`;
const ReactSpeedometerWrapper = styled.div`
  height: 180px;
`;

const FlowRateText = styled.h2`
  font-size: 16px;
  color: Black;
`;
const FlowRateValue = styled.h2`
  font-size: 25px;
  color: Black;
`;

const WaterGraphWrapper = styled.div`
  height: 400px;
  width: 600px;
`;

const MonitoringWrapper = styled.div`
  display: flex;
`;

const GaugeChartWrapper = styled.div``;

const GaugeChartColumn = styled.div``;

const OverviewWrapper = styled.div`
  margin: 30px;
`;

let raw_data = [
  {
    id: 'japan',
    color: 'hsl(112, 70%, 50%)',
    data: [
      {
        x: 'plane',
        y: 154,
      },
      {
        x: 'helicopter',
        y: 165,
      },
      {
        x: 'boat',
        y: 8,
      },
      {
        x: 'train',
        y: 97,
      },
      {
        x: 'subway',
        y: 188,
      },
      {
        x: 'bus',
        y: 121,
      },
      {
        x: 'car',
        y: 18,
      },
      {
        x: 'moto',
        y: 151,
      },
      {
        x: 'bicycle',
        y: 208,
      },
      {
        x: 'horse',
        y: 83,
      },
      {
        x: 'skateboard',
        y: 195,
      },
      {
        x: 'others',
        y: 137,
      },
    ],
  },
  {
    id: 'france',
    color: 'hsl(37, 70%, 50%)',
    data: [
      {
        x: 'plane',
        y: 133,
      },
      {
        x: 'helicopter',
        y: 24,
      },
      {
        x: 'boat',
        y: 161,
      },
      {
        x: 'train',
        y: 196,
      },
      {
        x: 'subway',
        y: 11,
      },
      {
        x: 'bus',
        y: 234,
      },
      {
        x: 'car',
        y: 4,
      },
      {
        x: 'moto',
        y: 174,
      },
      {
        x: 'bicycle',
        y: 125,
      },
      {
        x: 'horse',
        y: 148,
      },
      {
        x: 'skateboard',
        y: 195,
      },
      {
        x: 'others',
        y: 271,
      },
    ],
  },
  {
    id: 'us',
    color: 'hsl(346, 70%, 50%)',
    data: [
      {
        x: 'plane',
        y: 149,
      },
      {
        x: 'helicopter',
        y: 296,
      },
      {
        x: 'boat',
        y: 275,
      },
      {
        x: 'train',
        y: 100,
      },
      {
        x: 'subway',
        y: 216,
      },
      {
        x: 'bus',
        y: 282,
      },
      {
        x: 'car',
        y: 160,
      },
      {
        x: 'moto',
        y: 141,
      },
      {
        x: 'bicycle',
        y: 220,
      },
      {
        x: 'horse',
        y: 241,
      },
      {
        x: 'skateboard',
        y: 108,
      },
      {
        x: 'others',
        y: 59,
      },
    ],
  },
  {
    id: 'germany',
    color: 'hsl(279, 70%, 50%)',
    data: [
      {
        x: 'plane',
        y: 208,
      },
      {
        x: 'helicopter',
        y: 31,
      },
      {
        x: 'boat',
        y: 249,
      },
      {
        x: 'train',
        y: 215,
      },
      {
        x: 'subway',
        y: 106,
      },
      {
        x: 'bus',
        y: 71,
      },
      {
        x: 'car',
        y: 81,
      },
      {
        x: 'moto',
        y: 125,
      },
      {
        x: 'bicycle',
        y: 295,
      },
      {
        x: 'horse',
        y: 206,
      },
      {
        x: 'skateboard',
        y: 29,
      },
      {
        x: 'others',
        y: 196,
      },
    ],
  },
  {
    id: 'norway',
    color: 'hsl(176, 70%, 50%)',
    data: [
      {
        x: 'plane',
        y: 264,
      },
      {
        x: 'helicopter',
        y: 217,
      },
      {
        x: 'boat',
        y: 166,
      },
      {
        x: 'train',
        y: 124,
      },
      {
        x: 'subway',
        y: 117,
      },
      {
        x: 'bus',
        y: 5,
      },
      {
        x: 'car',
        y: 231,
      },
      {
        x: 'moto',
        y: 208,
      },
      {
        x: 'bicycle',
        y: 251,
      },
      {
        x: 'horse',
        y: 157,
      },
      {
        x: 'skateboard',
        y: 273,
      },
      {
        x: 'others',
        y: 242,
      },
    ],
  },
];

let stream_data = [
  {
    WaterProduction: 30,
  },
  {
    WaterProduction: 45,
  },
  {
    WaterProduction: 48,
  },
  {
    WaterProduction: 59,
  },
  {
    WaterProduction: 65,
  },
  {
    WaterProduction: 79,
  },
  {
    WaterProduction: 93,
  },
  {
    WaterProduction: 112,
  },
];

export default function NewMain() {
  return (
    <div>
      <OverviewWrapper>
        <SelectRow>
          <SelectLocation>
            <SelectBasic></SelectBasic>
          </SelectLocation>
          <SelectCity>
            <SelectBasic></SelectBasic>
          </SelectCity>
        </SelectRow>
        <Location> CPA 004 - 01</Location>
        <City> Kathandra </City>
        <ConnectionRow>
          <Connection> Connection </Connection>
          <On> On</On>
          <Off> Off</Off>
        </ConnectionRow>
        <MonitoringText>Monitoring</MonitoringText>
        <hr />
        <MonitoringWrapper>
          <GaugeChartColumn>
            <GaugeChartWrapper>
              <ReactSpeedometerWrapper>
                <ReactSpeedometer></ReactSpeedometer>
              </ReactSpeedometerWrapper>
              <FlowRateText>농축수 순간 유량(LPM)</FlowRateText>
              <FlowRateValue>0</FlowRateValue>
            </GaugeChartWrapper>

            <GaugeChartWrapper>
              <ReactSpeedometerWrapper>
                <ReactSpeedometer></ReactSpeedometer>
              </ReactSpeedometerWrapper>
              <FlowRateText>처리수 순간 유량(LPM)</FlowRateText>
              <FlowRateValue>0</FlowRateValue>
            </GaugeChartWrapper>
          </GaugeChartColumn>

          <WaterGraphWrapper>
            {/* <WaterGraph data={raw_data}></WaterGraph> */}
            <WaterStreamGraph data={stream_data}></WaterStreamGraph>
          </WaterGraphWrapper>
        </MonitoringWrapper>
      </OverviewWrapper>
    </div>
  );
}
