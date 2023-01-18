import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Root from './Root';

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Root />
    </BrowserRouter>
);
