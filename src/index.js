import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/integration/react';
import { store } from './redux/store';

ReactDOM.render(
  <React.StrictMode>
    {/* <PersistGate loading={null} persistor={store.persistor}> */}
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
    {/* </PersistGate> */}
  </React.StrictMode>,
  document.getElementById('root')
);
