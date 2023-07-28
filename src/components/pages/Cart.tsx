import React, { useContext, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faCartShopping, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { AppContext } from "../context/CartContext";
import Button from "../ui/atom/Button";
import { useNavigate } from "react-router-dom";
import IncrementDecrementInput from "../ui/atom/IncementDecrement";
import { cartContent } from "../constants/content";
import defaultImg from "../asset/images/default.png"

interface CartItem {
    id: number;
    name: string;
    description: string;
    price: number;
    images: string;
    item: number;
}

const Cart: React.FC = () => {
    const [cart, setCart] = useContext(AppContext);
    const [count, setCount] = useState(0);
    const [counts, setCounts] = useState<number[]>([]);
    let navigate = useNavigate();

    //link
    const handleClick = () => {
        navigate("/", { replace: true });
    };

    //checkout
    const checkout = () => {
        navigate("/employ-me", { replace: true });
    };

    //clear cart
    const clearCart = () => {
        setCart([]);
    };


    return (
        <>
            {cart?.length === 0 ? (
                <>
                    <div style={{ marginTop: 100, marginBottom: 100 }}>
                        <div className="text-center">
                            <FontAwesomeIcon
                                icon={faCartShopping}
                                className="text-danger"
                                size="6x"
                            />
                        </div>
                        <h2 className="text-center fw-bold lh-lg">
                            No item available in Cart
                        </h2>
                        <p
                            className="text-center text-danger cursor"
                            onClick={handleClick}
                        >
                            choose an item to add to cart!
                        </p>
                    </div>
                </>
            ) : (
                <div className="container" style={{ marginBottom: 50, marginTop: 60 }}>
                    <div className="row justify-content-center">
                        <div className="col-md-7" >
                            <div>
                                <h2 className="fw-bold lh-lg">Your Bag</h2>
                            </div>
                            {cart?.map((item: CartItem, index) => (
                                <>
                                    <div
                                        className="card"
                                        style={{ height: 350, padding: 20, border: "none" }}
                                        key={item.id}
                                    >

                                        <div className="d-flex" style={{ padding: 20 }}>
                                            <div style={{ marginTop: 10 }}>
                                                <img src={item.images || defaultImg} alt="prod_img" className="img-fluid" style={{ width: 166, height: 166, borderRadius: 12 }} />
                                            </div>
                                            <div style={{ marginTop: 10, width: "100%" }} className="mx-3">
                                                <div className="d-flex justify-content-between">
                                                    <span className="fw-bold" style={{ fontWeight: 100, fontSize: 14 }}>
                                                        {item.name}
                                                    </span>
                                                    <div>
                                                        <span className="fw-bold" style={{ fontWeight: 100, fontSize: 14 }}>
                                                            &#36;{item.price}{" "}
                                                        </span>

                                                    </div>

                                                </div>
                                                <p className="fw-bold">
                                                    <span className="fw-light" style={{ fontWeight: 100, fontSize: 12 }}>
                                                        {item.description}
                                                    </span>
                                                </p>

                                                <div className="d-flex">
                                                <IncrementDecrementInput count={count} setCount={setCount} min={1} max={10} step={1} defaultValue={item?.item}/>
                                                    <button style={{ border: 'none', margin: "0 10px", backgroundColor: "transparent", textDecoration: "underline" }} className="text-secondary fw-bold" onClick={() => {
                                                        let value = item.id;
                                                        const arr = [...cart];
                                                        const cartItem = arr.filter(
                                                            (item) => item.id !== value
                                                        );
                                                        setCart(cartItem);
                                                    }}>Remove</button>
                                                </div>
                                            </div>
                                        </div>
                                        <hr style={{ width: "100%" }} />
                                    </div>


                                </>
                            ))}
                        </div>
                        <div className="col-md-4">
                            <div className="card" style={{ height: "auto", borderRadius: 12 }}>
                                <div>
                                    <h2 className="fw-bold lh-lg text-center">Summary</h2>
                                    <div className="p-3">
                                        {
                                            cartContent.map((d) => (
                                                <div className="d-flex justify-content-between align-items-center" key={d.id}>
                                                    <p className="big-text">{d.title}</p>
                                                    <p className="big-text" style={{ color: d.title === "Discount" ? "orange" : "#000" }}>
                                                        {d.title === "Discount" && (<span>-</span>)}
                                                        &#36;{d.amount}</p>
                                                </div>
                                            ))
                                        }
                                        <hr />
                                        <div className="d-flex justify-content-between align-items-center mt-3">
                                            <h5 className="fw-bold">Total</h5>
                                            <span className="fw-bold big-text">
                                                &#36;
                                                {cart.reduce(
                                                    (total: any, currentItem: any) =>
                                                        (total = total + currentItem.price),
                                                    0
                                                )}
                                            </span>
                                        </div>
                                        <div className="me-2 my-3">
                                            <button className="btn btn=dark d-flex justify-content-center align-items-center w-100 bg-dark text-light py-2 fw-bold" onClick={checkout}>
                                                Checkout
                                                <FontAwesomeIcon icon={faArrowRight} className="mx-2" />
                                            </button>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Cart;
