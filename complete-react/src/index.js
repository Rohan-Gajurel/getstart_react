import React from 'react';
import ReactDom from 'react-dom';
import App from './App'
import  'bootstrap/dist/css/bootstrap.css'
import './index.css'
//const header =<h1>This is my first React App</h1>;

//console.log(header);

//ReactDom.render(header, document.getElementById('root') )
 const root = ReactDom.createRoot( document.getElementById('root'));
root.render(<App />)
// let div =document.getElementById('root')
// div.append(App());