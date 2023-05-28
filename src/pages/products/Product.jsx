import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart, getTotals } from "../../state/products/cartSlice";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Product=({product})=>{
    const{title,gallery,bed,bath,garage,description,property_type,listing_price}=product;

    const dispatch = useDispatch();
    const handleCart=(product)=>{
        dispatch(addToCart(product));
        dispatch(getTotals())
        toast.success("Added To Cart")
    }
    return(
        <div className="products-card col-span-12 sm:col-span-6 md:col-span-3  border">
            <div className="w-full flex flex-col ">
                <div className="relative">
                    <Link >
                        <img
                            // src={images[0].url}
                            src={gallery[0]}
                            className=""
                            alt={name}
                        />
                   
                    </Link>
                </div>

                <div className=" text-start ml-5">
                    <Link >
                        <p className="text-start text-sm font-semibold leading-6 text-gray-900 mt-5" >
                            {title} 
                        </p>
                    </Link>
                    
                </div>
                <div className="flex text-start  gap-4 ml-2">
                    
                    
                        <button className="bg-gray-200 h-10 text-black text-sm ">     Bed {bed} </button>

            
                        <button className="bg-gray-200 h-10 text-black text-sm ">     Bath {bath}  </button>
                       
                           <button className="bg-gray-200 h-10 text-black text-sm ">  Garage {garage} </button>
                    
                </div>
                <div>
                    <p className="text-start ml-5 text-sm font-semibold leading-6 text-gray-900 mt-5" >Property Type -{property_type}</p>
                    <p className="text-sm ml-5 font-semibold leading-6 text-gray-900 mt-5" >{description}</p>
                </div>
                <div className="flex mt-12 gap-4 ml-5">
                    <p className="text-black mt-2">Price :  {listing_price}</p>
                  
                     <button className="h-10 bg-green-600" onClick={() => handleCart(product)}>Add To Cart</button> 
                    
                </div>

            </div>

            <ToastContainer
position="top-center"
autoClose={500}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
        </div>
       
    )
}
export default Product;