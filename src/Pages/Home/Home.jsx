import Banner from "./Banner/Banner";
import Feature from "./Feature/Feature";
import Notice from "./Notice/Notice";
import RegistrationFeature from "./RegistrationFeature/RegistrationFeature";
import Schedule from "./Schedule/Schedule";
import TotalSummary from "./TotalSummary/TotalSummary";
import TrackFeature from "./TrackFeature/TrackFeature";


const Home = () => {
  return (
    <div>
      <div className="relative z-0">
        <Banner />
        <div className="absolute text-center bottom-0 z-10 left-0 right-0">
          <Feature></Feature>
        </div>
      </div>

      <div>
        <RegistrationFeature />
      </div>
      <div>
        <TrackFeature />
      </div>
      <div>
        <Schedule />
      </div>
      <div >
        <Notice></Notice>
      </div>
      <div>
        <TotalSummary></TotalSummary>
      </div>

    </div>
  );
};

export default Home; 