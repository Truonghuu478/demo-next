import { AppProps } from 'next/app'
import '../styles/globals.css'
import { Provider } from 'react-redux'
import store from 'src/store/store'


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp