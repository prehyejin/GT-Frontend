import styled from "styled-components";
import GlobalStyle from "../../GlobalStyle";

const Contents = styled.div`
    display: flex;
    height: 100%;
    align-items: center;
    
`;

const Text = styled.h2`
    font-weight: 600;
    font-size: 20px;
`;

const Container = styled.div`
    height: 100px;
    background-color: yellow;

`;

export default function Header(){
    return (
        <Container > 
            <Contents>
                <Text> Overview</Text>    
            </Contents>  
        </Container>

    )
}
