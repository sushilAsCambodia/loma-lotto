import Head from 'next/head' 
// import Testimonials from '../components/pages/testimonials';
// import Wearethebest from '../components/pages/wearethebest';
// import Ifyouarequery from '../components/pages/ifyouarequery';
// import Aboutus from '../components/pages/aboutus';
import Alllotto from '../components/pages/alllotto';
import Howtoplay from '../components/pages/howtoplay';
import Link from 'next/link';
import React from 'react';
import { useTranslation } from "react-i18next";
  export const getServerSideProps = async () => {
    const dates = await fetch(process.env.siteUrl+'/api/dates');
    const datesdata = await dates.json();
  
    const gamesurl = await fetch(process.env.siteUrl+'/api/bussinesses/11');
    const gamesdata = await gamesurl.json();
    return {
      props: { day: datesdata.data , games: gamesdata.data }
    }
  }

export default function Home({ day,games }) {
  const { t } = useTranslation();
  return (
    <div>
      <Head>
        <title>{ t('Index_tittle') }</title>
      </Head>
        <div className="banner">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-6 col-lg-6">
                        <div className="banner-content">
                            {/* <h4 className="sub-title">{ t('NEED_TO_KNOW_ABOUT') }</h4> */}
                            <h1 className="title"><span className="special">{ t('play_4D') } </span> { t('Lotto_online') } <span className="b-spc"> </span></h1>
                            <div className="all-btns">
                              <Link href="/lotteries">
                                <a className="btn-pok">{ t('Play_Lottery') } <i className="fa-solid fa-angle-right"></i></a>
                              </Link>
                              <Link href="/about">
                                <a className="btn-pok-2">{ t('Explore_More') } <i className="fa-solid fa-angle-right"></i></a>
                              </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-8 col-sm-9 d-xl-flex d-lg-flex d-block align-items-end">
                        {/* <div className="part-img">
                            <img className="main-img" src="img/banner-img.png" alt="" />
                            <img src="img/power-ball.png" alt="" className="power-ball pok-1" />
                            <img src="img/power-ball2.png" alt="" className="power-ball pok-2" />
                            <img src="img/power-ball3.png" alt="" className="power-ball pok-3" />
                            <img src="img/power-ball4.png" alt="" className="power-ball pok-4" />
                            <img src="img/power-ball5.png" alt="" className="power-ball pok-5" />
                        </div> */}
                    </div>
                </div>
            </div>
        </div>

        <Alllotto day={day} games={games} />
        <Howtoplay />
        {/* <Aboutus /> */}
        {/* <Ifyouarequery /> */}
        {/* <Wearethebest />
        <Testimonials /> */}
    </div>
  );
}
