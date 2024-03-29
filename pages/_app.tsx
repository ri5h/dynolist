import type { AppProps /**, AppContext */ } from 'next/app'
import '../styles/globals.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false


function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
export default App
