import styled from 'styled-components';

import Header from '../../component/Layout/Header';
import Footer from '../../component/Layout/Footer';
import ReactPlayer from 'react-player/lazy';

const ContentContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  padding: 1rem;
`;
const DistrictInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
const VideoContainer = styled.div`
  padding: 0.5rem;
  width: calc(50% - 1rem);
  aspect-ratio: 4/3;
`;
export default function CctvPage() {
  return (
    <>
      <Header />
      <ContentContainer>
        <DistrictInfoWrapper>
          <select>
            <option>CPA 001</option>
          </select>
        </DistrictInfoWrapper>

        {Array(1)
          .fill(0)
          .map((idx) => (
            <VideoContainer key={idx}>
              <ReactPlayer
                url="../../../public/Camera2_15m.mp4"
                controls
                progressInterval={1000}
                width="600px"
                // height="100%"
              />
            </VideoContainer>
          ))}
      </ContentContainer>
      <Footer />
    </>
  );
}
