import '../styles/globals.css'
import '../styles/assets/css/bootstrap.min.css'
import '../styles/assets/css/animate.css'
import '../styles/assets/css/animate.min.css'
import '../styles/assets/css/all.min.css'
import '../styles/assets/css/owl.carousel.min.css'
import '../styles/assets/css/style.css'
import NextNProgress from "nextjs-progressbar";
import Layout from '../components/Layout';

import React, { useEffect } from 'react';
import i18n from '../components/i18n';
const changeLang = (l)=>{
  return ()=>{
    i18n.changeLanguage(l);
    localStorage.setItem('lang',l);
  }
}
function MyApp({ Component, pageProps }) {
  useEffect(() => {
    let currentLang = localStorage.getItem('lang');
    i18n.changeLanguage(currentLang);
  }, [])
  return (
    <Layout>
      <div className="fixedforlang">
        <button className='' onClick={ changeLang('en') }>English</button>
        <button className='' onClick={ changeLang('de') }>Chinese</button>
      </div>
        <NextNProgress
          color="linear-gradient(223.14deg, #F44A33 -17.3%, #E8AE3D 101.56%)"
          startPosition={0.3}
          stopDelayMs={200}
          height={3}
          showOnShallow={true}
        />
        <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp




