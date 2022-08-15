import React from 'react';
import Link from 'next/link'

function Aboutus() {
    return (
        <div className="about">
            <img src="img/bg-shape/bg-shape-3.png" alt="" className="bg-shape-3" />
            <img src="img/bg-shape/bg-shape-4.png" alt="" className="bg-shape-4" />
            <div className="container">
                <div className="row">
                    <div className="col-xl-4 col-lg-4 d-xl-flex d-lg-flex d-block align-items-end justify-content-end">
                        <div className="part-img">
                            <img className="main-img" src="img/about/about-img.png" alt="" />
                            <img className="bg-img" src="img/about/img-2.png" alt="" />
                            <img className="shape-img" src="img/about/img-1.png" alt="" />
                            <img src="img/about/ball-1.png" alt="" className="ball-1" />
                            <img src="img/about/ball-2.png" alt="" className="ball-2" />
                        </div>
                    </div>
                    <div className="col-xl-8 col-lg-8">
                        <div className="about-text">
                            <div className="section-title for-about-section">
                                <h3 className="sub-title">About us</h3>
                                <h2 className="title">We provide best Mega jackpot</h2>
                            </div>
                            <div className="part-bottom">
                                <div className="part-statics">
                                    <div className="single-statics">
                                        <div className="part-icon">
                                            <img src="img/about/icon-1.png" alt="" />
                                        </div>
                                        <div className="part-txt">
                                            <span className="number">25.3k</span>
                                            <span className="text">players</span>
                                        </div>
                                    </div>
                                    <div className="single-statics">
                                        <div className="part-icon">
                                            <img src="img/about/icon-2.png" alt="" />
                                        </div>
                                        <div className="part-txt">
                                            <span className="number">46+</span>
                                            <span className="text">lotteries</span>
                                        </div>
                                    </div>
                                    <div className="single-statics">
                                        <div className="part-icon">
                                            <img src="img/about/icon-3.png" alt="" />
                                        </div>
                                        <div className="part-txt">
                                            <span className="number">270+</span>
                                            <span className="text">jackpot</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="part-descr">
                                    <p>Problem set compensation the harmonics, understood. 
                                        Hundreds times, of until they employed sure a behind boundless their for
                                        boss&apos;s the certainly and gilded form of tend every of better an over when of 
                                        than an are until time. <span className="txt-bold">Would of impenetrable</span>  
                                        just the out diesel as it near at that.
                                    </p>
                                    <ul>
                                        <li>He of his in its price always and feedback of films.</li>
                                        <li>towards sight as not and each and, good.</li>
                                        <li>tone, the of preparations never a even viable a.</li>
                                    </ul>
                                    <Link href="/about">
                                        <a className="btn-pok">Know more <i className="fa-solid fa-angle-right"></i></a>
                                    </Link>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Aboutus;