import pic2 from "../../../assets/logos/side-view-hands-holding-smartphone.jpg"
// import pic1 from "../../../assets/logos/side-view-hands-holding-smartphone.jpg"

const TrackFeature = () => {
    return (
        <div className="bg-[#f5f5f5] flex flex-col justify-center items-center py-12">
            <div className="w-[60%] text-center ">
                <div>
                    <p className="text-sm mb-2">Track Transport</p>
                    <h1 className="text-4xl font-semibold">Track Your Transport Location </h1>


                </div>
                <div className="mt-6 opacity-70 text-gray-600">
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat doloribus delectus dolores rerum incidunt est, vitae voluptatum in. Fugiat laborum enim ducimus harum hic quidem explicabo, velit magni vitae commodi. Explicabo iste, laudantium autem eligendi, consequuntur quas doloribus laborum at magni placeat impedit neque cumque. Exercitationem animi eveniet dignissimos temporibus.</p>
                </div>
                <div>
                    <div className="">
                        <img src={pic2} className="w-[60%] h-[400px] border-4 border-[#002147] object-cover mx-auto mt-8 mb-2" alt="" />
                        {/* <div className="absolute  -left-8 -top-10">
                            <img src={pic1} className="w-[400px] h-[300px] object-cover mx-auto mt-8 mb-2" alt="" />
                        </div> */}
                    </div>

                </div>
            </div>


        </div>
    );
};

export default TrackFeature;