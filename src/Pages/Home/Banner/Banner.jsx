import banner1 from "../../../assets/videos/5834558-uhd_2160_3840_24fps.mp4"
import banner2 from "../../../assets/videos/8061028-hd_1920_1080_25fps.mp4";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import './banner.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
  delay: 1200
});


const Banner = () => {

  return (
    <div className="w-full h-[800px]">

      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="relative z-0">
            <video className="video-bg brightness-75" autoPlay loop muted>
              <source src={banner1} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="absolute top-40 bottom-40 left-80">
              <div className="space-y-6 w-[60%] lg:pl-10">
                <p className="text-xl bg-gradient-to-r from-[#6648ff] via-[#7fefda] to-[#45f9d7] inline-block text-transparent bg-clip-text" data-aos="fade-up">
                  Track Transport
                </p>
                <div className="item" data-aos="fade-up">
                  <h1 className="font-bold text-[42px] text-white " >
                    Track Your Prior Transport Location
                  </h1>
                </div>
                <p className="text-lg text-white item" data-aos="fade-left">
                  Bus is gone or not!! {"Let's"} start  to track your
                  bus. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam, officiis.
                </p>
                <button className="px-6 py-3 mt-2 text-black bg-[#fdc800]  rounded-md font-medium  hover:-translate-y-1 " data-aos="fade-down">
                  {"Let's Track"}
                </button>
              </div>


            </div>

          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <video className="video-bg z-0" autoPlay loop muted>
              <source src={banner2} type="video/mp4" />
              {/* Add additional source tags for different video formats if needed */}
              Your browser does not support the video tag.
            </video>
            <div className="absolute top-40 bottom-40 left-60">
              <div className="space-y-6 w-[60%] lg:pl-10">
                <p className="text-xl bg-gradient-to-r from-[#6648ff] via-[#7fefda] to-[#45f9d7] inline-block text-transparent bg-clip-text">
                  Transport Registration
                </p>
                <div className="item" data-aos="fade-up">
                  <h1 className="font-bold text-[42px] text-white " >
                    Easily Make Your Tranport Registration
                  </h1>
                </div>
                <p className="text-lg text-white item ">
                  Bus is gone or not!! {"Let's"} start to track your
                  bus. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores, deserunt?
                </p>
                <button className="px-6 py-3 mt-2 text-black bg-[#fdc800]  rounded-md font-medium  hover:-translate-y-1 ">
                  {"Let's Track"}
                </button>

              </div>


            </div>

          </div>
        </SwiperSlide>

      </Swiper>
      {/* <div>
        <Feature></Feature>
      </div> */}

    </div>
  );
};

export default Banner;
