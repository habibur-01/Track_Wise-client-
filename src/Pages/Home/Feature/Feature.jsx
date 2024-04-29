import track from "../../../assets/logos/location.png"
import register from "../../../assets/logos/verify.png"
import schedule from "../../../assets/logos/schedule.png"

const Feature = () => {
    return (
        <div className="bg-[#002147] text-white flex justify-center w-[80%] mx-auto z-20">
            <div className="flex justify-between gap-4 py-10 px-10  border-r-[1px] w-[33%]">
                <div className="space-y-4">
                    <h2 className="text-2xl font-medium text-left">Registration</h2>
                    <p className="text-sm">You can complete your transport registration easily.</p>
                </div>
                <div>
                    <img src={register} className="h-14 w-14" alt="register icon"></img>
                </div>
            </div>
            <div className="flex justify-between gap-4 py-10 px-10 border-r-[1px] w-[33%]">
                <div className="space-y-4">
                    <h2 className="text-2xl font-medium text-left">Location</h2>
                    <p className="text-sm">Here, find your transport location easily.</p>
                </div>
                <div>
                    <img src={track} className="h-14 w-14" alt="location icon" />
                </div>
            </div>
            <div className="flex justify-between gap-4 py-10 px-10 w-[33%]">
                <div className="space-y-4">
                    <h2 className="text-2xl font-medium text-left">Schedule</h2>
                    <p className="text-sm">Explore more to know about your bus schedule.</p>
                </div>
                <div>
                   <img src={schedule} className="h-14 w-14" alt="schedule icon" />
                </div>
            </div>
            
        </div>
    );
};

export default Feature;