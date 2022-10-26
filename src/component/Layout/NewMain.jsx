import { useState, useEffect, useMemo } from 'react';
import styled from 'styled-components';

// import DefaultWithNoConfig from '../Overview/GaugeChart';
import ReactSpeedometer from 'react-d3-speedometer';
import WaterStreamGraph from '../Overview/WaterStreamGraph';
import WaterLogoSrc from '../../img/Water_1.png';
import FacilityStructureSrc from '../../img/FacilityStructure.png';
import WaterGaugeChart from '../Overview/GaugeChart';

import Select from '../Select';
import useFetch from '../../hooks/useFetch';

import {
  initDistrictsWithCities,
  rawData,
  stream_data,
  con_water_rate,
  treated_water_rate,
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

const Off = styled.h2`
  font-family: Pretendard-Light;
  font-size: 18px;
  color: red;
`;
const On = styled.h2`
  font-family: Pretendard-Light;
  font-size: 18px;
  color: green;
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
        {selectedDistrict && <Location> {selectedDistrict.toString()}</Location>}
        {selectedCity && selectedCity?.cityId && (
          <>
            <City> {selectedCity.name} </City>
            <ConnectionRow>
              <Connection> Connection </Connection>
              <On> On</On>
              <Off> Off</Off>
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

              <WaterGraphWrapper>
                <div style={{ height: 400 }}>
                  <WaterStreamGraph data={stream_data}></WaterStreamGraph>
                </div>
              </WaterGraphWrapper>
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
