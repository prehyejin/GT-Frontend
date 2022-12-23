import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';

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

const HeaderLink = ({ to, title })=>{
  const location = useLocation();
  return (
    <Link to={to} style={{ textDecoration: 'none', color: location.pathname === to ? '#222' : '#888' }}>
      <Text>{title}</Text>
    </Link>
  )
}

export default function Header() {

  return (
    <Container>
      <MenuWrapper>
        <HeaderLink to="/" title="List"/>
        <HeaderLink to="/overview" title="Overview"/>
        <HeaderLink to="/cctv" title="CCTV"/>
      </MenuWrapper>
      <LogoWrapper>
        <Logo src="/img/logo/basic_logo.png" />
      </LogoWrapper>
    </Container>
  );
}
