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
  margin: 20px;
`;

const Container = styled.div`
  height: 60px;
  background-color: #f2f2f2;
`;

export default function Header() {
  return (
    <Container>
      <Contents>
        <Text> Overview</Text>
        <Text> List </Text>
        <Text> Glory&Tech logo</Text>
      </Contents>
    </Container>
  );
}
