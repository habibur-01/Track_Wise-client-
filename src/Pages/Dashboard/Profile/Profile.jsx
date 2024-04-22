import DashboardTitle from "../../../Components/DashboardTitle/DashboardTitle";
import imge from "../../../assets/logos/981.jpg"
import useAuth from "../../../hooks/useAuth"

const Profile = () => {
    const { user } = useAuth()
    return (
        <div>
            <DashboardTitle title={'Profile Information'}></DashboardTitle>
            <div className="mx-20 my-10 flex gap-10">
                <div className="w-96 min-h-fit">
                    {
                        user ?
                            <>{user.photoURl ? <img src={user.photoURl} className="w-full h-[500px] overflow-x-hidden"></img> : <img src={imge} className="w-full h-[500px] overflow-x-hidden"></img>}</> :
                            <img src={imge} className="w-full h-[400px] overflow-x-hidden"></img>
                    }
                    <div className="my-4">
                        <button className="btn w-full bg-[#80efdb]">Edit Profile</button>
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
                                <p>Habibure Rahman Zihad</p>
                            </div>
                        </div>

                        <div className="flex justify-between  ">
                            <div>
                                <p>Email</p>
                            </div>
                            <div>
                                <p>Habibure Rahman Zihad</p>
                            </div>
                        </div>
                        <div className="flex justify-between">
                            <div>
                                <p>student Id</p>
                            </div>
                            <div>
                                <p>Habibure Rahman Zihad</p>
                            </div>
                        </div>
                        <div className="flex justify-between">
                            <div>
                                <p>Date Of Birth</p>
                            </div>
                            <div>
                                <p>Habibure Rahman Zihad</p>
                            </div>
                        </div>
                        <div className="flex justify-between ">
                            <div>
                                <p>Place of Birth</p>
                            </div>
                            <div>
                                <p>Habibure Rahman Zihad</p>
                            </div>
                        </div>
                        <div className="flex justify-between">
                            <div>
                                <p>Gender</p>
                            </div>
                            <div>
                                <p>Habibure Rahman Zihad</p>
                            </div>
                        </div>
                        <div className="flex justify-between ">
                            <div>
                                <p>Maritual Status</p>
                            </div>
                            <div>
                                <p>Habibure Rahman Zihad</p>
                            </div>
                        </div>
                        <div className="flex justify-between ">
                            <div>
                                <p>Religion</p>
                            </div>
                            <div>
                                <p>Habibure Rahman Zihad</p>
                            </div>
                        </div>
                        <div className="flex justify-between">
                            <div>
                                <p>Nationality</p>
                            </div>
                            <div>
                                <p>Habibure Rahman Zihad</p>
                            </div>
                        </div>
                        <div className="flex justify-between ">
                            <div>
                                <p>National Id</p>
                            </div>
                            <div>
                                <p>Habibure Rahman Zihad</p>
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
                                    <p>Mirpur-1</p>
                                </div>
                            </div>

                            <div className="flex justify-between  ">
                                <div>
                                    <p>Post Office</p>
                                </div>
                                <div>
                                    <p>Mirpur</p>
                                </div>
                            </div>
                            <div className="flex justify-between">
                                <div>
                                    <p>Police Station</p>
                                </div>
                                <div>
                                    <p>Mirpur Model Thana</p>
                                </div>
                            </div>
                            <div className="flex justify-between">
                                <div>
                                    <p>District/City</p>
                                </div>
                                <div>
                                    <p>Dhaka</p>
                                </div>
                            </div>
                            <div className="flex justify-between ">
                                <div>
                                    <p>Division/State</p>
                                </div>
                                <div>
                                    <p>Dhaka</p>
                                </div>
                            </div>
                            <div className="flex justify-between">
                                <div>
                                    <p>Zip Code</p>
                                </div>
                                <div>
                                    <p>1205</p>
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