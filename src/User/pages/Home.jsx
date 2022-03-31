import Footer from "../components/Footer";
import Header from "../components/Header";
import LatestProducts from "../components/LatestProducts";
import NewProduct from "../components/NewProducts";
import Slider from "../components/Slider";

function Home() {
    return ( 
        <>
            <Header />
            <Slider />
            <LatestProducts />
            <NewProduct />
            <Footer />
        </>
     );
}

export default Home;