import React, { useContext } from 'react'
import logoImage from "../../asset/images/logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { AppContext } from '../../context/CartContext';

const Navbar = () => {
    const [cart, setCart] = useContext(AppContext);
    return (
        <nav className="navbar bg-body-tertiary">
            <div className="container-fluid">
                <Link className="navbar-brand" to='/'>
                    <img src={logoImage} className='img-fluid' alt='nav-img' />
                </Link>
                <div>
                    <Link className='btn btn-outline-dark px-4 navBtnTxt' to="/cart">

                        <div className='d-flex justify-content-between align-items-center'>
                            <FontAwesomeIcon
                                icon={faBagShopping}
                                className="text-dark ml-3"
                            />
                            <span className='ms-2 fw-bold text-sm mx-2'>Cart</span>
                            <div style={{backgroundColor: "orange", height: 18, width: 18, borderRadius: "50%"}}><span className='text-sm' style={{fontSize: 10}}>{cart?.length}</span></div>
                        </div>

                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar