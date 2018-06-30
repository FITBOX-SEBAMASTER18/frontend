"use strict";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss'

import App from './App';
import WebFontLoader from 'webfontloader';

WebFontLoader.load({
    google: {
        families: ['Roboto:300,400,500,700', 'Material Icons', 'Encode Sans Condensed:200,300,400,500,600,700'],
    },
});

ReactDOM.render(<App />, document.getElementById('app'));
