import { useState, useEffect, useMemo } from 'react';
import dayjs from 'dayjs';
import { FaCircle } from 'react-icons/fa';
import GaugeChart from 'react-gauge-chart';
import { Card, Tabs, Tab, Typography } from '@mui/material';

import {
  LineChart,
  BarChart,
  WaterGaugeChart,
  GoogleMap,
  Select,
  CalendarButton,
} from '../../component/Overview';

import useFetch from '../../hooks/useFetch';

import FacilityStructureSrc from '../../img/FacilityStructure.png';
import WaterLogoSrc from '../../img/Water_1.png';

import {
  initDistrictsWithCities,
  con_water_rate,
  treated_water_rate,
} from '../../constants/district';
import * as waterstream from '../../constants/waterstream';

import {
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
  ConnectionIconWrapper,
  LineChartWrapper,
  WaterGraphHeader,
  WaterGraphCardWrapper,
  WaterGraphContainer,
  ConnectionHeaderWrapper,
  MapWrapper,
  TopWrapper,
  LocationText,
  TreatedWaterCardWrapper,
  TreatedWaterCardText,
} from './OverviewPage.style';

const GagueChartComponent = ({ chartData, imageSrc, rateData }) => {
  return (
    <GaugeChartWrapper>
      {/* <GaugeChart id="gauge-chart1" /> */}
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
function useSelectDistrict(districts = [], districtId) {
  const [selectedDistrict, setSelectedDistrict] = useState(null);
  /** selectedDistrict { id: 1, name: 'CPA 004', facilities: [ { id: 1, name: 'Kesra', }] } */

  useEffect(() => {
    if (!districtId) return; // null 처리

    const _selectedDistrict = districts.find(({ id }) => id === districtId);
    if (!_selectedDistrict) {
      return;
    }
    setSelectedDistrict(_selectedDistrict);
  }, [districtId]);

  return {
    selectedDistrict,
    setSelectedDistrict,
  };
}

const timeOffset = {
  hour: 'day',
  day: 'month',
  month: 'year',
};

export default function OverviewPageTemplate({
  districtId,
  changeDistrict,
  facilityId,
  changeFacility,
}) {
  const { data: districts } = useFetch(initDistrictsWithCities, 300);

  const selectedDistrict = districts?.find((_district) => _district.id === districtId);
  const facilities = selectedDistrict?.facilities ?? [];
  const selectedFacility = facilities.find(
    ({ id }) => id === facilityId,
  ); /** facility : { id: 4, name: 'Tokyo' } */ // facility | undefined

  const [day, setDay] = useState(new Date());

  const [timeunit, setTimeunit] = useState('hour');
  const handleChange = (event, newTimeunit) => {
    setTimeunit(newTimeunit);
  };

  const timeText = {
    hour: dayjs(day).format('YYYY-MM-DD'),
    day: dayjs(day).format('YYYY-MM'),
    month: dayjs(day).format('YYYY'),
  };

  const [calendarOpened, setCalendarOpened] = useState(false);

  const openCalendar = () => {
    setCalendarOpened(true);
  };

  const closeCalendar = () => {
    setCalendarOpened(false);
  };
  const handleChangeDate = (date) => {
    setDay(date);
    closeCalendar();
  };

  return (
    <Contents>
      <OverviewWrapper>
        <SelectRow>
          <SelectLocation>
            <Select
              label="구역"
              onChangeSelected={({ target: { value /* district.id */ } }) => {
                changeDistrict(value);
                changeFacility(null);
              }}
              selected={selectedDistrict ? selectedDistrict.id : ''}
              items={districts}
              itemKey="name"
              keyProperty="id"
            />
          </SelectLocation>
          {selectedDistrict && (
            <SelectCity>
              <Select
                label="도시"
                onChangeSelected={({ target: { value /* city.id */ } }) => {
                  changeFacility(value);
                }}
                selected={selectedFacility ? selectedFacility.id : ''}
                items={facilities}
                itemKey="name"
                keyProperty="id"
              />
            </SelectCity>
          )}
        </SelectRow>
        {selectedDistrict && <Location> {selectedDistrict.name}</Location>}
        {selectedFacility && selectedFacility?.id && (
          <>
            <TopWrapper>
              <ConnectionHeaderWrapper>
                <City> {selectedFacility.name} </City>
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
              </ConnectionHeaderWrapper>
              <MapWrapper>
                <GoogleMap data={selectedFacility.location}></GoogleMap>
                <LocationText>
                  위도: {selectedFacility.location.lat} / 경도: {selectedFacility.location.lon}
                </LocationText>
              </MapWrapper>
            </TopWrapper>

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
              <WaterGraphContainer>
                <WaterGraphHeader>
                  <Tabs
                    value={timeunit}
                    onChange={handleChange}
                    textColor="secondary"
                    indicatorColor="secondary"
                    aria-label="secondary tabs example"
                  >
                    <Tab value="hour" label="Hour" />
                    <Tab value="day" label="Day" />
                    <Tab value="month" label="Month" />
                  </Tabs>
                  <CalendarButton
                    day={day}
                    isCalendarOpened={calendarOpened}
                    closeCalendar={closeCalendar}
                    openCalendar={openCalendar}
                    onChangeDate={handleChangeDate}
                    timeText={timeText}
                    timeunit={timeunit}
                    addDay={() => {
                      setDay((prevday) => dayjs(prevday).subtract(1, timeOffset[timeunit]));
                    }}
                    subtractDay={() => {
                      setDay((prevday) => dayjs(prevday).add(1, timeOffset[timeunit]));
                    }}
                  />
                </WaterGraphHeader>
                <WaterGraphCardWrapper>
                  <Card>
                    <LineChartWrapper>
                      {timeunit === 'hour' ? (
                        <LineChart data={waterstream[timeunit]}></LineChart>
                      ) : (
                        <BarChart data={waterstream[timeunit]}></BarChart>
                      )}
                    </LineChartWrapper>
                  </Card>
                </WaterGraphCardWrapper>
              </WaterGraphContainer>
            </MonitoringWrapper>

            <hr />

            <CheckListText>Check List</CheckListText>
            <FacilityStructureImgWrapper>
              <div style={{ position: 'relative' }}>
                <FacilityStructureImg src={FacilityStructureSrc}></FacilityStructureImg>

                <div
                  style={{
                    fontSize: '1rem',
                    position: 'absolute',
                    right: '16%',
                    bottom: '33%',
                    display: 'flex',
                    gap: '1rem',
                    alignItems: 'center',
                  }}
                >
                  <div>ON</div>
                  <div>OFF</div>
                </div>
              </div>
              <Card>
                <TreatedWaterCardWrapper>
                  <Typography gutterBottom variant="h5" component="div">
                    Conductivity
                  </Typography>
                  <Typography gutterBottom variant="h5" component="div">
                    PH
                  </Typography>
                  {/* <TreatedWaterCardText></TreatedWaterCardText> */}
                  <TreatedWaterCardText></TreatedWaterCardText>
                </TreatedWaterCardWrapper>
              </Card>
            </FacilityStructureImgWrapper>
          </>
        )}
      </OverviewWrapper>
    </Contents>
  );
}
