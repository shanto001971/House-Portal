import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './banner.css';


const Banner = () => {
  return (
    <div style={{ boxShadow: '8px 4px 8px rgba(0, 0, 0, 0.1)' }} className='lg:my-2'>
            <Swiper
                spaceBetween={30}
                pagination={{
                    clickable: true,
                  }}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                
                
                modules={[Autoplay, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide><img className='' src="https://dynamic.brandcrowd.com/template/preview/design/294c95ce-68d0-458f-88b6-f99a2fb19dc1?v=4&designTemplateVersion=1&size=design-preview-standalone-1x" alt="Shoes" /></SwiperSlide>
                <SwiperSlide><img className='' src="https://dynamic.brandcrowd.com/template/preview/design/09848d03-e002-40d6-8d5e-8b817a58962b?v=4&designTemplateVersion=1&size=design-preview-standalone-1x" alt="Shoes" /></SwiperSlide>
                
                
            </Swiper>
        </div>
  );
};

export default Banner;
