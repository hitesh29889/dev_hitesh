import React from 'react';
import ReactDOM from 'react-dom/client';
import StyleSheet from './StyleSheet';
import JavaScript from './JavaScript';
import HeaderMenu from './HeaderMenu';
import HomeBanner from './HomeBanner';
import WelcomeArea from './WelcomeArea';
import MyTabs from './MyTabs';
import FeatureArea from './FeatureArea';
import Testimonials from './Testimonials';
//import FooterArea from './FooterArea';
//require('dotenv').config()
//import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StyleSheet />
    <JavaScript />
    <HeaderMenu />
    <HomeBanner />
    <WelcomeArea />
    <MyTabs />
    <FeatureArea />
    <Testimonials />
    {/* <FooterArea /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
