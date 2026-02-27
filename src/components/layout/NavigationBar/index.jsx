import { Link, NavLink } from "react-router-dom";
import logoDesktop from "@assets/images/logo/logo-desktop.png";
import logoLaptop from "@assets/images/logo/logo-laptop.png";
import logoMobile from "@assets/images/logo/logo-mobile.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const links = [
    { to: "/", label: "Home" },
    { to: "/services", label: "Services" },
    { to: "/projects", label: "Projects" },
    { to: "/about", label: "About" },
    { to: "/careers", label: "Careers" },
    { to: "/blogs", label: "Blogs" }
];

function NavigationBar() {

    const [menuOpen, setMenuOpen] = React.useState(false);

    return (
        <nav className="py-4">
            <div className="container">
                <div className="content-wrapper bg-dark-10 rounded-xl p-5 lg:py-5 lg:px-7 flex items-center justify-between max-lg:flex-wrap">
                    <Link
                        to={'/'}
                    >
                        <picture>
                            <source media="(min-width: 1024px)" srcSet={logoDesktop} />
                            <source media="(min-width: 768px)" srcSet={logoLaptop} />
                            <img src={logoMobile} alt="Logo" />
                        </picture>
                    </Link>
                    <div className={`nav-links max-lg:w-full max-lg:order-1 grid transition-all duration-200 ${menuOpen ? "max-lg:grid-rows-[1fr] max-lg:mt-5" : "max-lg:grid-rows-[0fr]"}`}>
                        <div className={`overflow-hidden transition-opacity duration-300 ease-in ${menuOpen ? "max-lg:opacity-100 delay-75" : "max-lg:opacity-0"}`}>
                            <ul className="flex lg:items-center gap-2 max-lg:flex-col">
                                {
                                    links.map((link, index) => (<li key={index}>
                                        <NavLink
                                            to={link.to}
                                            onClick={() => setMenuOpen(false)}
                                            className={({ isActive }) => `transition text-lg block py-2 px-4 rounded-md bg-dark-06 font-medium ${isActive ? "text-orange-80" : "text-grey-50 sm:hover:text-orange-80"}`}
                                        >
                                            {link.label}
                                        </NavLink>
                                    </li>))
                                }
                                <li>
                                    <Link
                                        to={'/contact'}
                                        onClick={() => setMenuOpen(false)}
                                        className="transition text-lg block py-2 px-4 rounded-md bg-orange-60 font-medium text-dark-06"
                                    >
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <button
                        title={menuOpen ? "Close Menu" : "Open Menu"}
                        aria-label={menuOpen ? "Close Menu" : "Open Menu"}
                        onClick={() => setMenuOpen(prev => !prev)}
                        className="menu-toggler text-3xl lg:hidden"
                    >
                        <FontAwesomeIcon icon={menuOpen ? faXmark : faBars} />
                        <span className="sr-only">{menuOpen ? "Close Menu" : "Open Menu"}</span>
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default NavigationBar;