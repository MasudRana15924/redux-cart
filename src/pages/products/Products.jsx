import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../state/products/productsSlice";
import Product from "./Product";

const Products=()=>{
    const dispatch = useDispatch();
     const { products } = useSelector(state => state.products);
  
    useEffect(() => {
        dispatch(fetchProducts());
       
    }, [dispatch])
    let content;
    if(products){
        content=products.map(product => <Product key={product._id} product={product} />)
    }
    return(
        <div className="mt-48">
            <h1 className="text-start text-black text-4xl">The most populer property</h1>
            <div  className="grid grid-cols-12 gap-4  lg:px-0 min-h-[300px] mt-8 " >
            
            {
             content
            }
         </div>
        </div>
    )
}
export default Products;