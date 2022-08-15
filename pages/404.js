import Head from 'next/head'
import Link from 'next/link'
import Breadcrumb from '../components/pages/breadcrumb';
 
export default function About() {
  return (
    <div>
        <Head>
          <title>Loma Lotto - 404 Not found</title>
        </Head>

        <Breadcrumb title="ERROR 404" heading="This page is broken, keep going..." smalltext="Error 404"  />

        <div className="error">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xxl-7 col-xl-8 col-lg-9 col-md-10">
                        <div className="part-img">
                            <img src="img/error/error-image.png" alt="" />
                        </div>
                        <div className="part-text">      
                            <div className="section-title">
                                <h3 className="sub-title">Error 404</h3>
                                <h2 className="title">The page you’re looking
                                    for is now beyond our reach.</h2>
                            </div>
                            <p>Let’s get you back in home at <span className="back-time">00:00:05</span> or browse instead <i className="fa-solid fa-arrow-turn-down"></i></p>
                            <div className="error-page-menu">
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
        </div>
    </div>
  );
}