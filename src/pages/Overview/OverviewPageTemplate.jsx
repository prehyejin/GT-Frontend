import { useState, useEffect, useMemo } from 'react';

import LineChart from '../../component/Overview/LineChart';
import BarChart from '../../component/Overview/Barchart';
import WaterLogoSrc from '../../img/Water_1.png';
import FacilityStructureSrc from '../../img/FacilityStructure.png';
import WaterGaugeChart from '../../component/Overview/GaugeChart';
import GaugeChart from 'react-gauge-chart';

import { FaCircle } from 'react-icons/fa';
import { AiOutlineRight, AiOutlineLeft } from 'react-icons/ai';

import Select from '../../component/Overview/SelectItem';
import useFetch from '../../hooks/useFetch';

import Card from '@mui/material/Card';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import dayjs from 'dayjs';

import {
  initDistrictsWithCities,
  con_water_rate,
  treated_water_rate,
  line_stream_data,
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
  /** selectedDistrict
      {
        id: 1,
        name: 'CPA 004',
        facilities: [
          {
            id: 1,
            name: 'Kesra',
          },
          {
            id: 2,
            name: 'Tegharia',
          },
          {
            id: 3,
            name: 'Sreemonta',
          },
        ],
      }
    */

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

//
export default function OverviewPageTemplate({
  districtId,
  changeDistrict,
  facilityId,
  changeFacility,
}) {
  const { data: districts } = useFetch(initDistrictsWithCities, 300);

  // const { selectedDistrict } = useSelectDistrict(districts, districtId);
  const selectedDistrict = districts?.find((_district) => _district.id === districtId);
  const facilities = selectedDistrict?.facilities ?? [];
  const selectedFacility = facilities.find(({ id }) => id === facilityId); // facility | undefined
  /** facility : { id: 4, name: 'Tokyo' } */
  console.log(selectedDistrict, selectedFacility);

  const [calendar, setCalendar] = useState(new Date());

  const [day, setDay] = useState(Date());

  const [timeunit, setTimeunit] = useState('hour');
  const handleChange = (event, newTimeunit) => {
    console.log(newTimeunit);
    setTimeunit(newTimeunit);
  };

  const timeText = {
    hour: dayjs(day).format('YYYY-MM-DD'),
    day: dayjs(day).format('YYYY-MM'),
    month: dayjs(day).format('YYYY'),
  };

  const timeOffset = {
    hour: 'day',
    day: 'month',
    month: 'year',
  };

  return (
    <Contents>
      <OverviewWrapper>
        <SelectRow>
          <SelectLocation>
            <Select
              label="구역"
              onChangeSelected={({ target: { value /* district.id */ } }) => {
                console.log('onChange district', value);
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
                  <DayTextPicker>
                    <OutlineIconWrapper>
                      <AiOutlineLeft
                        onClick={({ target: { prevday } }) => {
                          setDay((prevday) => dayjs(prevday).subtract(1, timeOffset[timeunit]));
                        }}
                        size="20"
                      />
                    </OutlineIconWrapper>
                    <CurrentSelectedTimeText>{timeText[timeunit]}</CurrentSelectedTimeText>

                    <OutlineIconWrapper>
                      <AiOutlineRight
                        onClick={({ target: { prevday } }) => {
                          setDay((prevday) => dayjs(prevday).add(1, timeOffset[timeunit]));
                        }}
                        size="20"
                      />
                    </OutlineIconWrapper>
                  </DayTextPicker>
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
              <FacilityStructureImg src={FacilityStructureSrc}></FacilityStructureImg>
            </FacilityStructureImgWrapper>
          </>
        )}
      </OverviewWrapper>
    </Contents>
  );
}
