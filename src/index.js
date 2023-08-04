import './index.css'

import React from "react";
import ReactDom from 'react-dom';
import App from './App';

const el = document.getElementById('root');
const root = ReactDom.createRoot(el);

root.render(<App />)