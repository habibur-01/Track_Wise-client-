import { Link } from "react-router-dom";
import pic1 from "../../../assets/concept.jpg"

const RegistrationFeature = () => {
    return (
        <div className="md:flex md:justify-center md:items-center py-12">
            <div className="w-[50%] h-[550px] flex justify-center items-center ">
                <img src={pic1} className="w-[70%] h-[450px] object-cover" alt="" />
            </div>
            <div className="w-[50%] flex justify-center items-center">
                <div className="w-[80%] ">
                    <div>
                        <p className="text-sm mb-2">Student</p>
                        <h1 className="text-4xl font-semibold">Registration for transport</h1>


                    </div>
                    <div className="mt-6 opacity-70 text-gray-600">
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat doloribus delectus dolores rerum incidunt est, vitae voluptatum in. Fugiat laborum enim ducimus harum hic quidem explicabo, velit magni vitae commodi. Explicabo iste, laudantium autem eligendi, consequuntur quas doloribus laborum at magni placeat impedit neque cumque. Exercitationem animi eveniet dignissimos temporibus.</p>
                    </div>
                    <div className="pt-6">
                        <Link to={"/register"}><button className="px-6 py-3 text-black bg-[#fdc800]  rounded-md font-medium  hover:-translate-y-1 " data-aos="fade-down">
                            Explore
                        </button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegistrationFeature;