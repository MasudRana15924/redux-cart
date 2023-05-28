import { Link } from "react-router-dom";


const CheckOut=()=>{
    return(
        <div>
              <h2 className="text-black text-center text-4xl">Thanks to Stay with Us </h2>
              <Link to="/">
             <button className="mt-10 bg-green-600 text-white">Back to Home</button>
              </Link>

        </div>
    )
}
export default CheckOut;