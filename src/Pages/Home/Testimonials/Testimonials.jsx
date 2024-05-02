import { useQuery } from "@tanstack/react-query";
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import useAxiosSecure from "../../../api/AxiosSecure/useAxiosSecure";



const Testimonials = () => {
    const axiosSecure = useAxiosSecure()
    const { data: reviews = [] } = useQuery({
        queryKey: ['review'],
        queryFn: async () => {
            const res = await axiosSecure.get('/reviews')
            return res.data;
        }
    })
    console.log(reviews)
    return (
        <div className="bg-[#f5f5f5] min-h-fit w-full py-12">
            <div className="w-[80%] mx-auto">
                <div>
                    <p className="text-sm mb-2">Testimonials</p>
                    <h1 className="text-4xl font-semibold"> What Our Student Say!</h1>
                </div>
                <div>
                    <Swiper
                        slidesPerView={2}
                        spaceBetween={30}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                        {
                            reviews.map(review =>
                                <SwiperSlide key={review._id}>
                                    <div className="bg-white min-h-fit py-6 my-12">
                                        <div>
                                            <h1 className="text-xl font-semibold text-left ml-10">{review.name}</h1>
                                        </div>
                                        <div className="bg-base-200 m-10 p-5 flex justify-between">
                                            <p>{review.details.slice(0, 100) + '..'}</p>
                                            <img src={review.image} className="w-20 h-20 border-2 border-[#fdc800] -mt-14" alt="" />

                                        </div>

                                    </div>

                                </SwiperSlide>)

                        }

                    </Swiper>
                </div>
            </div>

        </div>
    );
};

export default Testimonials;