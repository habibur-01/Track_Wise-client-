import "./Style.css"
import schedule from "../../assets/logos/behnam-norouzi-vC_6CryE7t0-unsplash.jpg"
const Schedule = () => {
    return (
        <div className="bg-base-200">
            <div className='bgbanner'>
                <div className=' bgbanner1 pl-10 flex justify-center items-center h-full bgbanner1'>
                    <h1 className='w-[60%] font-bold text-5xl text-white '>Show Your Transport Schedule </h1>
                </div>

            </div>
            {/* <div>
                <h1 className="text-2xl font-semibold border-b-2 text-center my-10">Schedule</h1>
            </div> */}
            <div className="h-[800px] bg-base-200 rounded-md flex items-center justify-center my-10  ">
            
                <div className=" w-[50%] h-[800px] flex items-center rounded-md ">
                    <img src={schedule} className="h-full w-full object-contain rounded-md " alt="schedule pic" />

                </div>
                <div className="w-[50%] rounded-md right-10 text-white text-center  bg-[#355b64] min-h-fit py-10 px-6">
                    <h1 className="text-3xl font-semibold ">Transport Schedule</h1>
                    <p className="mt-2 mb-8">Take a tour on transport schedule</p>
                    <div className=" grid grid-cols-2 gap-6">
                        <div className="text-center">
                            <h1 className="border-y-2 w-[30%] mx-auto text-xl font-semibold py-2">Sunday</h1>
                            <div className="flex justify-center gap-6 mt-6">
                                <p>7:20 am</p>
                                <p>11:30 am</p>
                                <p>1:40 pm</p>
                                <p>4:20 pm</p>

                            </div>
                        </div>
                        <div className="text-center">
                            <h1 className="border-y-2 w-[30%] mx-auto text-xl font-semibold py-2">Saturday</h1>
                            <div className="flex justify-center gap-6 mt-6">
                                <p>7:20 am</p>
                                <p>11:30 am</p>
                                <p>1:40 pm</p>
                                <p>4:20 pm</p>

                            </div>
                        </div>
                        <div className="text-center">
                            <h1 className="border-y-2 w-[30%] mx-auto text-xl font-semibold py-2">Monday</h1>
                            <div className="flex justify-center gap-6 mt-6">
                                <p>7:20 am</p>
                                <p>11:30 am</p>
                                <p>1:40 pm</p>
                                <p>4:20 pm</p>

                            </div>
                        </div>
                        <div className="text-center">
                            <h1 className="border-y-2 w-[30%] mx-auto text-xl font-semibold py-2">Tuesday</h1>
                            <div className="flex justify-center gap-6 mt-6">
                                <p>7:20 am</p>
                                <p>11:30 am</p>
                                <p>1:40 pm</p>
                                <p>4:20 pm</p>

                            </div>
                        </div>
                        <div className="text-center">
                            <h1 className="border-y-2 w-[30%] mx-auto text-xl font-semibold py-2">Wednesday</h1>
                            <div className="flex justify-center gap-6 mt-6">
                                <p>7:20 am</p>
                                <p>11:30 am</p>
                                <p>1:40 pm</p>
                                <p>4:20 pm</p>

                            </div>
                        </div>
                        <div className="text-center">
                            <h1 className="border-y-2 w-[30%] mx-auto text-xl font-semibold py-2">Thursday</h1>
                            <div className="flex justify-center gap-6 mt-6">
                                <p>7:20 am</p>
                                <p>11:30 am</p>
                                <p>1:40 pm</p>
                                <p>4:20 pm</p>

                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Schedule;