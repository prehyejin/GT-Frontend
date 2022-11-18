import { Link } from 'react-router-dom';
import styled from 'styled-components';

import useFetch from '../../hooks/useFetch';

import FailityCard from '../../component/List/ListCard';
import Header from '../../component/Layout/Header';

import { SelectItem } from '../../component/Overview';

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

const SelectRow = styled.div`
  height: 70px;
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 10px;
`;

export default function ListPageTemplate({ districtId, changeDistrict }) {
  const { data: districts } = useFetch('/districts');
  const selectedDistrict = districts?.find((_district) => _district.id === districtId);

  const { data: facilityCardList, isLoading } = useFetch('/facilityCardList');

  console.log(facilityCardList);
  return (
    <>
      <ListFullWrapper>
        <SelectRow>
          <SelectWrapper>
            <SelectItem
              label="구역"
              onChangeSelected={({ target: { value /* district.id */ } }) => {
                changeDistrict(value);
                // changeFacility(null);
              }}
              selected={selectedDistrict ? selectedDistrict.id : ''}
              items={districts}
              itemKey="name"
              keyProperty="id"
            />
          </SelectWrapper>
        </SelectRow>
        {selectedDistrict && <LoactionText>{selectedDistrict.name}</LoactionText>}
        <FacilityCardList>
          {!isLoading &&
            facilityCardList.map((facility) => (
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
