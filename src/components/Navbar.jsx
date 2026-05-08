import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import CartButton from './CartButton';

const Navbar = () => {

    const navigate = useNavigate();
    

    // GET USER
    const user = JSON.parse(localStorage.getItem("user"));

    // LOGOUT FUNCTION
    const logout = () => {

        localStorage.removeItem("user");

        navigate("/signin");
    };

    return (
        <div className='App'>

            <header className='App-header'>
                <h1>Jiwe</h1>
            </header>

            <div className='row m-5'>

                <div className='col-md-12'>

                    <nav className='navbar navbar-expand-md navbar-light bg-light px-3 shadow rounded'>

                        {/* LOGO */}
                        <Link
                            to={"/"}
                            className='navbar-brand fw-bold'
                        >
                            SokoGarden
                        </Link>

                        {/* TOGGLER */}
                        <button
                            className='navbar-toggler'
                            type='button'
                            data-bs-toggle="collapse"
                            data-bs-target='#navbarcollapse'
                        >
                            <span className='navbar-toggler-icon'></span>
                        </button>

                        <div
                            className='collapse navbar-collapse'
                            id='navbarcollapse'
                        >

                            {/* LEFT LINKS */}
                            <div className='navbar-nav me-auto'>

                                <Link
                                    to={"/"}
                                    className='nav-link active'
                                >
                                    Home
                                </Link>

                                <Link
                                    to={"/addproduct"}
                                    className='nav-link'
                                >
                                    Add Products
                                </Link>

                                <Link
                                    to={"/more"}
                                    className='nav-link'
                                >
                                    More
                                </Link>

                            </div>

                            {/* RIGHT SIDE */}
                            <div className='d-flex align-items-center gap-2'>

                                {/* CART BUTTON */}
                                <CartButton />

                                {/* IF USER LOGGED IN */}
                                {user ? (

                                    <>

                                        <span className='fw-bold text-dark'>
                                            Welcome
                                        </span>

                                        <button
                                            className='btn btn-danger'
                                            onClick={logout}
                                        >
                                            Logout
                                        </button>
                                        

                                    </>

                                ) : (

                                    <>

                                        <Link
                                            to={"/signin"}
                                            className='btn btn-success'
                                        >
                                            Signin
                                        </Link>

                                        <Link
                                            to={"/signup"}
                                            className='btn btn-info text-white'
                                        >
                                            Signup
                                        </Link>
                                        <button onClick={logout} className='btn btn-danger'>
  Logout
</button>

                                    </>

                                )}

                            </div>

                        </div>

                    </nav>

                </div>

            </div>

        </div>
    );
};

export default Navbar;