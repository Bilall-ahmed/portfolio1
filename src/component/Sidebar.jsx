import React from 'react'
import '../component/nav.css'

const Sidebar = () => {
    return (

        <nav id="nav-bar" style={{ width: 200, height: 835,top:68, marginLeft:-26}}>
            <input id="nav-toggle" type="checkbox" />
            <div id="nav-header" style={{ top: 43 }}>
                <a id="nav-title" target="_blank">
                    <i className="fab fa-codepen" />
                    Categories
                </a>
                <label htmlFor="nav-toggle" onclick="handleBodyContainer()">
                    <span id="nav-toggle-burger" onclick="handleBodyContainer()" />
                </label>
                <hr />
            </div>
            <div id="nav-content">
                <a href="#">
                    <div className="nav-button">
                        <i className="fas fa-palette" />
                        <span>About Us</span>
                    </div>
                </a>
                <a href="index.html">
                    <div className="nav-button">
                        <i className="fas fa-palette" />
                        <span>About</span>
                    </div>
                </a>
                <a href="document.html">
                    <div className="nav-button">
                        <i className="fas fa-images" />
                        <span>Documentations</span>
                    </div>
                </a>
                <a href="certificate.html">
                    <div className="nav-button">
                        <i className="fas fa-thumbtack" />
                        <span>Certifications</span>
                    </div>
                </a>
                <a href="qualification.html">
                    <div className="nav-button">
                        <i className="fas fa-heart" />
                        <span>Qualifications</span>
                    </div>
                </a>
                <a href="media.html">
                    <div className="nav-button">
                        <i className="fas fa-chart-line" />
                        <span>Media</span>
                    </div>
                </a>
                <a href="contact.html">
                    <div className="nav-button">
                        <i className="fas fa-fire" />
                        <span>Contact </span>
                    </div>
                </a>
                <a href="review.html">
                    <div className="nav-button">
                        <i className="fas fa-fire" />
                        <span>Review </span>
                    </div>
                </a>
                <div id="nav-content-highlight" />
            </div>
            <input id="nav-footer-toggle" type="checkbox" />
            <div id="nav-footer">
                <div id="nav-footer-heading">
                    <div id="nav-footer-avatar">
                        <img src="https://webappimages-1.s3.ap-south-1.amazonaws.com/navprofile.jpeg" />
                    </div>
                    <div id="nav-footer-titlebox">
                        <a id="nav-footer-title" target="_blank">
                            {" "}
                            Bilal
                        </a>
                        <span id="nav-footer-subtitle">Hello</span>
                    </div>
                    <label htmlFor="nav-footer-toggle">
                        <i className="fas fa-caret-up" />
                    </label>
                </div>
                <div id="nav-footer-content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua.
                </div>
            </div>
        </nav>
    )
}

export default Sidebar