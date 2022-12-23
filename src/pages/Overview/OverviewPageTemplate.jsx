import { useState  } from 'react';
import { useQuery } from '@tanstack/react-query';
import dayjs from 'dayjs';
import { Card, Tabs, Tab } from '@mui/material';

import {
  LineChart,
  BarChart,
  GaugeChart as WaterGaugeChart,
  GoogleMap,
  SelectItem,
  CalendarButton,
  PumpState,
} from '../../component/Overview';

import useFetch from '../../hooks/useFetch';

import FacilityStructureSrc from '../../img/FacilityStructure.png';
import WaterLogoSrc from '../../img/Water_1.png';
import onIcon from '../../img/On.png';
import offIcon from '../../img/Off.png';


import axios from 'axios';

import {
  Contents,
  SelectRow,
  SelectLocation,
  SelectCity,
  Location,
  City,
  Connection,
  ConnectionStatus,
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
  WaterGraphHeader,
  WaterGraphCardWrapper,
  WaterGraphContainer,
  ConnectionHeaderWrapper,
  MapWrapper,
  TopWrapper,
  LocationText,
  TreatedWaterInfoWrapper,
  TreatedWaterText,
  TreatedCardContents,
  TreatedWaterTable,
  // LeftAlignWrapper,
} from './OverviewPage.style';

const GagueChartComponent = ({ chartColor, chartData, imageSrc, rateData, text }) => {
  const gaugeData = {
    startColor: chartColor.start,
    endColor: chartColor.end,
    rate: chartData
  }
  return (
    <GaugeChartWrapper>
      <ReactSpeedometerWrapper>
        <WaterGaugeChart data={gaugeData}></WaterGaugeChart>
      </ReactSpeedometerWrapper>
      <WaterRateWrapper>
        <WaterLogo src={imageSrc} height={'1.6rem'} />
        <FlowRateWrapper>
          <FlowRateText>{text}</FlowRateText>
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
  const { data: districts } = useFetch('/api/v1/status');
  const { data: waterStreamHour } = useFetch('/waterGraphHour');
  const { data: waterStreamDay } = useFetch('/waterGraphDay');
  const { data: waterStreamMonth } = useFetch('/waterGraphMonth');

  const selectedDistrict = districts?.find((_district) => _district.id === districtId);
  const facilities = selectedDistrict?.facilities ?? [];
  const selectedFacility = facilities.find(
    ({ id }) => id === facilityId,
  ); /** facility : { id: 4, name: 'Tokyo' } */ // facility | undefined

  const [timeunit, setTimeunit] = useState('hour'); /** hour | day | month */
  const [day, setDay] = useState(new Date());
  const timeText = {
    hour: dayjs(day).format('YYYY-MM-DD'),
    day: dayjs(day).format('YYYY-MM'),
    month: dayjs(day).format('YYYY'),
  };

  const { data: overview } = useQuery(
    ['facilityId', selectedFacility?.id, timeunit, timeText[timeunit]],
    async () => {
      const baseUrl = 'http://175.125.92.118:3001';
      const queries = `facilityId=${selectedFacility.id}&timeunit=${timeunit}&time=${timeText[timeunit]}`;
      const { data } = await axios.get(baseUrl + `/allAboutFacility?${queries}`);
      return data;
    },

    {
      enabled: !!selectedFacility?.id,
      cacheTime: 0,
    },
  );

  console.log('facility overview', overview);

  const handleChange = (event, newTimeunit) => {
    setTimeunit(newTimeunit);
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
                label="장비"
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

        {overview && overview?.facilityId && (
          <>
            <TopWrapper>
              <ConnectionHeaderWrapper>
                <Location> {selectedDistrict.name}</Location>
                <City> {overview.facilityName} </City>
                <ConnectionRow>
                  <Connection> Connection </Connection>
                  <ConnectionStatus>
                    {overview.connection ? (
                      <img src={onIcon} alt="on" height={19} />
                    ) : (
                      <img src={offIcon} alt="off" height={19} />
                    )}
                  </ConnectionStatus>

                </ConnectionRow>
              </ConnectionHeaderWrapper>
              <MapWrapper>
                <GoogleMap data={overview.location}></GoogleMap>
                <LocationText>
                  위도: {overview.location.lat} / 경도: {overview.location.lon}
                </LocationText>
              </MapWrapper>
            </TopWrapper>

            <hr />
            <MonitoringText>Monitoring</MonitoringText>
            <MonitoringWrapper>
              <GaugeChartColumn>
                <GagueChartComponent
                  chartColor={{start:'#F1F9B5', end:'#92D723'}}
                  chartData={overview?.concentratedFlowRate}
                  rateData={overview?.concentratedFlowRate}
                  imageSrc={WaterLogoSrc}
                  text={'농축수 순간 유량'}
                />

                <GagueChartComponent
                  chartColor={{start:'#E0F7FC', end:'#26CBF2'}}
                  chartData={overview?.treatedFlowRate}
                  rateData={overview?.treatedFlowRate}
                  imageSrc={WaterLogoSrc}
                  text={'처리수 순간 유량'}
                />
              </GaugeChartColumn>
              <WaterGraphContainer>
                <WaterGraphHeader>
                  <Tabs
                    value={overview.waterGraphData.timeunit}
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
                      {timeunit === 'hour' ? (
                        <LineChart data={waterStreamHour}></LineChart>
                      ) : timeunit === 'day' ? (
                        <BarChart data={waterStreamDay}></BarChart>
                      ) : (
                        <BarChart data={waterStreamMonth}></BarChart>
                      )}
                </WaterGraphCardWrapper>
              </WaterGraphContainer>
            </MonitoringWrapper>

            <hr />

            <CheckListText>Check List</CheckListText>
            <div>
              <TreatedWaterText>Treated Water</TreatedWaterText>
              <div style={{display:'flex', gap:'1rem'}}>
                <TreatedWaterInfoWrapper>
                  <p style={{color:'#555'}}>Conductivity</p>
                  <p style={{fontWeight: 600}}>{overview.treatedWaterConductivity}</p>
                </TreatedWaterInfoWrapper>
                <span style={{fontSize:'1.2rem'}}></span>
                <TreatedWaterInfoWrapper>
                  <p style={{color:'#555'}}>PH</p>
                  <p style={{fontWeight: 600}}>{overview.treatedWaterPH}</p>
                </TreatedWaterInfoWrapper>
              </div>
            </div>
            <FacilityStructureImgWrapper>
              <div style={{ position:'relative' }}>
                <FacilityStructureImg src={FacilityStructureSrc}></FacilityStructureImg>

                <PumpState isOn={overview.rawLevelSwitch} position={rawLevelSwitchPosition} />
                <PumpState isOn={overview.feedPump} position={feedPumpPosition} />
                <PumpState isOn={overview.roPump} position={roPumpPosition} />
                <PumpState isOn={overview.drinkLevelSwitch} position={drinkLevelSwitchPosition} />
              </div>
            </FacilityStructureImgWrapper>
          </>
        )}
      </OverviewWrapper>
    </Contents>
  );
}
