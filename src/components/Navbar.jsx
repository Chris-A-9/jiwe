import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <div className='App'>
                <header className='App-header'>
                    <h1>Jiwe</h1>
                </header>
                <div className='row'>
                    <div className='col-md-12'>
                        <nav className='navbar navbar-expand-md navbarlight bg-light'>
                            <Link to={"/"} className='navbar-brand'>SokoGarden</Link>
                            <button className='navbar-toggler' type='button' data-bs-toggle="collapse" data-bs-target='#navbarcollapse'>
                                <span className='navbar-toggler-icon'></span>
                            </button>
                            <div className='collapse navbar-collapse' id='navbarcollapse'>
                                <div className='navbar-nav'>
                                    <Link to={"/"} className='nav-link active'>Home</Link>
                                    <Link to={"/addproduct"} className='nav-link'>Add Products</Link>
                                    <Link to={"/signup"} className='nav-link'>Signup</Link>
                                    <Link to={"/Signin"} className='nav-link'>Signin</Link>

                                </div>

                            </div>

                        </nav>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Navbar