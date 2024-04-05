import banner1 from "../../../assets/high-angle-woman-holding-laptop.jpg"
import banner2 from "../../../assets/3d-view-map.jpg"
import banner4 from "../../../assets/pexels-pixabay-38271.jpg"
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation } from 'swiper/modules';

const Banner = () => {
    return (
        <div className="relative">
            <div className="w-full h-[800px]">
                <Swiper
                    pagination={{
                        type: 'progressbar',
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide><img src={banner1} className="h-[800px] w-full object-fill brightness-50" alt="" /></SwiperSlide>
                    <SwiperSlide><img src={banner2} alt="" className="h-[800px] w-full object-fill" /></SwiperSlide>
                    <SwiperSlide><img src={banner4} alt="" className="h-[800px] w-full object-fill" /></SwiperSlide>

                </Swiper>
            </div>
            <div className="absolute top-64 z-10 text-6xl text-white space-y-6 left-20">
                <h1 className="font-bold ">Are you confused? </h1>
                <p className="text-3xl">Bus is gone or not!! {"Let's"} start <br/>  to track your bus.</p>
                <button className="px-4 py-3 text-base bg-gradient-to-r rounded-md from-indigo-500 via-purple-500 to-pink-500 uppercase">{"Let's Track"}</button>
            </div>

        </div >
    );
};

export default Banner;