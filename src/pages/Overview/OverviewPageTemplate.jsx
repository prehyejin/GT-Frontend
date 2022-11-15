import { useState, useEffect, useMemo } from 'react';
import dayjs from 'dayjs';
import { FaCircle } from 'react-icons/fa';
import GaugeChart from 'react-gauge-chart';
import { Card, Tabs, Tab, Typography } from '@mui/material';

import {
  LineChart,
  BarChart,
  GaugeChart as WaterGaugeChart,
  GoogleMap,
  SelectItem,
  CalendarButton,
  PumpState,
  CircularGauge as CircularGaugeChart,
} from '../../component/Overview';

import useFetch from '../../hooks/useFetch';

import FacilityStructureSrc from '../../img/FacilityStructure.png';
import WaterLogoSrc from '../../img/Water_1.png';
import onIcon from '../../img/On.png';
import offIcon from '../../img/Off.png';

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
  ConnectionStatus,
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
  TreatedWaterText,
  TreatedCardContents,
  TreatedWaterTable,
  TreatedRow,
  // LeftAlignWrapper,
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
          <FlowRateText>처리수 순간 유량</FlowRateText>
          <FlowRateValue>{rateData}LPM</FlowRateValue>
        </FlowRateWrapper>
      </WaterRateWrapper>
    </GaugeChartWrapper>
  );
};

const timeOffset = {
  hour: 'day',
  day: 'month',
  month: 'year',
};
const rawLevelSwitchPosition = { left: '13.5%', bottom: '32%' };
const feedPumpPosition = { left: '24%', bottom: '32%' };
const roPumpPosition = { right: '40.5%', bottom: '32%' };
const drinkLevelSwitchPosition = { right: '14%', bottom: '32%' };

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

  const [connectionState, setConnectionState] = useState(true);

  const [rawLevelSwitch, setRawLevelSwitch] = useState(true);
  const [feedPump, setFeedPump] = useState(false);
  const [roPump, setRopump] = useState(true);
  const [drinkLevelSwitch, setDrinkLevelSwitch] = useState(false);

  return (
    <Contents>
      <OverviewWrapper>
        <SelectRow>
          <SelectLocation>
            <SelectItem
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
              <SelectItem
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

        {selectedFacility && selectedFacility?.id && (
          <>
            <TopWrapper>
              <ConnectionHeaderWrapper>
                {selectedDistrict && <Location> {selectedDistrict.name}</Location>}
                <City> {selectedFacility.name} </City>
                <ConnectionRow>
                  <Connection> Connection </Connection>
                  {/* <PumpState isOn={rawLevelSwitch} /> */}

                  <ConnectionStatus>
                    {connectionState ? (
                      <img src={onIcon} alt="on" height={19} />
                    ) : (
                      <img src={offIcon} alt="off" height={19} />
                    )}
                  </ConnectionStatus>

                  {/* <ConnectionIconWrapper>
                    <FaCircle color="springgreen"></FaCircle>
                  </ConnectionIconWrapper>

                  <OnWrapper> On</OnWrapper>
                  <ConnectionIconWrapper>
                    <FaCircle color="red"></FaCircle>
                  </ConnectionIconWrapper>
                  <OffWrapper> Off</OffWrapper> */}
                </ConnectionRow>
              </ConnectionHeaderWrapper>
              <MapWrapper>
                <GoogleMap data={selectedFacility.location}></GoogleMap>
                <LocationText>
                  위도: {selectedFacility.location.lat} / 경도: {selectedFacility.location.lon}
                </LocationText>
              </MapWrapper>
            </TopWrapper>

            <hr />
            <MonitoringText>Monitoring</MonitoringText>
            <MonitoringWrapper>
              <GaugeChartColumn>
                <GagueChartComponent
                  chartData={con_water_rate}
                  rateData={con_water_rate}
                  imageSrc={WaterLogoSrc}
                />
                {/* <CircularGaugeChart></CircularGaugeChart> */}
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
                    indicatorColor="primary"
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
              <div>
                <FacilityStructureImg src={FacilityStructureSrc}></FacilityStructureImg>

                <PumpState isOn={rawLevelSwitch} position={rawLevelSwitchPosition} />
                <PumpState isOn={feedPump} position={feedPumpPosition} />
                <PumpState isOn={roPump} position={roPumpPosition} />
                <PumpState isOn={drinkLevelSwitch} position={drinkLevelSwitchPosition} />
              </div>

              <TreatedWaterCardWrapper>
                <Card elevation={3}>
                  <TreatedCardContents>
                    <TreatedWaterText>Treated Water</TreatedWaterText>
                    <TreatedWaterTable>
                      <tr>
                        <td>Conductivity</td>
                        <td>0000</td>
                      </tr>
                      <tr>
                        <td>PH</td>
                        <td>0000</td>
                      </tr>
                    </TreatedWaterTable>
                  </TreatedCardContents>
                </Card>
              </TreatedWaterCardWrapper>

              {/* </LeftAlignWrapper> */}
            </FacilityStructureImgWrapper>
          </>
        )}
      </OverviewWrapper>
    </Contents>
  );
}
