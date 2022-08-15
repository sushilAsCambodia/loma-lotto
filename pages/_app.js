import '../styles/globals.css'
import '../styles/assets/css/bootstrap.min.css'
import '../styles/assets/css/animate.css'
import '../styles/assets/css/animate.min.css'
import '../styles/assets/css/all.min.css'
import '../styles/assets/css/owl.carousel.min.css'
import '../styles/assets/css/style.css'
import NextNProgress from "nextjs-progressbar";
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
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




