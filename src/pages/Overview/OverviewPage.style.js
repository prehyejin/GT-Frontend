import styled from 'styled-components';

const Contents = styled.div`
  padding: 1.5rem;
  min-height: calc(100vh - 300px);
`;

const SelectRow = styled.div`
  height: 70px;
  display: flex;
  align-items: center;
  gap: 1rem;
  // padding: 10px;
`;

const SelectLocation = styled.div``;

const SelectCity = styled.div``;

const Location = styled.h2`
  font-family: Pretendard-Light;
  font-size: 20px;
  padding-top: 15px;
  /* padding-left: 3px; */
`;

const City = styled.h2`
  font-family: Pretendard-Light;
  font-size: 50px;
  font-weight: bolder;
`;

const Connection = styled.h2`
  font-family: Pretendard-Light;
  font-size: 20px;
  font-weight: bolder;
  color: grey;
  /* padding-left: 4px; */
`;

const OffWrapper = styled.h2`
  font-family: Pretendard-Light;
  font-size: 18px;
  color: red;
`;
const OnWrapper = styled.h2`
  font-family: Pretendard-Light;
  font-size: 18px;
  color: springgreen;
`;
const MonitoringText = styled.h2`
  font-family: Pretendard-Light;
  font-size: 40px;
  font-weight: bold;
  color: Black;
`;

const ConnectionRow = styled.div`
  display: flex;
`;
const ConnectionStatus = styled.div`
  padding-top: 0.4rem;
  padding-left: 0.4rem;
`;

const ReactSpeedometerWrapper = styled.div`
  height: 180px;
  width: 100%;

  & > div {
    height: 100%;
    width: 100%;
  }
`;

const FlowRateText = styled.h2`
  font-family: Pretendard-Light;
  font-size: 16px;
  color: #222222;
  font-weight: semibold;
`;
const FlowRateValue = styled.h2`
  font-family: Pretendard-Light;
  font-size: 25px;
  color: Black;
`;

const WaterGraphWrapper = styled.div`
  height: 100%;
  width: 500px;
`;

const MonitoringWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 600px;
  padding: 1rem 0;
`;

const GaugeChartColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  flex: 3;
  width: 100%;
  height: 100%;
  gap: 1.5rem;
`;

const GaugeChartWrapper = styled.div`
  width: auto;
  height: auto;
`;

const OverviewWrapper = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`;

const WaterLogo = styled.img`
  height: 3.5rem;
  padding-right: 1rem;
`;

const FacilityStructureImgWrapper = styled.div`
  width: 100%;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  position: relative;

  @media(max-width: 1100px){
    padding: 2rem;
  }

  @media(max-width: 950px){
    padding-bottom: 4rem;
  }
  @media(max-width:768px){
    padding: 1rem;
  }
`;
const FacilityStructureImg = styled.img`
  width: 100%;
`;

const FlowRateWrapper = styled.div`
`;

const WaterRateWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  padding: 0.5rem 0;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
`;

const CheckListText = styled.h2`
  font-family: Pretendard-Light;
  font-size: 40px;
  font-weight: bold;
  color: Black;
`;

const FontWrapper = styled.h2`
  font-family: Pretendard-Light;
`;

const ConnectionIconWrapper = styled.div`
  padding-left: 0.4rem;
  padding-right: 0.2rem;
  padding-top: 0.3rem;
`;

const LineChartWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const DayTextPicker = styled.div`
  display: flex;
`;

const WaterGraphHeader = styled.div`
  justify-content: space-between;
  display: flex;
  padding-bottom: 1rem;
  width: 100%;
`;

const WaterGraphCardWrapper = styled.div`
  height: calc(100% - 2rem);
  width: 100%;
`;

const OutlineIconWrapper = styled.div`
  &:hover {
    color: blue;
  }
  display: flex;
  align-items: center;
`;

const CurrentSelectedTimeText = styled.button`
  font-family: Pretendard-Light;
  font-size: 16px;
  color: black;
  cursor: pointer;
  border: none;

  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  padding: 0 10px;
`;

const DatePickerWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const DatePickerContainer = styled.div`
  position: absolute;
  top: 45px;
  right: -20px;
  z-index: 1;
  width: 210px;
  display: flex;
  justify-content: center;
  align-items: center;

  .custom-calendar {
    width: 100%;
    display: flex;
  }
`;

const WaterGraphContainer = styled.div`
  flex: 7;
  width: 70%;
  height: 100%;
`;

const ConnectionHeaderWrapper = styled.div``;

const MapWrapper = styled.div``;
const TopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
const TreatedWaterInfoWrapper = styled.div`
  display:flex;
  
  gap: 0.5rem;
  font-size:1.2rem;
  font-family: Pretendard-Light;
`;

const LocationText = styled.h2`
  font-family: Pretendard-Light;
`;

const TreatedWaterCardText = styled.h2`
  font-family: Pretendard-Light;
  font-size: 20px;
`;
const TreatedWaterText = styled.h2`
  font-size: 1.6rem;
  font-family: Pretendard-Light;
  
  // font-weight: bold;
  margin-right: 1rem;
`;

const TreatedCardContents = styled.div`
  padding: 15px;
  height: 130px;
`;

const TreatedRow = styled.div`
  display: flex;
`;
const TreatedWaterTable = styled.table`
  tr {
    /* background-color: #c2c2c2; */
    margin: 0px 20px;
  }
  td {
    padding: 3px;
    font-size: 1.2rem;
  }
  td:nth-child(2) {
    /* color: red; */
    padding-left: 20px;
  }
  /* border: 3px solid purple; */
  padding: 10px;
  color: #444444;
  font-family: Pretendard-Light;

  /* height: 100px; */
`;
// const LeftAlignWrapper = styled.div`
// /* justify-content: flex-end; */
// /* height: 100px; */

// `;

export {
  Contents,
  SelectRow,
  SelectLocation,
  SelectCity,
  Location,
  City,
  Connection,
  OffWrapper,
  OnWrapper,
  MonitoringText,
  ConnectionRow,
  ConnectionStatus,
  ReactSpeedometerWrapper,
  FlowRateText,
  FlowRateValue,
  WaterGraphWrapper,
  MonitoringWrapper,
  GaugeChartColumn,
  GaugeChartWrapper,
  OverviewWrapper,
  WaterLogo,
  FacilityStructureImgWrapper,
  FacilityStructureImg,
  FlowRateWrapper,
  WaterRateWrapper,
  CheckListText,
  FontWrapper,
  ConnectionIconWrapper,
  LineChartWrapper,
  DayTextPicker,
  WaterGraphHeader,
  WaterGraphCardWrapper,
  OutlineIconWrapper,
  CurrentSelectedTimeText,
  WaterGraphContainer,
  MapWrapper,
  ConnectionHeaderWrapper,
  TopWrapper,
  LocationText,
  TreatedWaterInfoWrapper,
  TreatedWaterCardText,
  DatePickerWrapper,
  DatePickerContainer,
  TreatedWaterText,
  TreatedCardContents,
  TreatedWaterTable,
  TreatedRow,
  // LeftAlignWrapper
};
