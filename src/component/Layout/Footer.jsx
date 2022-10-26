import styled from 'styled-components';

const Contents = styled.div`
  color: white;
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

const Text = styled.h2`
  font-weight: 600;
  font-size: 24px;
  font-family: Arial, Helvetica, sans-serif;
  /* font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; */
`;

const Container = styled.div`
  height: 200px;
  background-color: #2e2e2e;
  /* background-color: #92e74e; */
  color: white;
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
