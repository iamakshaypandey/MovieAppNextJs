import Footer from '../component/Footer'
import Navbar from '../component/Navbar'
import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css'
import { ThemeProvider } from 'styled-components'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar/>
        <Component {...pageProps} />
      <Footer/>
    </>
  )
}

export default MyApp
