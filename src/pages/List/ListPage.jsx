import { useSearchParams } from 'react-router-dom';
import Header from '../../component/Layout/Header';
import Footer from '../../component/Layout/Footer';
import ListPageTemplate from './ListPageTemplate';

export default function ListPage() {
  const [searchParams, setSearchParams] = useSearchParams();

  const districtId = parseInt(searchParams.get('districtId'), 10); // 국가
  const facilityId = parseInt(searchParams.get('facilityId'), 10); // 도시
  console.log(districtId, facilityId);
  const changeDistrict = (districtId) => {
    if (!districtId && !searchParams.get('districtId')) {
      return;
    }
    searchParams.set('districtId', districtId + '');
    setSearchParams(searchParams);
  };

  const changeFacility = (facilityId) => {
    if (!facilityId) {
      searchParams.delete('facilityId');
    } else {
      searchParams.set('facilityId', facilityId + '');
    }
    setSearchParams(searchParams);
  };

  return (
    <>
      <Header />
      <ListPageTemplate districtId={districtId} changeDistrict={changeDistrict} />
      <Footer />
    </>
  );
}
