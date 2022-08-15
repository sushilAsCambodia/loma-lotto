import React from 'react';

function Newsletter() {
    return (  
        <div className="newsletter">
            <div className="bg-shape-1">
                <img src="img/bg-shape/bg-shape-1.png" alt="" />
            </div>
            <img src="img/bg-shape/bg-shape-3.png" alt="" className="bg-shape-3" />
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-8">
                        <div className="part-img">
                            <img src="img/newsletter/newsletter-img.png" alt="" />
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-9 col-sm-10 d-xl-flex d-lg-flex d-block align-items-center">
                        <div className="part-newsletter">
                            <div className="section-title">
                                <h3 className="sub-title">get our newsletter</h3>
                                <h2 className="title">Stay tuned with us</h2>
                            </div>
                            <p>Subscribe to <span className="p-bold">poklottos</span>‘s newsletter and never miss
                                our latest business newses.  <br/>
                                Our newsletter is sent once a week, every monday.</p>
                            <form>
                                <input type="text" placeholder="Ex: yourmail@address" />
                                <button className="btn-pok submit-btn">Subscribe <i className="fa-solid fa-rocket"></i></button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Newsletter;