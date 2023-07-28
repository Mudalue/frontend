import React from 'react'
import logo from '../../asset/images/logo2.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return (
        <footer style={{ height: "auto", marginTop: 30 }}>
            <div className="container-fluid bg-dark">
                <div className="row">
                    <div className="col-md-12">
                        <div className='d-flex justify-content-between align-items-center p-3'>
                            <img src={logo} className='img-fluid' alt='logo' />
                            <p className='text-light pt-2'>&copy; 2023 dot card text task. All rights reserved.</p>
                            <div className='d-flex justify-content-evenly align-items-center pb-2'>
                                <FontAwesomeIcon icon={faInstagram} className='text-light' />
                                <FontAwesomeIcon icon={faTwitter} className='text-light mx-3' />
                                <FontAwesomeIcon icon={faYoutube} className='text-light' />
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </footer>
    )
}

export default Footer