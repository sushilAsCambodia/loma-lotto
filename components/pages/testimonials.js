import React from 'react';

function Testimonials() {
    return ( 
        <div className="testimonial">
            <div className="bg-shape-1">
                <img src="img/bg-shape/bg-shape-1.png" alt="" />
            </div>
            <img src="img/bg-shape/bg-shape-3.png" alt="" className="bg-shape-3" />
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-8 col-lg-8">
                        <div className="section-title">
                            <h3 className="sub-title">testimonials</h3>
                            <h2 className="title">client’s valuable feedback</h2>
                        </div>
                    </div>
                </div>
                <div className="testimonial-carousel owl-carousel owl-theme">
                    <div className="single-testimonial">
                        <div className="part-user-info">
                            <span className="user-name">ruhio S albert</span>
                            <span className="lottery-category">MagaMill. Winner</span>
                            <span className="winning-date">( apr - 2022 )</span>
                        </div>
                        <div className="user-img-cover">
                            <div className="part-img">
                                <img src="img/testimonial/user-1.png" alt="" />
                            </div>
                        </div>
                        <div className="part-feedback">
                            <p><img className="quot-1" src="img/testimonial/quot-icon-1.png" alt="" />
                                Since it’s all by chance, enjoy picking your numbers or seeing what the 
                            lottery terminal generates Since it’s all by chance.
                            <img className="quot-2" src="img/testimonial/quot-icon-2.png" alt="" />
                        </p>
                        </div>
                    </div>
                    <div className="single-testimonial">
                        <div className="part-user-info">
                            <span className="user-name">Leah Stanley</span>
                            <span className="lottery-category">Powerball. Winner</span>
                            <span className="winning-date">( Jan - 2022 )</span>
                        </div>
                        <div className="user-img-cover">
                            <div className="part-img">
                                <img src="img/testimonial/user-2.png" alt="" />
                            </div>
                        </div>
                        <div className="part-feedback">
                            <p><img className="quot-1" src="img/testimonial/quot-icon-1.png" alt="" />
                                Since it’s all by chance, enjoy picking your numbers or seeing what the 
                            lottery terminal generates Since it’s all by chance.
                            <img className="quot-2" src="img/testimonial/quot-icon-2.png" alt="" />
                        </p>
                        </div>
                    </div>
                    <div className="single-testimonial">
                        <div className="part-user-info">
                            <span className="user-name">Megan Clayton</span>
                            <span className="lottery-category">US Lotto. Winner</span>
                            <span className="winning-date">( Dec - 2021 )</span>
                        </div>
                        <div className="user-img-cover">
                            <div className="part-img">
                                <img src="img/testimonial/user-3.png" alt="" />
                            </div>
                        </div>
                        <div className="part-feedback">
                            <p><img className="quot-1" src="img/testimonial/quot-icon-1.png" alt="" />
                                Since it’s all by chance, enjoy picking your numbers or seeing what the 
                            lottery terminal generates Since it’s all by chance.
                            <img className="quot-2" src="img/testimonial/quot-icon-2.png" alt="" />
                        </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Testimonials;