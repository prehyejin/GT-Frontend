import styled from "styled-components";

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

const Footer = () => {
    return (
        <Container>
            <Contents>
                <Text> Glory&Tech</Text>    
            </Contents>                  
        </Container>
    )
}

export default Footer