import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from '../src/components/App/App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import {createStore} from "redux";
import { Provider } from "react-redux";
import {rootReducer} from "../src/redux/rootReducer";

export const store = createStore(rootReducer);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
      </Provider>
  </React.StrictMode>
);

reportWebVitals();
