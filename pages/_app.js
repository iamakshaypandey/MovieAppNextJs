import Footer from '../component/Footer'
import Navbar from '../component/Navbar'
import 'bootstrap/dist/css/bootstrap.css'
import { Provider } from 'react-redux'
import '../styles/globals.css'
import store from '../redux/Store'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Provider store={store}>
      <Navbar/>
        <Component {...pageProps} />
      <Footer/>
    </Provider>
    </>
  )
}

export default MyApp
