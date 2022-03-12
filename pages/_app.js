import { AnimatePresence } from 'framer-motion'
import Context from '../src/Components/Context'
import Footer from '../src/Components/Footer'
import Navigation from '../src/Components/Navigation'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <AnimatePresence exitBeforeEnter={true} >
      <Context>
        <Navigation />
        <Component {...pageProps} />
        <Footer />
      </Context>
    </AnimatePresence>
  )
}

export default MyApp
