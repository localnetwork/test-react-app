import { HeaderNavbar } from '../components/Navbar/HeaderNavbar'
import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
// import bootstrap from 'bootstrap'
import { Layout } from '../components/Layout/Layout'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />  
      </Layout>
    </> 
  )
}

export default MyApp
