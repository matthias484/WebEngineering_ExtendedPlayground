import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';  // Styles applied to the whole application

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
