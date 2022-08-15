import Head from 'next/head'
// import Alllottery from '../components/pages/alllottery';
import Alllotto from '../components/pages/alllotto';
import Breadcrumb from '../components/pages/breadcrumb';
import Ifyouarequery from '../components/pages/ifyouarequery';
import Promotions from '../components/pages/promotions';


export const getServerSideProps = async () => {
  const dates = await fetch(process.env.siteUrl+'/api/dates');
  const datesdata = await dates.json();

  const gamesurl = await fetch(process.env.siteUrl+'/api/bussinesses/11');
  const gamesdata = await gamesurl.json();
  return {
    props: { day: datesdata.data , games: gamesdata.data }
  }
}

export default function Lotteries({ day,games }) {
  return (
    <div>
        <Head>
            <title>Loma Lotto - All lotteries page</title>
            {/* <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js" /> */}
        </Head>
        <Breadcrumb title="LOTTERIES" heading="Quick Choose Your Own Numbers" smalltext="Lotteries" />
        <Alllotto day={day} games={games} />
        <Ifyouarequery />
        <Promotions />
    </div>
  );
}