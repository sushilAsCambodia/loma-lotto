import React from 'react';
import Link from 'next/link'

function Breadcrumb({title,heading,smalltext}) {
    return (    
        <div className="breadcrumb-pok">
            <img className="br-shape-left" src="img/breadcrumb/left-bg.png" alt="" />
            <img className="br-shape-right" src="img/breadcrumb/right-bg.png" alt="" />
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-6 col-lg-7">
                        <div className="breadcrumb-content">
                            <span className="subtitle">{title}</span>
                            <h2 className="title">{heading}</h2>
                            <div className="page-links">
                                <ul>
                                    <li>
                                        <Link href="/">
                                            <a>Home</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <span className="current-page">{smalltext}</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Breadcrumb;