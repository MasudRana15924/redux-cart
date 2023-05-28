import Products from "../../pages/products/Products";
import Banner from "../banner/Banner";
import Review from "../review/Review";

const Home=()=>{
    return(
        <div>
            
           <Banner></Banner>
           <Review></Review>
           <Products></Products>
        </div>
    )
}
export default Home;