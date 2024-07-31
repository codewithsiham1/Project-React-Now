import About from "./About";
import Banner from "./Banner";
import Card from "./Card";
import Chefs from "./Chefs";
import Customer from "./Customer";
import Footer from "./Footer";
import Radius from "./Radius";
import Services from "./Services";



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <Card></Card>
            <Radius></Radius>
            <Chefs></Chefs>
            <Customer></Customer>
            <Footer></Footer>
    
        </div>
    );
};

export default Home;