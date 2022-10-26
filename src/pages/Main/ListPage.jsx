import styled from 'styled-components';
import BasicSelect from '../../component/Overview/SelectList';
import FailityCard from '../../component/List/ListCard';
import Header from '../../component/Layout/Header';

const Contents = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
`;
const SelectLocation = styled.div`
  height: 20px;
  width: 100px;
  margin-right: 20px;
  margin-left: 10px;
`;

const ListFullWrapper = styled.div`
  margin: 30px;
`;

const LoactionText = styled.h2`
  margin-top: 60px;
  font-size: 40px;
  margin-left: 10px;
`;

const FacilityCardList = styled.div`
  display: flex;
`;

const FacilityCardWrapper = styled.div`
  margin: 10px;
`;

export default function ListPage() {
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
  // const cardList = ['043_Kesra', '044_Tegharia', '045_potepur', '046_Sreemonta', '047_Kanaidia'];
  return (
    <div>
      <Header />
      <ListFullWrapper>
        <SelectLocation>
          <BasicSelect></BasicSelect>
        </SelectLocation>
        <LoactionText>CPA 001</LoactionText>
        <FacilityCardList>
          {facilityList.map((facility, index) => {
            return (
              <FacilityCardWrapper>
                <FailityCard data={facility}></FailityCard>
              </FacilityCardWrapper>
            );
          })}
        </FacilityCardList>
      </ListFullWrapper>
    </div>
  );
}
