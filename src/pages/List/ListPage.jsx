import { Link } from 'react-router-dom';
import styled from 'styled-components';

import useFetch from '../../hooks/useFetch';
// import SelectDistrict from '../../component/Overview/SelectList';
import FailityCard from '../../component/List/ListCard';
import Header from '../../component/Layout/Header';

import { SelectItem } from '../../component/Overview';
import { initDistrictsWithCities } from '../../constants/district';
const ListFullWrapper = styled.div`
  width: 100%;
  padding: 1.25rem;
  max-width: 1280px;
  margin: 0 auto;
`;

const SelectWrapper = styled.div`
  width: 100px;
  margin-bottom: 0.125rem;
`;

const LoactionText = styled.h2`
  font-size: 40px;
  padding: 0.5rem 0;
`;

const FacilityCardList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  width: 100%;
`;
const FacilityCardWrapper = styled(Link)`
  display: flex;
  width: 30%;
  max-width: 370px;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 0 6px 4px #00000020;
`;

const facilityList = [
  {
    id: 1,
    name: 'Kesra',
    imgSrc: 43,
  },
  {
    id: 2,
    name: 'Tegharia',
    imgSrc: 44,
  },
  {
    id: 3,
    name: 'potepur',
    imgSrc: 45,
  },
  {
    id: 4,
    name: 'Kesra',
    imgSrc: 43,
  },
  {
    id: 5,
    name: 'Tegharia',
    imgSrc: 44,
  },
  {
    id: 6,
    name: 'potepur',
    imgSrc: 45,
  },
];

const districtList = [
  {
    id: 1,
    name: 'district1',
  },
  {
    id: 2,
    name: 'district2',
  },
];

const SelectRow = styled.div`
  height: 70px;
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 10px;
`;

const SelectLocation = styled.div``;

const SelectCity = styled.div``;

export default function ListPage({ districtId, changeDistrict, facilityId, changeFacility }) {
  // const cardList = ['043_Kesra', '044_Tegharia', '045_potepur', '046_Sreemonta', '047_Kanaidia'];
  const { data: districts } = useFetch('/districts');

  const selectedDistrict = districts?.find((_district) => _district.id === districtId);
  const facilities = selectedDistrict?.facilities ?? [];
  const selectedFacility = facilities.find(({ id }) => id === facilityId);
  return (
    <>
      <Header />
      <ListFullWrapper>
        <SelectRow>
          <SelectWrapper>
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
          </SelectWrapper>
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
        {/* <SelectLocation>
          <SelectDistrict data={districtList} />
        </SelectLocation> */}
        <LoactionText>{}</LoactionText>
        <FacilityCardList>
          {facilityList.map((facility) => (
            <FacilityCardWrapper
              key={facility.id}
              to={`/overview?districtId=${1}&facilityId=${facility.id}`}
            >
              <FailityCard data={facility}></FailityCard>
            </FacilityCardWrapper>
          ))}
        </FacilityCardList>
      </ListFullWrapper>
    </>
  );
}
