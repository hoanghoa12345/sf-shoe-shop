import LatestProducts from "../components/LatestProducts";
import NewProduct from "../components/NewProducts";
import Slider from "../components/Slider";
import Policy from "../components/Policy";

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
