import React from 'react'
import '../component/nav.css'
const Nav = () => {
    return (
       
            <nav
                className="navbar navbar-expand-lg bg-body-tertiary"
                style={{ position: "sticky", top: 0, zIndex: 1000 }}
            >
                <div className="container-fluid">
                    <a className="navbar-brand" style={{ fontWeight: "bolder" }} href="#">
                        B.Chronicle
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div
                        className="collapse navbar-collapse"
                        id="navbarSupportedContent"
                        style={{ backgroundColor: "rgb(212, 211, 211)", borderRadius: 10 }}
                    >
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a
                                    className="nav-link active"
                                    aria-current="page"
                                    href="index.html"
                                >
                                    Home
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="portfolio.html">
                                    About Portfolio
                                </a>
                            </li>
                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link dropdown-toggle"
                                    href="#"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Dropdown
                                </a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Python
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Java
                                        </a>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Hobbies
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        
    )
}

export default Nav