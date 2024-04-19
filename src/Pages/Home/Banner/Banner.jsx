import banner1 from "../../../assets/file (7).png"
import banner2 from "../../../assets/unsplash.jpg"
// import banner4 from "../../../assets/file (5).png"
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
                    <SwiperSlide>
                        <div className="flex justify-center w-full h-[800px] items-center">
                            <div className="text-[#262829] w-[50%] h-full flex justify-center items-center ">
                                <div className="space-y-6 w-[80%] lg:pl-10">
                                    <p className="text-xl">Track Transport</p>
                                    <h1 className="font-bold text-5xl">Are you confused? </h1>
                                    <p className="text-2xl">Bus is gone or not!! {"Let's"} start <br />  to track your bus.</p>
                                    <button className="px-4 py-3 text-white bg-gradient-to-r rounded-md from-indigo-500 via-purple-500 to-pink-500 font-medium uppercase hover:font-semibold">{"Let's Track"}</button>
                                </div>
                            </div>
                            <div className="w-[50%]">
                                <img src={banner1} className="w-[85%]" alt="" />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex justify-center w-full h-[800px] items-center">
                            <div className="text-[#262829] w-[50%] h-full flex justify-center items-center ">
                                <div className="space-y-6 w-[80%] lg:pl-10">
                                    <p className="text-xl">Registration</p>
                                    <h1 className="font-bold text-5xl">Easily make your tranport registration </h1>
                                    <p className="text-2xl">Bus is gone or not!! {"Let's"} start <br />  to track your bus.</p>
                                    <button className="px-4 py-3 text-white bg-gradient-to-r rounded-md from-indigo-500 via-purple-500 to-pink-500 font-medium uppercase hover:font-semibold">{"Let's Track"}</button>
                                </div>
                            </div>
                            <div className="w-[50%]">
                                <img src={banner2} className="w-[85%] rounded-md" alt="" />
                            </div>
                        </div>
                    </SwiperSlide>
                    {/* <SwiperSlide>
                        <div className="flex justify-center w-full h-[800px] items-center">
                            <div className="text-[#262829] w-[50%] h-full flex justify-center items-center ">
                                <div className="space-y-6 w-[80%] lg:pl-10">
                                    <p className="text-xl">Register</p>
                                    <h1 className="font-bold text-5xl">Easily make your tranport registration </h1>
                                    <p className="text-2xl">Bus is gone or not!! {"Let's"} start <br />  to track your bus.</p>
                                    <button className="px-4 py-3 text-white bg-gradient-to-r rounded-md from-indigo-500 via-purple-500 to-pink-500 font-medium uppercase hover:font-semibold">{"Let's Track"}</button>
                                </div>
                            </div>
                            <div className="w-[50%]">
                                <img src={banner4} className="w-[85%]" alt="" />
                            </div>
                        </div>
                    </SwiperSlide> */}

                </Swiper>
            </div>


        </div >
    );
};

export default Banner;