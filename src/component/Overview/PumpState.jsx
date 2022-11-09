import styled from 'styled-components';

import onIcon from '../../img/On.png';
import offIcon from '../../img/Off.png';

const PumpStateContainer = styled.div`
  font-size: 1rem;
  position: absolute;
  left: ${({ left }) => left};
  bottom: ${({ bottom }) => bottom};
  right: ${({ right }) => right};

  display: flex;
  align-items: center;
  gap: 0.5rem;

  & > div {
    width: 5.5rem;
    display: flex;
    align-items: center;
    justify-content: center;

    & > img {
      width: 100%;
    }
  }
`;

const PumpState = ({ isOn, position }) => {
  return (
    <PumpStateContainer {...position}>
      <div>{isOn ? <img src={onIcon} alt="on" /> : <img src={offIcon} alt="off" />}</div>
    </PumpStateContainer>
  );
};
export default PumpState;
