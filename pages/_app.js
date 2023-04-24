import { Provider } from "react-redux";
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import store from "../redux/store";
let persistor = persistStore(store);

export default function App({ Component, pageProps }) {
  return <Provider store={store}>
          <PersistGate persistor={persistor}> 
            <Component {...pageProps} />
          </PersistGate>
        </Provider>
}