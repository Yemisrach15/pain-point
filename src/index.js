import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './containers/Home/Home';
import PainPoint from './containers/PainPoint/PainPoint';
import Login from './containers/Login/Login';
import Signup from './containers/Signup/Signup';
import PostPainPoint from './containers/Post PainPoint/PostPainPoint';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <BrowserRouter>
      <Route exact path="/" component={ Home }/>
      <Route path="/painpoints" component={ PainPoint }/>
      <Route path="/login" component={ Login } />
      <Route path="/signup" component={ Signup } />
      <Route path="/post" component= { PostPainPoint }/>
    </BrowserRouter>
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
