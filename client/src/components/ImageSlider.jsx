import tv from '../assets/tv.png'
import wm from '../assets/wm.png'
import heater from '../assets/heater.png'
import ac from '../assets/ac.png'
import  bosch from "../assets/bosch.png"
import wp from "../assets/wp.png"
import sm from "../assets/sm.png"
import gd from "../assets/gd.png"
import haier from "../assets/haier.png"
import ifb from "../assets/ifb.png"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

const ImageSlider = () => {
  return (
  <>
  <div>

      <Swiper
      slidesPerView={4}
      spaceBetween={20}
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}  
    >
      <SwiperSlide>
        <img src={sm} alt="img1"  />
      </SwiperSlide>

      <SwiperSlide>
        <img src={wp} alt="img2" />
      </SwiperSlide>

      <SwiperSlide className='w-auto h-auto'>
        <img src= {bosch} alt="img3"   />
      </SwiperSlide>

      <SwiperSlide className='w-auto h-auto'>
        <img src= {gd} alt="img3"   />
      </SwiperSlide>
      <SwiperSlide className='w-auto h-auto'>
        <img src= {haier} alt="img3"   />
      </SwiperSlide> 
      <SwiperSlide className='w-auto h-auto'>
        <img src= {ifb} alt="img3"   />
      </SwiperSlide> 


     
    </Swiper>
  </div>
  
  </>
  );
};

export default ImageSlider;