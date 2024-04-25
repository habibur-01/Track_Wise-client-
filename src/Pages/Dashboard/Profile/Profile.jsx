import { Link } from "react-router-dom";
import DashboardTitle from "../../../Components/DashboardTitle/DashboardTitle";
import useAuth from "../../../hooks/useAuth"
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../api/AxiosSecure/useAxiosSecure";

const Profile = () => {
    const { user } = useAuth()
    const axiosSecure = useAxiosSecure()
    const { data: userInfo, isPending } = useQuery({
        queryKey: ['userData'],
        queryFn: async () => {

            const res = await axiosSecure.get(`/users?email=${user?.email}`);
            return res.data;

        },
    });
    if (isPending) {
        return (<div className="w-full h-screen flex justify-center items-center">
            <span className="loading loading-ring loading-lg"></span>
        </div>
        )
    } 
    console.log(userInfo)
    return (
        <div>
            <DashboardTitle title={'Profile Information'}></DashboardTitle>
            <div className="mx-20 my-10 flex gap-10">
                <div className="w-96 min-h-fit">
                    {
                        user ?
                            <>{user.photoURl || userInfo[0]?.image ? <img src={user.photoURl || userInfo[0]?.image} className="w-full h-[400px -16px] p-4 border-2 overflow-x-hidden"></img> : <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" className="w-full h-[400px] overflow-x-hidden"></img>}</> :
                            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" className="w-full h-[400px] overflow-x-hidden"></img>
                    }
                    <div className="my-4">
                        <Link to={"/dashboard/updateProfile"}><button className="btn w-full bg-[#284958] text-white">Edit Profile</button></Link>
                    </div>

                </div>
                <div className="bg-base-200 p-6 text-black min-h-content flex-1">
                    <h1 className="text-lg text-center border-b-4 pb-2">Personal Data</h1>
                    <div className="space-y-2 mx-4 mt-2">
                        <div className="flex justify-between">
                            <div>
                                <p>Name</p>
                            </div>
                            <div>
                                <p>{user.displayName}</p>
                            </div>
                        </div>

                        <div className="flex justify-between  ">
                            <div>
                                <p>Email</p>
                            </div>
                            <div>
                                <p>{user.email}</p>
                            </div>
                        </div>
                        <div className="flex justify-between">
                            <div>
                                <p>Student ID</p>
                            </div>
                            <div>
                                <p>{`${userInfo[0]?.studentId || ""}`}</p>
                            </div>
                        </div>
                        <div className="flex justify-between">
                            <div>
                                <p>Date Of Birth</p>
                            </div>
                            <div>
                                <p>{`${userInfo[0]?.dob || ''}`}</p>
                            </div>
                        </div>
                        <div className="flex justify-between ">
                            <div>
                                <p>Place of Birth</p>
                            </div>
                            <div>
                                <p>{`${userInfo[0]?.pob || ''}`}</p>
                            </div>
                        </div>
                        <div className="flex justify-between">
                            <div>
                                <p>Gender</p>
                            </div>
                            <div>
                                <p>{`${userInfo[0]?.gender || ''}`}</p>
                            </div>
                        </div>
                        <div className="flex justify-between ">
                            <div>
                                <p>Maritual Status</p>
                            </div>
                            <div>
                                <p>{`${userInfo[0]?.maritualStatus || ''}`}</p>
                            </div>
                        </div>
                        <div className="flex justify-between ">
                            <div>
                                <p>Religion</p>
                            </div>
                            <div>
                                <p>{`${userInfo[0]?.religion || ''}`}</p>
                            </div>
                        </div>
                        <div className="flex justify-between">
                            <div>
                                <p>Nationality</p>
                            </div>
                            <div>
                                <p>{`${userInfo[0]?.nationality || ''}`}</p>
                            </div>
                        </div>
                        <div className="flex justify-between ">
                            <div>
                                <p>National ID</p>
                            </div>
                            <div>
                                <p>{`${userInfo[0]?.nationalId || ''}`}</p>
                            </div>
                        </div>
                    </div>
                    <div className="pt-12">
                        <h1 className="text-lg text-center border-b-4 pb-2">Present Address</h1>
                        <div className="space-y-2 mt-2">
                            <div className="flex justify-between ">
                                <div>
                                    <p>Address</p>
                                </div>
                                <div>
                                    <p>{`${userInfo[0]?.address || ''}`}</p>
                                </div>
                            </div>

                            <div className="flex justify-between  ">
                                <div>
                                    <p>Post Office</p>
                                </div>
                                <div>
                                    <p>{`${userInfo[0]?.postOffice || ''}`}</p>
                                </div>
                            </div>
                            <div className="flex justify-between">
                                <div>
                                    <p>Police Station</p>
                                </div>
                                <div>
                                    <p>{`${userInfo[0]?.policeStation || ''}`}</p>
                                </div>
                            </div>
                            <div className="flex justify-between">
                                <div>
                                    <p>District/City</p>
                                </div>
                                <div>
                                    <p>{`${userInfo[0]?.district || ''}`}</p>
                                </div>
                            </div>
                            <div className="flex justify-between ">
                                <div>
                                    <p>Division/State</p>
                                </div>
                                <div>
                                    <p>{`${userInfo[0]?.division || ''}`}</p>
                                </div>
                            </div>
                            <div className="flex justify-between">
                                <div>
                                    <p>Zip Code</p>
                                </div>
                                <div>
                                    <p>{`${userInfo[0]?.zipCode || ''}`}</p>
                                </div>
                            </div>
                            <div className="flex justify-between">
                                <div>
                                    <p>Country</p>
                                </div>
                                <div>
                                    <p>Bangladesh</p>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>

        </div>
    );
};

export default Profile;