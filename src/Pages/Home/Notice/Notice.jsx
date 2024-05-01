import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../api/AxiosSecure/useAxiosSecure";
import { Link } from "react-router-dom";


const Notice = () => {
    const axiosSecure = useAxiosSecure()
    const { data: notices = [] } = useQuery({
        queryKey: ['notice'],
        queryFn: async () => {
            const res = await axiosSecure.get('/notices')
            return res.data;
        }
    })
    console.log(notices)
    return (
        <div className="bg-[#f5f5f5] py-12 ">
            <div className="w-[80%] mx-auto mt-4">
                <div className="mb-6">
                    <p className="text-3xl font-semibold">Latest Notices</p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-5">
                    {
                        notices?.slice(0, 5).map(notice => <div key={notice._id} className="min-h-fit p-8 bg-[#ffffff] flex justify-start items-center gap-6">
                            <div className="h-28 w-28 border-2">
                                <div className="bg-[#fdc800] h-[65%] text-black flex flex-col justify-center items-center">
                                    <h1 className="text-lg ">{notice?.date.split('-')[2]}</h1>
                                    <h2 className="text-lg">{new Date(2000, notice?.date.split('-')[1] - 1, 1).toLocaleString('default', { month: 'long' })}</h2>
                                </div>
                                <div className="bg-[#002147] h-[35%] flex justify-center items-center">
                                    <h1 className="text-white text-base">{notice?.date.split('-')[0]}</h1>
                                </div>
                            </div>
                            <div>
                                <p className="text-sm font-medium text-black opacity-50">Notice</p>
                                <h1 className="text-2xl font-semibold">{notice?.reason}</h1>

                                <p className="text-sm opacity-75 mt-4">{notice?.description}</p>
                            </div>
                        </div>)
                    }
                </div>
                <div className="py-6">
                    <Link ><button className="px-6 py-3 text-white bg-[#002147]  rounded-md font-medium  hover:-translate-y-1 " data-aos="fade-down">
                       See more..
                    </button></Link>
                </div>


            </div>


        </div>
    );
};

export default Notice;