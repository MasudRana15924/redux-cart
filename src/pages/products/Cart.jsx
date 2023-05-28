import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
    addToCart,
    clearCart,
    decreaseCart,
    getTotals,
    removeFromCart,
} from "../../state/products/cartSlice";

const Cart = () => {
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTotals());
    }, [cart, dispatch]);

    const handleAdd = (product) => {
        dispatch(addToCart(product));
  

    };
    const handleDecrease = (product) => {
        dispatch(decreaseCart(product));
    };
    const handleRemove = (product) => {
        dispatch(removeFromCart(product));
    };
    const handleClear = () => {
        dispatch(clearCart());
    };
    return (
        <div className="cart-container mt-48">
            {/* <h2 className="text-start text-black">Shopping Cart</h2> */}
            {cart.cartItems.length === 0 ? (
                <div className="cart-empty">
                    <p>Your cart is currently empty</p>
                </div>
            ) : (
                <div>
                    <div className="text-black titles">
                        <h3 className="product-title">Product</h3>
                        <h3 className="price">Price</h3>
                        <h3 className="quantity">Quantity</h3>
                        <h3 className="total">Total</h3>
                    </div>
                    <div className="cart-items">
                        {cart.cartItems &&
                            cart.cartItems.map((cartItem) => (
                                <div className="cart-item" key={cartItem._id}>
                                    <div className="cart-product">
                                        <img src={cartItem.gallery[0]} alt={cartItem.name} />
                                        <div>
                                            <h3 className="text-black">{cartItem.title}</h3>
                                            <p className="text-black">{cartItem.description}</p>
                                            <button
                                                className="h-10 bg-black"
                                                onClick={() => handleRemove(cartItem)}
                                            >
                                                Remove
                                            </button>
                                        </div>
                                    </div>
                                    <div className="text-black ">
                                        ${cartItem.listing_price}
                                    </div>
                                    <div className="cart-product-quantity">
                                        <button
                                            className="text-black"
                                            onClick={() => handleDecrease(cartItem)}
                                        >
                                            -
                                        </button>
                                        <div className="text-black mt-3">
                                            {cartItem.cartQuantity}
                                        </div>
                                        <button
                                            className="text-black"
                                            onClick={() => handleAdd(cartItem)}
                                        >
                                            +
                                        </button>
                                    </div>
                                    <div className="text-black ">
                                        ${cartItem.listing_price * cartItem.cartQuantity}
                                    </div>
                                </div>
                            ))}
                    </div>
                    <div className="cart-summary">
                        <button className="bg-red-600 mt-10" onClick={() => handleClear()}>
                            Clear Cart
                        </button>

                        <div>
                            <div>
                                <span className="text-black mr-5">Subtotal</span>
                                <span className="text-black mr-5">${cart.cartTotalAmount}</span>
                            </div>
                            <Link to="/checkout">
                            <button className="bg-green-600 text-white mt-5" onClick={() => handleClear()}>Check out</button>
                            </Link>
                          

                            <div className=" mt-10">
                                <Link to="/">
                                    <span>Continue Shopping</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            )}


        </div>
    );
};

export default Cart;
