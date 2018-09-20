import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import {
  BrowserRouter as Router
} from 'react-router-dom';
import { Menu, Routes } from './router';
import '../public/css/style.css';

const handleMenuBtnClick = () => {
  document.body.classList.toggle('nav-opened');
};

const handlePanelBtnClick = () => {
  document.querySelector('.panelBtn').classList.toggle('active');
  document.querySelector('.panel').classList.toggle('left-hidden');
};

ReactDOM.render(
  <AppContainer>
    <Router>
      <div>
        <Menu />
        <a className='menuBtn' onClick={ handleMenuBtnClick }>
          <del className='bar'></del>
          <del className='bar'></del>
          <del className='bar'></del>
        </a>
        <svg className='panelBtn ham hamRotate ham7 active' viewBox='0 0 100 100' width='32' onClick={ handlePanelBtnClick }>
          <path className='line top' d='m 70,33 h -40 c 0,0 -6,1.368796 -6,8.5 0,7.131204 6,8.5013 6,8.5013 l 20,-0.0013'></path>
          <path className='line middle' d='m 70,50 h -40'></path>
          <path className='line bottom' d='m 69.575405,67.073826 h -40 c -5.592752,0 -6.873604,-9.348582 1.371031,-9.348582 8.244634,0 19.053564,21.797129 19.053564,12.274756 l 0,-40'></path>
        </svg>
        <Routes />
      </div>
    </Router>
  </AppContainer>,
  document.getElementById('app')
);

if (module.hot) {
  module.hot.accept();
}
