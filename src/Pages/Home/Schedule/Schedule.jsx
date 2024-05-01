import { Link } from "react-router-dom";
import pic1 from "../../../assets/logos/time-smartphone-screen.jpg"
import "./styles.css"
const Schedule = () => {

    return (
        <div className="bgImg md:flex md:justify-center md:items-center h-[500px] " >

            <div className="bg-[#002147]/80 h-full w-full backdrop-blur-sm md:flex md:justify-center md:items-center py-12">
                <div className="w-[50%]  flex justify-center items-center text-white ml-24">
                    <div className="w-[80%] ">
                        <div>
                            <p className="text-sm mb-2">Bus Schedule</p>
                            <h1 className="text-4xl font-semibold"> Explore Transport Schedule</h1>
                        </div>
                        <div className="mt-6 opacity-70 ">
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat doloribus delectus dolores rerum incidunt est, vitae voluptatum in. Fugiat laborum enim ducimus harum hic quidem explicabo, velit magni vitae commodi. Explicabo iste, laudantium autem eligendi, consequuntur quas doloribus laborum at magni placeat impedit neque cumque. Exercitationem animi eveniet dignissimos temporibus.</p>
                        </div>
                        <div className="pt-6">
                            <Link to={"/schedule"}><button className="px-6 py-3 text-black bg-[#fdc800]  rounded-md font-medium  hover:-translate-y-1 " data-aos="fade-down">
                                Explore
                            </button></Link>
                        </div>
                    </div>
                </div>
                <div className="w-[50%] flex justify-center h-[500px]">
                    <img src={pic1} className="w-full h-full object-cover" alt="Show time on smartphone screen" />
                </div>
            </div>
        </div>
    );
};

export default Schedule;