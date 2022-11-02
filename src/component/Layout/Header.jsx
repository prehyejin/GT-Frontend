import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Text = styled.h2`
  font-family: Pretendard-Light;
  font-weight: 600;
  font-size: 20px;
`;

const Container = styled.div`
  height: 60px;
  background-color: #f2f2f2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
`;
const Logo = styled.img`
  height: 100%;
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80%;
  padding: 0.5rem;
`;

const MenuWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export default function Header() {
  return (
    <Container>
      <MenuWrapper>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <Text> Overview</Text>
        </Link>
        <Link to="/list" style={{ textDecoration: 'none' }}>
          <Text> List</Text>
        </Link>
        <Link to="/cctv" style={{ textDecoration: 'none' }}>
          <Text> CCTV</Text>
        </Link>
      </MenuWrapper>
      <LogoWrapper>
        <Logo src="/img/logo/basic_logo.png" />
      </LogoWrapper>
    </Container>
  );
}
