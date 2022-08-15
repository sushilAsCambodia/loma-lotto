import Head from 'next/head'
import HistoryUser from '../components/pages/history';
import Ifyouarequery from '../components/pages/ifyouarequery';
import Ourauthoriity from '../components/pages/ourauthoriity';
import Wearethebest from '../components/pages/wearethebest';
import Testimonials from '../components/pages/testimonials';
import Breadcrumb from '../components/pages/breadcrumb';
// import Link from 'next/link';
export const getServerSideProps = async () => {
  const lottery = await fetch(process.env.siteUrl+'/api/lottery-show/5');
  const lotterydata = await lottery.json();
  return {
    props: { lottery: lotterydata.data }
  }
} 
export default function History({lottery}) {
  
  return (
    <div>
        <Head>
          <title>Loma Lotto - History page</title>
          
        </Head>        
        <Breadcrumb title="HISTORY" heading="" smalltext="History" />
        {/* <Aboutus /> */}
        <HistoryUser lottery={lottery} />
        <Ifyouarequery />
        <Ourauthoriity />
        <Wearethebest />
        <Testimonials />
    </div>
  );
}