import React from 'react';
import Link from 'next/link'
import { useRouter } from "next/router";
function Header() {
const router = useRouter();
    return (
        <div>
            <div className="header">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-3 col-lg-3 d-xl-flex d-lg-flex d-block align-items-center">
                            <div className="row">
                                <div className="col-xl-12 col-lg-12 col-6 d-xl-block d-lg-block d-flex align-items-center">
                                    <div className="logo">
                                        <Link href="/">
                                            <a href="">
                                                <img src="img/logo.png" alt="" />
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-6 d-xl-none d-lg-none d-flex justify-content-end">
                                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                        <i className="fa-solid fa-bars"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6">
                            <div className="main-menu">
                                <nav className="navbar navbar-expand-lg">
                                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                        <ul className="navbar-nav m-auto">
                                            <li className="nav-item">
                                            <Link href="/">
                                                <a className={router.pathname == "/" ? "nav-link active" : "nav-link"} >Homepage</a>
                                            </Link> 
                                            </li>
                                            <li className="nav-item">
                                            <Link href="/about">
                                                <a className={router.pathname == "/about" ? "nav-link active" : "nav-link"} >About us</a>
                                            </Link>
                                            </li>
                                            <li className="nav-item">
                                            <Link href="/lotteries">
                                                <a className={router.pathname == "/lotteries" ? "nav-link active" : "nav-link"} >Lotteries</a>
                                            </Link>
                                            </li>
                                            <li className="nav-item">
                                            <Link href="/contact">
                                                <a className={router.pathname == "/contact" ? "nav-link active" : "nav-link"}  >Contact</a>
                                            </Link>
                                            </li>
                                            <li className="nav-item">
                                            <Link href="/history">
                                                <a className={router.pathname == "/history" ? "nav-link active" : "nav-link"}  >History</a>
                                            </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </nav>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 d-xl-flex d-lg-flex d-none align-items-center justify-content-end">
                            <Link href="/lotteries">
                                <a  className="btn-pok mid">
                                    play lottery <i className="fa-solid fa-angle-right"></i>
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;