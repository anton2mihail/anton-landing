import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import "./assets/vendor/fullPage.js/dist/jquery.fullpage.min.css"
import "./assets/vendor/slick/slick.min.css"
import "./assets/vendor/vegas/vegas.min.css"
import "./assets/vendor/magnific-popup/dist/magnific-popup.min.css"
import "./assets/vendor/animate.css/animate.min.css"
import "./assets/vendor/font-awesome/css/all.min.css"
import "./assets/vendor/themify-icons/css/themify-icons.css"
import "./assets/css/theme.css"
import "./assets/css/custom.css"
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

