import styled from 'styled-components';
import GlobalStyle from '../../GlobalStyle';
import { Link } from 'react-router-dom';

const Contents = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  float: right;
`;

const Text = styled.h2`
  font-weight: 600;
  font-size: 20px;
  margin: 20px;
`;

const Container = styled.div`
  height: 60px;
  background-color: #f2f2f2;
  display: flex;
  justify-content: flex-start;
`;
const Logo = styled.img`
  /* height: 60px; */
  width: 80px;
`;

const LogoWrapper = styled.div`
  margin-top: 5px;
  margin-right: 10px;
  float: right;
`;

const MenuWrapper = styled.div`
  display: flex;
  margin-right: auto;
`;

export default function Header() {
  const logoSrc = '../../../img/logo/basic_logo.png';
  return (
    <Container>
      <MenuWrapper>
        <Link to="/">
          <Text> Overview</Text>
        </Link>
        <Link to="/list">
          <Text> List</Text>
        </Link>
      </MenuWrapper>
      <LogoWrapper>
        <Logo src={logoSrc} />
      </LogoWrapper>
    </Container>
  );
}
