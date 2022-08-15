import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Script from 'next/script'
function Layout({children}) {
    return (
        <div>
            <Header />
            <Script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js" />
            {/* <Script src="js/jquery-3.6.0.min.js" /> */}
                {children}
            <Footer />
        </div>
    );
}

export default Layout;