import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app';


// Первый аргументом нужно передать элемент, а не компонент. App - компонент, <App /> - тег(элемент)
ReactDOM.render(<App />, document.getElementById('root'));