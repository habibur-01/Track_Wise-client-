import track from "../../../assets/file (2).png"
import register from "../../../assets/1280.png"
import schedule from "../../../assets/640.png"


const Feature = () => {
    return (
        <div className="flex justify-center">
            <div className="grid gap-10 md:grid-cols-3 lg:grid-cols-3">
                <div className="card  lg:w-72 glass">
                    <figure><img src={register} className="h-28 mt-5" alt="car!" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Registration</h2>
                        <p>Here, You can complete your transport registration easily.</p>
                        {/* <div className="card-actions justify-end">
                            <button className="btn btn-primary">Learn now!</button>
                        </div> */}
                    </div>
                </div>
                <div className="card lg:w-72 glass">
                    <figure><img src={track} className="h-28 mt-5" alt="car!" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Track</h2>
                        <p>Are you want to know where is your transport?You can easily find it here.</p>
                        {/* <div className="card-actions justify-end">
                            <button className="btn btn-primary">Learn now!</button>
                        </div> */}
                    </div>
                </div>
                <div className="card lg:w-72 glass">
                    <figure><img src={schedule} className="h-28 mt-5" alt="car!" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Schedule</h2>
                        <p>Explore more to know about your bus schedule.</p>
                        {/* <div className="card-actions justify-end">
                            <button className="btn btn-primary">Learn now!</button>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Feature;