import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { Link } from "react-router-dom";
import { BsBag } from "react-icons/bs";
import { MdCancelPresentation } from "react-icons/md";
import { useSelector } from "react-redux";
const navigation = [
    { name: "DIETS", to: "/" },
    { name: "CALORIE CALCULATOR", to: "/about" },
    { name: "MENU", to: "/contact" },
    { name: "DELIVERY", to: "/doctors" },
    { name: "ABOUT US ", to: "/insurance" },
    { name: "BLOG", to: "/bloods" },
    { name: "FAQ", to: "/nurses" },
];

const Navbar = () => {
    const [active, setActive] = useState(false);
    const showMenu = () => {
        setActive(!active);
    };

    const { cartTotalQuantity } = useSelector((state) => state.cart);
    return (
        <header className="w-3/4 mx-auto absolute inset-x-0 top-0 z-50">
            <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1">
                    <img className="h-8 w-auto" src="" alt="" />
                   <Link to='/'>
                   <p className="text-sm font-semibold leading-6 text-gray-900">Fit Me</p>
                   </Link>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        onClick={showMenu}
                    >
                        <span className="sr-only">Open main menu</span>
                        {/* <Bars3Icon className="h-6 w-6" aria-hidden="true" /> */}
                        <FiMenu className="lg:hidden block h-10 w-10 cursor-pointer " />
                    </button>
                </div>
                <div className="hidden lg:flex lg:gap-x-12">
                    {navigation.map((item) => (
                        <Link
                            key={item.name}
                            to={item.to}
                            className="text-sm font-semibold leading-6 text-gray-900"
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <Link
                        to="/cart"
                        className="text-sm font-semibold leading-6 text-gray-900 me-10"
                    >
                        {" "}
                        <div className="flex">
                       
                        <BsBag className="h-8 w-8"> </BsBag>
                        <span className="cart-text"> {cartTotalQuantity} </span>
                        </div>
                    </Link>

                    {/* <p className="text-black">{cartTotalQuantity}</p> */}
                    <Link to="/login" className="text-sm font-semibold leading-6 text-gray-900">
                        <button className="h-10 text-white text-sm text-center ">Signin</button>
                    </Link>
                </div>
            </nav>
            <ul
                className={
                    active
                        ? "flex-col flex fixed inset-0 left-1/4 lg:left-3/4 uppercase   gap-6  md: lg:block bg-black text-white text-center ml-24 "
                        : "hidden"
                }
            >
                <div className="grid grid-cols-2 md:gap-96">
                    <MdCancelPresentation
                        className="text-5xl"
                        onClick={showMenu}
                    ></MdCancelPresentation>
                    <p onClick={showMenu} className="mt-3 ">
                        Cancel
                    </p>
                </div>
                <li>
                    <Link to="/" className="text-white px-5 py-2  font-semibold block">
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/about" className="text-white px-5 py-2  font-semibold block ">
                        About
                    </Link>
                </li>
                <li>
                    <Link to="/contact" className="text-white px-5 py-2 font-semibold block">
                        Contact Us
                    </Link>
                </li>
                <div>
                    <li>
                        <Link
                            to="/user-profile"
                            className="text-white px-5 py-2  font-semibold block"
                        >
                            My Profile
                        </Link>
                    </li>
                    <li></li>
                    <button className="btn bg-black border-black hover:bg-black w-full mx-auto mt-72">
                        Logout as{" "}
                    </button>
                </div>{" "}
                :{" "}
                <li>
                    <Link to="/user-signin" className="text-white px-5 py-2  font-semibold block">
                        Login
                    </Link>
                </li>
            </ul>
        </header>
    );
};

export default Navbar;
