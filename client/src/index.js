// index.js
import React from 'react';
import { I18nextProvider } from 'react-i18next';
import ReactDOM from 'react-dom';
import App from './App';
import i18n from './i18n';

ReactDOM.render(
    <I18nextProvider i18n={i18n}>
        <App />
    </I18nextProvider>,
    document.getElementById('root')
);
