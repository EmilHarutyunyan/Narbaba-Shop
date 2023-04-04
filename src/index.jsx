import React from 'react';
import App from './App';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { BrowserRouter } from 'react-router-dom';
// import {FontStyle} from "./themes/FontStyle"
// import {GlobalStyle} from "./themes/GlobalStyle"
import "./themes/css/main.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import setupInterceptors from "./services/setupInterceptors";

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  // <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        {/* <FontStyle /> */}
        {/* <GlobalStyle /> */}
        <App />
      </BrowserRouter>
    </Provider>
  // </React.StrictMode>
);

// setupInterceptors(store);
