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
  font-size: 12px;
`;

const City = styled.h2`
  font-family: Pretendard-Light;
  font-size: 30px;
`;

const Connection = styled.h2`
  font-family: Pretendard-Light;
  font-size: 18px;
  color: grey;
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
  color: Black;
`;

const ConnectionRow = styled.div`
  display: flex;
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
  justify-content: space-between;
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

const OverviewWrapper = styled.div``;

const WaterLogo = styled.img`
  height: 50px;
  width: 50px;
`;

const FacilityStructureImgWrapper = styled.div`
  width: 100%;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
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
  margin-top: -1rem;
`;

const CheckListText = styled.h2`
  font-family: Pretendard-Light;
  font-size: 40px;
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
  padding-top: 1rem;
  display: flex;
  /* ali */
`;

const WaterGraphHeader = styled.div`
  justify-content: space-between;
  display: flex;
  padding-bottom: 1rem;
`;

const WaterGraphCardWrapper = styled.div`
  width: 50vw;
`;

const OutlineIconWrapper = styled.div`
  padding-top: 0.3rem;
  &:hover {
    /* background-color: skyblue; */
    color: blue;
  }
`;

const CurrentSelectedTimeText = styled.h2`
  font-family: Pretendard-Light;
  font-size: 20px;
  color: Black;
  /* background-color: red; */
  /* padding */
  /* margin-bottom: 1rem; */
`;

const WaterGraphContainer = styled.div``;

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
}