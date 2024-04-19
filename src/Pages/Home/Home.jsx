import Banner from "./Banner/Banner";
import Feature from "./Feature/Feature";
import RegistrationFeature from "./RegistrationFeature/RegistrationFeature";
import Schedule from "./Schedule/Schedule";
import TrackFeature from "./TrackFeature/TrackFeature";


const Home = () => {
  return (
    <div>
      <Banner />
      <div className="-mt-16">
        <Feature />
      </div>
      <div>
        <RegistrationFeature/>
      </div>
      <div>
        <TrackFeature/>
      </div>
      <div>
        <Schedule/>
      </div>
      
    </div>
  );
};

export default Home; 