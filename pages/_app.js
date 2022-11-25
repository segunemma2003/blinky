
import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css'
import '../styles/responsive.css'
import Layout from '../components/layouts';
import {useRouter} from 'next/router';
import Head from "next/head";
import AdminLayout from '../components/adminlayout';


function MyApp({ Component, pageProps }) {

  const router = useRouter();

  return( 
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      {
        (router.asPath =='/'||router.pathname.startsWith('/auth')) ?(
          <Component {...pageProps} />
        ):router.pathname.startsWith('/admin')?
        (
          <AdminLayout>
            <Component {...pageProps} />
          </AdminLayout>
        ):
        (
          <Layout>
            <Component {...pageProps} />
          </Layout>
        )
      }
     
    </>
  );
}

export default MyApp
