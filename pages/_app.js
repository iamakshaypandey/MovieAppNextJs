import Footer from '../component/Footer'
import Navbar from '../component/Navbar'
import 'bootstrap/dist/css/bootstrap.css'
import { ThemeProvider } from 'next-themes'

import '../styles/globals.css'

const theme = {
  colors:{
    primary:'#355C7D'
  }
}

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar/>
      <ThemeProvider theme={theme} enableSystem={true} attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
      <Footer/>
    </>
  )
}

export default MyApp
