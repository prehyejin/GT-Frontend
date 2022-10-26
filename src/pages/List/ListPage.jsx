import styled from 'styled-components';
import SelectDistrict from '../../component/Overview/SelectList';
import FailityCard from '../../component/List/ListCard';
import Header from '../../component/Layout/Header';

const ListFullWrapper = styled.div`
  width: 100%;
  padding: 1.25rem;
`;

const SelectLocation = styled.div`
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

export default function ListPage() {
  // const cardList = ['043_Kesra', '044_Tegharia', '045_potepur', '046_Sreemonta', '047_Kanaidia'];
  return (
    <div>
      <Header />
      <ListFullWrapper>
        <SelectLocation>
          <SelectDistrict data={districtList} />
        </SelectLocation>
        <LoactionText>CPA 001</LoactionText>
        <FacilityCardList>
          {facilityList.map((facility) => (
            <FailityCard key={facility.id} data={facility}></FailityCard>
          ))}
        </FacilityCardList>
      </ListFullWrapper>
    </div>
  );
}
