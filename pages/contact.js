import Head from 'next/head'
import Albums from '../components/pages/albums';
import Breadcrumb from '../components/pages/breadcrumb';
import Newsletter from '../components/pages/newsletter';

export default function Contact() {
  return (
    <div>
      <Head>
          <title>Loma Lotto - Contact page</title>
      </Head>
      <Breadcrumb title="CONTACT US" heading="Get in touch by simply a message" smalltext="Contact Us" />
        <div className="contact-us">
            <img src="img/bg-shape/wp-shape-2.png" alt="" className="wp-bg-shape-2" />
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-8 col-lg-8">
                        <div className="part-contact poklotto-form">
                            <h3 className="title">Get in touch with us</h3>
                            <div className="part-form">
                                <form>
                                    <div className="row">
                                        <div className="col-xl-6 col-lg-6 col-md-6">
                                            <label htmlFor="first_name" className="form-label">First name</label>
                                            <input type="text" id="first_name" placeholder="Ex: john" />
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-6">
                                            <label htmlFor="last_name" className="form-label">Last name</label>
                                            <input type="text" id="last_name" placeholder="Ex: doe" />
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-6">
                                            <label htmlFor="mail_address" className="form-label">Mail address</label>
                                            <input type="email" id="mail_address" placeholder="Ex: yourmail@address" />
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-6">
                                            <label htmlFor="phone_number" className="form-label">phone number</label>
                                            <input type="text" id="phone_number" placeholder="Ex: +96 xxx xxx xxx x" />
                                        </div>
                                        <div className="col-xl-12 col-lg-12">
                                            <label htmlFor="write_message" className="form-label">write a Message</label>
                                            <textarea id="write_message" placeholder="Ex: Hello, admin...."></textarea>
                                        </div>
                                    </div>
                                    <button className="btn-pok">
                                        submit to us <i className="fa-solid fa-angle-right"></i>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-9 col-sm-9 d-xl-flex d-lg-flex d-block align-items-end">
                        <div className="part-img">
                            <img src="img/contact/contact-img.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="part-address">
                <div className="container">
                    <div className="address-elements">
                        <div className="single-element">
                            <h4 className="title">Phone</h4>
                            <ul>
                                <li>+96 847-930-0570</li>
                                <li>+96 603-221-6491</li>
                            </ul>
                        </div>
                        <div className="single-element">
                            <h4 className="title">email</h4>
                            <ul>
                                <li>JameMorgan@armyspy.com</li>
                                <li>WalterBBarry@rhyta.com</li>
                            </ul>
                        </div>
                        <div className="single-element">
                            <h4 className="title">Head office</h4>
                            <ul>
                                <li>1051 Agriculture Lane</li>
                                <li>Miami, Florida(FL), 33179</li>
                                <li>305-249-1601</li>
                            </ul>
                        </div>
                        <div className="single-element">
                            <h4 className="title">branch 1</h4>
                            <ul>
                                <li>3880 Eagle Drive</li>
                                <li>Detroit, Michigan(MI), 48219</li>
                                <li>734-771-2836</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      <Newsletter />
      <Albums />
    </div>
  );
}