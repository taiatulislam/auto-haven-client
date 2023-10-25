import Banner from "../components/Banner";
import ChoseUs from "../components/ChoseUs";
import PopularBrands from "../components/PopularBrands";
import UpcommingCars from "../components/UpcommingCars";

const Home = () => {

    return (
        <div>
            <Banner></Banner>
            <UpcommingCars></UpcommingCars>
            <PopularBrands></PopularBrands>
            <ChoseUs></ChoseUs>
        </div>
    );
};

export default Home;