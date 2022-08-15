import React from 'react';
import Link from 'next/link'
import Script from 'next/script'

function Footer() {
    return (
        <div>
                    {/* <!-- footer begin --> */}
            <div className="footer">
                <div className="footer-top">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-4 col-lg-5 col-md-7 col-sm-9">
                                <div className="part-about">
                                    <div className="footer-logo">
                                        <a href="{{ route('home') }}">
                                            <img src="img/logo.png" alt="" className="logo" />
                                        </a>
                                    </div>
                                    <p>Lottery players can play Virginia Lottery games online from anywhere in Virginia on a phone, tablet or computer. </p>
                                    <ul className="importants-links">
                                        <li className="single-link">
                                            <a href="#0">policy</a>
                                        </li>
                                        <li className="single-link">
                                            <a href="#0">Terms</a>
                                        </li>
                                        <li className="single-link">
                                            <a href="#0">license</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="container">
                        <div className="footer-bottom-content">
                            <p className="copyright-text">copyright © 2022. all right reserved by PokLotto</p>
                            <ul className="social-link">
                                <li className="single-social">
                                    <a href="#0">
                                        <i className="fa-brands fa-facebook-f"></i>
                                    </a>
                                </li>
                                <li className="single-social">
                                    <a href="#0">
                                        <i className="fa-brands fa-twitter"></i>
                                    </a>
                                </li>
                                <li className="single-social">
                                    <a href="#0">
                                        <i className="fa-brands fa-pinterest-p"></i>
                                    </a>
                                </li>
                            </ul>
                            <div className="footer-menu">
                                <ul>
                                    <li>
                                        <Link href="/">
                                            <a className="single-menu">homepage</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/about">
                                            <a className="single-menu">About Us</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/lotteries">
                                            <a className="single-menu">Lotteries</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/contact">
                                            <a className="single-menu">contact</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- footer end -->

            <!-- back to button begin --> */}
            <div className="back-to-top-btn">
                <a href="#">
                    <i className="fa-solid fa-arrow-turn-up"></i>
                </a>
            </div>
            <Script src="js/jquery-3.6.0.min.js" />
            <Script src="js/bootstrap.bundle.min.js" />
            <Script src="js/owl.carousel.min.js" />
            <Script src="js/main.js" />
            <Script src="js/lotteries-initialization.js" />
        </div>
    );
}

export default Footer;