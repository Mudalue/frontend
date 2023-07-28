import React from 'react'
import hero_image from "../asset/images/heroImage.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { AllProduct } from '../ui/organisms/AllProduct';
import Footer from '../ui/organisms/Footer';
const LandingPage = () => {
    return (
        <>
            <div className='container'>
                <div className="row">
                    <div className="col-md-12">
                        <div style={{ backgroundColor: "#EAEEEF", borderRadius: 40, margin: "50px 30px", padding: "50px 25px" }}>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className='d-flex justify-content-center'>
                                        <div className='pt-3'>
                                            <h2 className='herosubheader'>25% OFF</h2>
                                            <h1 className='heroheader'>Summer Sale</h1>
                                            <p className='herotxt'>Discover our summer styles with discount</p>
                                            <div className='pt-3'>
                                                <button className='btn btn-secondary px-5 py-3'>
                                                    <span className='mx-2 fw-bold text-sm'>Shop Now</span>
                                                    <FontAwesomeIcon
                                                        icon={faArrowRight}
                                                        className="text-light"
                                                    />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className='d-flex justify-content-center align-items-center p-3'>
                                        <img src={hero_image} className="img-fluid" alt='hero-image' />
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 px-5">
                        <AllProduct />
                    </div>
                </div>
            </div>
            <Footer />
        </>

    )
}

export default LandingPage