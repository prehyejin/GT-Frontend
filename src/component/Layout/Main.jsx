import styled from 'styled-components';
import CheckList from '../Overview/CheckList';
// import ConcentratedWater from "../Overview/ConcentratedWater";
// import TreatedWater from "../Overview/TreatedWater";
import MyResponsiveLine from '../Overview/WaterGraph';
import SimpleListMenu from '../Overview/Menu.jsx';

const Contents = styled.div`
  color: white;
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

const Text = styled.h2`
  font-weight: 600;
  font-size: 20px;
`;

const Container = styled.div`
  height: 100px;
  background-color: black;
  color: white;
`;

const Wrapper = styled.div`
  height: 300px;
`;

const WaterFlowBox = styled.div`
  height: 200px;
  width: 200px;
  background-color: #fafafa;
`;
// const MenuDropdownList = styled.nav``;

let raw_data = [
  {
    id: 'japan',
    color: 'hsl(112, 70%, 50%)',
    data: [
      {
        x: 'plane',
        y: 154,
      },
      {
        x: 'helicopter',
        y: 165,
      },
      {
        x: 'boat',
        y: 8,
      },
      {
        x: 'train',
        y: 97,
      },
      {
        x: 'subway',
        y: 188,
      },
      {
        x: 'bus',
        y: 121,
      },
      {
        x: 'car',
        y: 18,
      },
      {
        x: 'moto',
        y: 151,
      },
      {
        x: 'bicycle',
        y: 208,
      },
      {
        x: 'horse',
        y: 83,
      },
      {
        x: 'skateboard',
        y: 195,
      },
      {
        x: 'others',
        y: 137,
      },
    ],
  },
  {
    id: 'france',
    color: 'hsl(37, 70%, 50%)',
    data: [
      {
        x: 'plane',
        y: 133,
      },
      {
        x: 'helicopter',
        y: 24,
      },
      {
        x: 'boat',
        y: 161,
      },
      {
        x: 'train',
        y: 196,
      },
      {
        x: 'subway',
        y: 11,
      },
      {
        x: 'bus',
        y: 234,
      },
      {
        x: 'car',
        y: 4,
      },
      {
        x: 'moto',
        y: 174,
      },
      {
        x: 'bicycle',
        y: 125,
      },
      {
        x: 'horse',
        y: 148,
      },
      {
        x: 'skateboard',
        y: 195,
      },
      {
        x: 'others',
        y: 271,
      },
    ],
  },
  {
    id: 'us',
    color: 'hsl(346, 70%, 50%)',
    data: [
      {
        x: 'plane',
        y: 149,
      },
      {
        x: 'helicopter',
        y: 296,
      },
      {
        x: 'boat',
        y: 275,
      },
      {
        x: 'train',
        y: 100,
      },
      {
        x: 'subway',
        y: 216,
      },
      {
        x: 'bus',
        y: 282,
      },
      {
        x: 'car',
        y: 160,
      },
      {
        x: 'moto',
        y: 141,
      },
      {
        x: 'bicycle',
        y: 220,
      },
      {
        x: 'horse',
        y: 241,
      },
      {
        x: 'skateboard',
        y: 108,
      },
      {
        x: 'others',
        y: 59,
      },
    ],
  },
  {
    id: 'germany',
    color: 'hsl(279, 70%, 50%)',
    data: [
      {
        x: 'plane',
        y: 208,
      },
      {
        x: 'helicopter',
        y: 31,
      },
      {
        x: 'boat',
        y: 249,
      },
      {
        x: 'train',
        y: 215,
      },
      {
        x: 'subway',
        y: 106,
      },
      {
        x: 'bus',
        y: 71,
      },
      {
        x: 'car',
        y: 81,
      },
      {
        x: 'moto',
        y: 125,
      },
      {
        x: 'bicycle',
        y: 295,
      },
      {
        x: 'horse',
        y: 206,
      },
      {
        x: 'skateboard',
        y: 29,
      },
      {
        x: 'others',
        y: 196,
      },
    ],
  },
  {
    id: 'norway',
    color: 'hsl(176, 70%, 50%)',
    data: [
      {
        x: 'plane',
        y: 264,
      },
      {
        x: 'helicopter',
        y: 217,
      },
      {
        x: 'boat',
        y: 166,
      },
      {
        x: 'train',
        y: 124,
      },
      {
        x: 'subway',
        y: 117,
      },
      {
        x: 'bus',
        y: 5,
      },
      {
        x: 'car',
        y: 231,
      },
      {
        x: 'moto',
        y: 208,
      },
      {
        x: 'bicycle',
        y: 251,
      },
      {
        x: 'horse',
        y: 157,
      },
      {
        x: 'skateboard',
        y: 273,
      },
      {
        x: 'others',
        y: 242,
      },
    ],
  },
];
const Main = () => {
  return (
    <div>
      <SimpleListMenu></SimpleListMenu>
      <Wrapper>
        <MyResponsiveLine data={raw_data}></MyResponsiveLine>
      </Wrapper>
      <CheckList></CheckList>
    </div>
  );
};

export default Main;
