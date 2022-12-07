import styled from 'styled-components';

const Contents = styled.div`
  padding: 1.5rem;
`;

const SelectRow = styled.div`
  height: 70px;
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 10px;
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
  height: 20vh;
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
  padding: 1rem;
  justify-content: space-around;
`;

const GaugeChartColumn = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-evenly;
  gap: 2rem;
`;

const GaugeChartWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const OverviewWrapper = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`;

const WaterLogo = styled.img`
  height: 3.5rem;
  padding-right: 1rem;
  /* width: 50px; */
`;

const FacilityStructureImgWrapper = styled.div`
  width: 100%;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  position: relative;
  & > div {
    position: relative;
  }
`;
const FacilityStructureImg = styled.img`
  width: 100%;
`;

const FlowRateWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`;

const WaterRateWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
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
  height: 50vh;
  width: 110%;
`;

const DayTextPicker = styled.div`
  /* padding-top: 1rem; */
  display: flex;
  /* ali */
`;

const WaterGraphHeader = styled.div`
  justify-content: space-between;
  display: flex;
  padding-bottom: 1rem;
`;

const WaterGraphCardWrapper = styled.div`
  width: 55vw;
  max-width: 800px;
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

const WaterGraphContainer = styled.div``;

const ConnectionHeaderWrapper = styled.div``;

const MapWrapper = styled.div``;
const TopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left: 1rem;
`;
const TreatedWaterCardWrapper = styled.div`
  width: 20vw;
  max-width: 200px;
  justify-content: flex-end;
  /* height: 100px; */
  /* height: 100px; */
`;

const LocationText = styled.h2`
  font-family: Pretendard-Light;
`;

const TreatedWaterCardText = styled.h2`
  font-family: Pretendard-Light;
  font-size: 20px;
`;
const TreatedWaterText = styled.h2`
  font-size: 25px;
  font-family: Pretendard-Light;
  font-weight: bold;
`;

const TreatedCardContents = styled.div`
  padding: 15px;
  width: 20vw;
  height: 130px;
  /* height: 100px; */
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
  TreatedWaterCardWrapper,
  TreatedWaterCardText,
  DatePickerWrapper,
  DatePickerContainer,
  TreatedWaterText,
  TreatedCardContents,
  TreatedWaterTable,
  TreatedRow,
  // LeftAlignWrapper
};
