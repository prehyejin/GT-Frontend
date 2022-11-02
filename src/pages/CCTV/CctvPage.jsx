import styled from 'styled-components';
import Header from '../../component/Layout/Header';
import Footer from '../../component/Layout/Footer';
import GoogleMap from '../../component/Overview/GoogleMap';
const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
export default function CctvPage() {
  return (
    <div>
      <Header />
      <GoogleMap></GoogleMap>
      <Footer />
    </div>
  );
}
