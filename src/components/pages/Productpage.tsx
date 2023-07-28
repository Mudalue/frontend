import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { apiRequest } from '../utils/api';
import { AppContext } from '../context/CartContext';
import Carousel from '../ui/molecules/Carousel';
import { carouselImages } from "../constants/content"
import IncrementDecrementInput2 from '../ui/molecules/Input';
import Button from '../ui/atom/Button';
import Alert from '../ui/atom/Alert';
import Loader from '../ui/atom/Loader';
import Footer from '../ui/organisms/Footer';
import defaultImg from "../asset/images/default.png"


interface Product {
    id: number;
    name: string;
    title: string;
    price: string;
    description: string;
    image: string;
}

const Productpage = () => {
    const { productid } = useParams<{ productid: string }>();
    const [response, setResponse] = useState<Product | null>(null);
    const [count, setCount] = useState(1);
    const [category, setCategory] = useState('');
    const [cart, setCart] = useContext(AppContext);
    const [show, setShow] = useState(false);
    const [alerting, setAlerting] = useState({
        color: '',
        data: '',
        show: false,
    });

    // Get product by id
    const getProductById = async () => {
        setShow(true);
        try {
            const response = await apiRequest<Product>(
                {},
                `/products/${productid}`,
                'GET'
            );
            console.log(response)
            if (response.status === 200) {
                setResponse(response.data);
            }
        } catch (error) {
            console.log(error);
        } finally {
            setShow(false);
        }
    };

    // Saving cart to local storage
    // Saving cart to local storage
    const save = () => {
        let products = [...cart];
        console.log(products);
        if (response) {
            if (products.length === 0) {
                products.push({
                    id: response.id,
                    name: response.name,
                    description: response.description,
                    images: response.image,
                    price: count * parseFloat(response.price),
                    item: count,
                });
                setCart(products);
                setAlerting({
                    color: 'success',
                    data: 'Item added successfully',
                    show: true,
                });
            } else {
                const check = products.find((item) => item.id === response.id);
                if (check) {
                    setAlerting({
                        color: 'danger',
                        data: 'Item already in cart',
                        show: true,
                    });
                } else {
                    products.push({
                        id: response.id,
                        name: response.name,
                        description: response.description,
                        images: response.image,
                        price: count * parseFloat(response.price),
                        item: count,
                    });
                    setCart(products);
                    setAlerting({
                        color: 'success',
                        data: 'Item added successfully',
                        show: true,
                    });
                }
            }
        }
    };

    console.log(count)
    useEffect(() => {
        getProductById();
    }, []);

    return (
        <>
            {alerting.show && <Alert color={alerting.color as "success" | "danger" | "warning" | "info"} data={alerting.data} />}

            {
                show ? <Loader /> : (<>
                    <div className='container' style={{ marginTop: 50 }}>
                        <div className="row">
                            <div className="col-md-6">
                                <Carousel items={carouselImages} autoPlay={true} showControls={true} showIndicators={true} />
                            </div>
                            <div className="col-md-6">
                                <div className='card' style={{ padding: 30, borderRadius: 40 }}>
                                    <div>
                                        <h6 className='small-text fw-bold'>{response?.name}</h6>
                                        <p className='text-secondary'>Out of office "ooo" sneakers</p>
                                        <p className='small-text fw-bold'>&#36;{count * parseFloat(response?.price || "0")}</p>
                                    </div>
                                    <hr style={{ width: "100%" }} />
                                    <div>
                                        <h6 className='small-text lh-lg fw-bold'>Quantity</h6>
                                        <IncrementDecrementInput2 count={count} setCount={setCount} min={1} max={10} step={1} />
                                    </div>
                                    <div style={{ marginTop: "50px", marginBottom: "20px" }}>
                                        <Button text='Add to Cart' color='#000' onclick={save} width='100%' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container" style={{ marginTop: 50 }}>
                        <div className="row">
                            <div className="col-md-6">
                                <div>
                                    <h6 className='lh-lg'>Description</h6>
                                    <hr style={{ width: "100%" }} />
                                    <p className='small-text lh-lg'>{response?.description}</p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className='d-flex justify-content-center align-items-center'>
                                    <img src={response?.image || defaultImg} className='img-fluid' alt="product_img" style={{ width: "100%", height: 350, borderRadius: 40 }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </>)
            }
            <Footer />
        </>

    );
};

export default Productpage;
