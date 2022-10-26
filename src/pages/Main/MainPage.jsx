import styled from 'styled-components';
import Header from '../../component/Layout/Header';
// import Main from '../../component/Layout/Main';
import NewMain from '../../component/Layout/NewMain';
import Footer from '../../component/Layout/Footer';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
export default function MainPage() {
  return (
    <>
      <Header />
      <NewMain />
      <Footer />
    </>
  );
}
