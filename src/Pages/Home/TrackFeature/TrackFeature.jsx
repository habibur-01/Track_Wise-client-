import pic2 from "../../../assets/logos/map-pin-location-direction-position-graphic.jpg"

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
                    <img src={pic2} className="w-[60%] h-[400px] object-cover mx-auto mt-8 mb-2" alt="" />
                </div>
            </div>
        
            
        </div>
    );
};

export default TrackFeature;