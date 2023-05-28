
import { RxVideo } from "react-icons/rx";
import avacato from '../../assets/Avocado.png'
import apple from '../../assets/Red Apple.png'
const Banner =()=>{
    return (
        <div className="mt-40">
            <h2 className="text-black text-7xl">Premium quality</h2>
            <div className="mt-8">
                <span>
                
                    <span className="text-black text-7xl ">catering diets </span>
                    <button className="btn-apple"> <img src={apple} alt=""  /> </button>
                    <span className="text-black text-7xl ">for </span>
                </span>
                <br />
                <span>
                
                <button className="btn-avacato bg-white"> <img src={avacato} alt="" className="avacato-img"/></button> 
                   
                <span className="text-black text-7xl ml-4 mt-5"> exacting</span>
                </span>
                <br />
               
            </div>
         
            <div>
                <p className="text-black mt-8">
                    Culpa qui officia deserunt mollitia animi. Et harum quidem rerum facilis est et{" "}
                    <br />
                    expedita distinctio. Nam libero tempore, cum soluta nobis est
                </p>
            </div>
            <div className=" w-1/4 mx-auto flex mt-8">
                <button className="h-10 text-white text-sm w-48 ">Adjust Diet </button>

                <div className="flex ml-2">
                    <RxVideo className="text-4xl text-black"></RxVideo>

                    <button className="h-10 w-32 text-black text-sm text-center bg-white">
                      
                        Watch Video
                    </button>
                </div>
            </div>
        </div>
    );
}
export default Banner ;