import Banner from "./Banner/Banner";
import Feature from "./Feature/Feature";
import RegistrationFeature from "./RegistrationFeature/RegistrationFeature";


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
      
    </div>
  );
};

export default Home; <h1>Hi home is here</h1>