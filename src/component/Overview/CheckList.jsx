import styled from "styled-components";
import RawWaterTank from "./TreatedWater";

// import LevelSwitch from

const levelSwitch = "On";
const deepPumpOnoff = "On";
const conductivity = "0000";

const WaterTank = styled.div`
  background-color: pink;
  flex-direction: column;
  display: flex;
  width: 200px;
  height: 200px;
`;
const WaterPurifyFacility = styled.div`
  background-color: orange;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  display: flex;
  height: 400px;
  width: 300px;
`;

const Onoff = styled.div`
  background-color: blue;
  width: 50px;
  font-size: 20;
  color: white;
`;

const WaterInform = styled.div`
  background-color: green;
  flex-direction: row;
  width: 300px;
  height: 120px;
  font-size: 20;
  color: white;
`;

const WaterInformData = styled.div`
  background-color: grey;
  color: white;
  width: 150px;
`;

const PumpContainer = styled.div`
  background-color: purple;
  color: white;
`;

const WrapperChecklist = styled.div`
  background-color: skyblue;

  display: flex;
`;

const CheckList = () => {
  return (
    <WrapperChecklist>
      <WaterTank>
        <h2>Raw Water Tank</h2>
        <div>
          <h2>Level Switch</h2>
          <Onoff>{levelSwitch}</Onoff>
        </div>
        <div>
          <h2>Deep Pump</h2>
          <Onoff>{deepPumpOnoff}</Onoff>
        </div>
      </WaterTank>

      <WaterPurifyFacility>
        <div>
          <WaterInform>
            <h2>Raw Water</h2>
            <WaterInformData>
              Conductivity:
              {conductivity}
            </WaterInformData>
            <WaterInformData>
              PH:
              {conductivity}
            </WaterInformData>
            <WaterInformData>
              EC/TDS:
              {conductivity}
            </WaterInformData>
          </WaterInform>

          <WaterInform>
            <h2>Treated Water</h2>
            <WaterInformData>
              Conductivity:
              {conductivity}
            </WaterInformData>
            <WaterInformData>
              PH:
              {conductivity}
            </WaterInformData>
            <WaterInformData>
              EC/TDS:
              {conductivity}
            </WaterInformData>
          </WaterInform>
        </div>
        <div>
          <PumpContainer>pump</PumpContainer>
        </div>
      </WaterPurifyFacility>

      <WaterTank>
        <h2>Treated Water Tank</h2>
        <div>
          <h2>Level Switch</h2>
          <Onoff>{levelSwitch}</Onoff>
        </div>
      </WaterTank>
    </WrapperChecklist>
  );
};

export default CheckList;
