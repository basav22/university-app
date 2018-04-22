import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';

import App2 from "./test/App2";
import Consumer from "./test/Consumer";

// React.createElement(App)
ReactDOM.render(<Consumer />, document.getElementById('root'));

// function createElement(component) {
//     if(component is CLass based) {
//         create a instance  -new Component
//         istance.render()
//     } 
// }