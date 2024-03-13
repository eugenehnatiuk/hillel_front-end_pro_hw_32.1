import './style/style.scss';
import React from 'react';
import ReactDOM from 'react-dom/client';
import AnimatedText  from './components/AnimatedText/AnimatedText.jsx';

const mainEl = document.querySelector('main');
const root = ReactDOM.createRoot(mainEl);

root.render(
  <>
    <AnimatedText text={'Hello, pizza lover!'} />
  </>
);
