import { FC } from 'react';
import CustomCarousel from './custom/CustomCarousel';
import OfficeBg1 from "../assets/OfficeBg1.jpg";
import OfficeBg2 from "../assets/OfficeBg2.jpg";
import SearchWidget from './SearchWidget';


const HeroBanner: FC = () => {
  const images = [OfficeBg1, OfficeBg2];
  return (
    <div className='hero_container'>
      <CustomCarousel
        autoPlay
        body={images?.map((ele) => <img className='aspact_3_1' src={ele} alt="img" />)}
      />
      <div className='hero_text h_100 w_100 fs_40 fw_500 font_primary white'>
        Make your goles come true<span className='font_primary primary'> Jobify</span>
      </div>
      <div className='hero_search w_75'>
        <SearchWidget />
      </div>
    </div>
  )
}

export default HeroBanner;
