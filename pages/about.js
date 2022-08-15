import Head from 'next/head'
import Aboutus from '../components/pages/aboutus';
import Ifyouarequery from '../components/pages/ifyouarequery';
import Ourauthoriity from '../components/pages/ourauthoriity';
import Wearethebest from '../components/pages/wearethebest';
import Testimonials from '../components/pages/testimonials';
import Breadcrumb from '../components/pages/breadcrumb';
 
export default function About() {
  return (
    <div>
        <Head>
          <title>Loma Lotto - About page</title>
        </Head>
        <Breadcrumb title="ABOUT US" heading="We Offer a Wide Variety of Lotteries" smalltext="About us" />
        <Aboutus />
        <Ifyouarequery />
        <Ourauthoriity />
        <Wearethebest />
        <Testimonials />
    </div>
  );
}