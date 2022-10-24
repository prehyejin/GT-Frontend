import styled from "styled-components";
import ConcentratedWater from '../Overview/ConcentratedWater'
import TreatedWater from '../Overview/TreatedWater'

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

const Main = () => {
    return (
        <div>
            <ConcentratedWater></ConcentratedWater>
            <TreatedWater></TreatedWater>
        </div>
    )
}

export default Main