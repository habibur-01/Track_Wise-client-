import Banner from "./Banner/Banner";
import Feature from "./Feature/Feature";
import RegistrationFeature from "./RegistrationFeature/RegistrationFeature";
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
      
    </div>
  );
};

export default Home; 