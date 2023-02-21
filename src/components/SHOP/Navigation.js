import React from 'react'
import { Navbar } from 'flowbite-react'
import Logo from './Picture/logo.png'
import { Link } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Services from './Services'
import Pricing from './Pricing'
import Contact from './Contact'

const Navigation = () => {
    return (
        <div>
            <Navbar Navbar
                fluid={true}
                rounded={false}
            >
                <Navbar.Brand>
                    <img
                        src={Logo}
                        className="mr-3 h-6 sm:h-9 rounded-xl"
                        alt="Flowbite Logo"
                    />
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                        TUBA SNEAKERS
                    </span>
                </Navbar.Brand>
                <div className="flex md:order-2">

                    <Navbar.Toggle />
                </div>
                <Navbar.Collapse>
                    <Link to="/Home">
                        <Navbar.Link
                            to="/navbars"
                            active={false}>
                            Home
                        </Navbar.Link>
                    </Link>
                    <Navbar.Collapse>
                        <Link to="/About">About</Link >
                    </Navbar.Collapse>

                    <Link to="/Services">
                        Services
                    </Link>

                    <Link to="/Pricing">
                        Pricing
                    </Link>
                    <Link to="/Contact">
                        Contact
                    </Link>
                </Navbar.Collapse>
            </Navbar >
        </div>
    )
}

export default Navigation