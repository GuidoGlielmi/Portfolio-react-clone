import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';
const baseURL = 'https://yoprogramo-server.herokuapp.com/';
export const userApi = axios.create({ baseURL });
export const adminApi = axios.create({ baseURL });
export const loginApi = axios.create({ baseURL });
adminApi.interceptors.request.use((req) => {
  const token = sessionStorage.getItem('accessToken');
  req.headers['Authorization'] = `Bearer ${token}`;
  console.log(req);
  return req;
});

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
