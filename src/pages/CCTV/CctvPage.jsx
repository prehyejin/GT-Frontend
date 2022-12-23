import styled from 'styled-components';
import ReactPlayer from 'react-player/lazy';
import { useSearchParams } from 'react-router-dom';

import Header from '../../component/Layout/Header';
import Footer from '../../component/Layout/Footer';
import { SelectItem } from '../../component/Overview';
import useFetch from '../../hooks/useFetch';

const sampleVideos = [
  'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
  'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
  'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4'
]

export default function CctvPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const districtId = parseInt(searchParams.get('districtId'), 10);

  const changeDistrict = (districtId) => {
    if (!districtId && !searchParams.get('districtId')) {
      return;
    }
    searchParams.set('districtId', districtId + '');
    setSearchParams(searchParams);
  };

  const { data: districts } = useFetch('/api/v1/status');
  
  const selectedDistrict = districts?.find((_district) => _district.id === districtId);
  const facilities = selectedDistrict?.facilities ?? [];

  return (
    <>
      <Header />
      <ContentContainer>
        <SelectRow>
          <SelectWrapper>
            <SelectItem
              label="구역"
              onChangeSelected={({ target: { value /* district.id */ } }) => {
                changeDistrict(value);
              }}
              selected={selectedDistrict ? selectedDistrict.id : ''}
              items={districts}
              itemKey="name"
              keyProperty="id"
            />
          </SelectWrapper>
        </SelectRow>
        <VideoList>
          {!!districtId && facilities.map((facility,idx) => (
              <VideoContainer key={idx}>
                <ReactPlayer
                  url={sampleVideos[idx]}
                  controls
                  progressInterval={1000}
                  width="100%"
                  height="100%"
                />
                <VideoTitle>
                  {idx+1}. {facility.name}
                </VideoTitle>
              </VideoContainer>
            ))}
        </VideoList>
      </ContentContainer>
      <Footer />
    </>
  );
}

const ContentContainer = styled.div`
  width: 100%;
  min-height: calc(100% - 260px);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
`;
const VideoContainer = styled.div`
  padding: 0.5rem;
  width: calc(33% - 1rem);
  aspect-ratio: 16 / 9; // 16:9 비율, 4 / 3 <= 4:3비율

  @media(max-width: 1280px){
    width: calc(50% - 1rem);
  }
  @media(max-width: 768px){
    width: calc(100% - 1rem);
  }
`;

const SelectWrapper = styled.div`
  width: 100px;
  margin-bottom: 0.125rem;
`;

const SelectRow = styled.div`
  height: 70px;
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 0 2rem 0;
`;

const VideoList = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 1rem;
`;
const VideoTitle = styled.p`
  padding: 0.5rem 0;
  font-size: 1.4rem;
  text-align: center;
  font-family: Pretendard-Light;
`;