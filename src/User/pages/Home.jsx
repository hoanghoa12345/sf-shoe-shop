import LatestProducts from "../components/LatestProducts";
import NewProduct from "../components/NewProducts";
import Policy from "../components/Policy";
import Slider from "../components/Slider";

function Home() {
    return ( 
        <>
            <Slider />
            <Policy />
            <LatestProducts />
            <NewProduct />
        </>
     );
}

export default Home;