import styled from 'styled-components';

const Contents = styled.div`
  color: white;
  font-size: 2rem;
`;

const Text = styled.p`
  font-weight: 600;
  font-size: 20px;
  font-family: Pretendard-Light;
`;

const Container = styled.div`
  height: 200px;
  background-color: #2e2e2e;
  display: flex;
  align-items: center;
  width: 100%;
`;

const Footer = () => {
  return (
    <Container>
      <Contents>
        <Text> Glory&Tech</Text>
      </Contents>
    </Container>
  );
};

export default Footer;
