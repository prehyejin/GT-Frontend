import { useState, useEffect, useMemo } from 'react';
import styled from 'styled-components';
import Calendar from 'moedim';
// import DefaultWithNoConfig from '../Overview/GaugeChart';
import ReactSpeedometer from 'react-d3-speedometer';
import WaterStreamGraph from '../Overview/WaterStreamGraph';
import LineChart from '../Overview/LineChart';
import WaterLogoSrc from '../../img/Water_1.png';
import FacilityStructureSrc from '../../img/FacilityStructure.png';
import WaterGaugeChart from '../Overview/GaugeChart';
import GoogleMap from '../Overview/GoogleMap';

import { FaCircle } from 'react-icons/fa';
import { AiOutlineRight, AiOutlineLeft } from 'react-icons/ai';

import Select from '../Select';
import useFetch from '../../hooks/useFetch';

import Card from '@mui/material/Card';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import dayjs from 'dayjs';

import {
  initDistrictsWithCities,
  rawData,
  stream_data,
  con_water_rate,
  treated_water_rate,
  line_stream_data,
} from '../../constants/district';

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
const ReactSpeedometerWrapper = styled.div``;

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

const DayTextPicker = styled.div``;

const GagueChartComponent = ({ chartData, imageSrc, rateData }) => {
  return (
    <GaugeChartWrapper>
      <ReactSpeedometerWrapper>
        <WaterGaugeChart data={chartData}></WaterGaugeChart>
      </ReactSpeedometerWrapper>
      <WaterRateWrapper>
        <WaterLogo src={imageSrc} height={'1.6rem'} />
        <FlowRateWrapper>
          <FlowRateText>처리수 순간 유량(LPM)</FlowRateText>
          <FlowRateValue>{rateData}</FlowRateValue>
        </FlowRateWrapper>
      </WaterRateWrapper>
    </GaugeChartWrapper>
  );
};
function useSelectDistrict(districts = []) {
  const [selectedDistrict, setSelectedDistrict] = useState('');

  const currentDistrictWithCities = useMemo(
    () => districts.find(({ district }) => district === selectedDistrict),
    [selectedDistrict],
  );
  const cities = currentDistrictWithCities ? currentDistrictWithCities.cities : [];

  useEffect(() => {
    if (districts.length === 0) return; // undefined
    // TODO: selectedDistrict 초기값 설정, url 매핑
    setSelectedDistrict(districts[0]);
  }, []);

  return {
    selectedDistrict,
    setSelectedDistrict,
    cities,
  };
}

export default function NewMain() {
  const { data: districtsWithCities } = useFetch(initDistrictsWithCities, 300);

  const { selectedDistrict, cities, setSelectedDistrict } = useSelectDistrict(districtsWithCities);
  const [selectedCity, setSelectedCity] = useState('');
  const [calendar, setCalendar] = useState(new Date());

  const [day, setDay] = useState(Date());
  const districts = districtsWithCities?.map((districtWithCities) => districtWithCities.district);

  useEffect(() => {
    if (!districtsWithCities) return;
  }, [districtsWithCities]);

  return (
    <Contents>
      <OverviewWrapper>
        <SelectRow>
          <SelectLocation>
            <Select
              label="구역"
              onChangeSelected={({ target: { value } }) => {
                const district = districts.find((_district) => _district === value);
                setSelectedCity('');
                setSelectedDistrict(district);
              }}
              selected={selectedDistrict}
              items={districts}
            />
          </SelectLocation>
          {cities.length > 0 && (
            <SelectCity>
              <Select
                label="도시"
                onChangeSelected={({ target: { value } }) => {
                  const city = cities.find((_city) => _city.name === value);
                  setSelectedCity(city);
                }}
                selected={selectedCity?.name ?? ''}
                items={cities}
                itemKey={'name'}
                keyProperty={'cityId'}
              />
            </SelectCity>
          )}
        </SelectRow>

        {/* <LocationConnMonitorWrapper> */}

        {selectedDistrict && <Location> {selectedDistrict.toString()}</Location>}
        {selectedCity && selectedCity?.cityId && (
          <>
            <City> {selectedCity.name} </City>
            <ConnectionRow>
              <Connection> Connection </Connection>
              <ConnectionIconWrapper>
                <FaCircle color="springgreen"></FaCircle>
              </ConnectionIconWrapper>

              <OnWrapper> On</OnWrapper>
              <ConnectionIconWrapper>
                <FaCircle color="red"></FaCircle>
              </ConnectionIconWrapper>
              <OffWrapper> Off</OffWrapper>
            </ConnectionRow>
            <MonitoringText>Monitoring</MonitoringText>

            <hr />
            <MonitoringWrapper>
              <GaugeChartColumn>
                <GagueChartComponent
                  chartData={con_water_rate}
                  rateData={con_water_rate}
                  imageSrc={WaterLogoSrc}
                />
                <GagueChartComponent
                  chartData={treated_water_rate}
                  rateData={treated_water_rate}
                  imageSrc={WaterLogoSrc}
                />
              </GaugeChartColumn>
              {/* <Calendar value={calendar} onChange={(d) => setCalendar(d)} /> */}
              <DayTextPicker>
                <AiOutlineLeft
                  onClick={({ target: { prevday } }) => {
                    setDay((prevday) => dayjs(prevday).subtract(1, 'day'));
                  }}
                />
                {dayjs(day).format('YYYY-MM-DD')}
                <AiOutlineRight
                  onClick={({ target: { prevday } }) => {
                    setDay((prevday) => dayjs(prevday).add(1, 'day'));
                  }}
                />
              </DayTextPicker>
              <Card style={{ width: '40%', height: '20%', borderRadius: 10, marginLeft: '20px' }}>
                {/* <WaterGraphWrapper> */}
                <LineChartWrapper>
                  <LineChart data={line_stream_data}></LineChart>
                  {/* <WaterStreamGraph data={stream_data}></WaterStreamGraph> */}
                </LineChartWrapper>
                {/* </WaterGraphWrapper> */}
              </Card>
            </MonitoringWrapper>

            <hr />

            <CheckListText>Check List</CheckListText>
            <FacilityStructureImgWrapper>
              <FacilityStructureImg src={FacilityStructureSrc}></FacilityStructureImg>
            </FacilityStructureImgWrapper>
          </>
        )}
      </OverviewWrapper>
    </Contents>
  );
}
