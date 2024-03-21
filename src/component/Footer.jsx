import React from 'react'

const Footer = () => {
    return (
        <footer>
            <div className="footer-container">
                <div className="footer-links">
                    <h3>Quick Links</h3>
                    <ul>
                        <li>
                            <a href="index.html">Home</a>
                        </li>
                        <li>
                            <a href="portfolio.html">About Portfolio</a>
                        </li>
                        <li>
                            <a href="document.html">Documents</a>
                        </li>
                        <li>
                            <a href="contact.html">Contact</a>
                        </li>
                    </ul>
                </div>
                <div className="footer-contact">
                    <h3>Contact Us</h3>
                    <p>10-3-292/7, Vijay Nagar Colony,</p>
                    <p>Power Zone Gym Street, Hyd</p>
                    <p>Phone: +91 7288001629</p>
                </div>
                <div className="footer-social">
                    <h3>Follow Us</h3>
                    <ul>
                        <li>
                            <a
                                href="https://www.linkedin.com/in/mohd-bilal-ahmed-432996260"
                                target="_blank"
                            >
                                <i className="fab fa-twitter" /> Linkedin
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.instagram.com/bilal_khanz1?igsh=Z3diend1OGc1Y210"
                                target="_blank"
                            >
                                <i className="fab fa-instagram" /> Instagram
                            </a>
                        </li>
                        <li>
                            <a href="mailto:bilall3051@gmail.com" target="_blank">
                                <i className="far fa-envelope" />
                                Gmail
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/Bilall-ahmed" target="_blank">
                                <i className="fab fa-github" />
                                GitHub
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>© 2024 B.Chronicle. All Rights Reserved.</p>
            </div>
        </footer>
    )
}

export default Footer