import React from 'react';
import Link from 'next/link';
function Ifyouarequery() {
    return (
        <div className="cta">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-9 col-lg-9 col-sm-8 d-xl-flex d-lg-flex d-block align-items-center">
                        <div className="part-text">
                            <h2 className="title">If you have any query about lottery or anything!</h2>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3">
                        <div className="btn-cta">
                            <Link href="/contact">
                                <a className="btn-pok">Contact Us <i className="fa-solid fa-angle-right"></i></a>                            
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Ifyouarequery;