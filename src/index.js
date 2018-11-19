import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import {createGlobalStyle} from 'styled-components';
import {Provider} from 'react-redux';
import Main from './components/main';
import Loading from './components/loader';
import Store from './store';

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Roboto:400,700');
    @import url('https://fonts.googleapis.com/css?family=Pathway+Gothic+One');
    @import url('https://fonts.googleapis.com/css?family=Gloria+Hallelujah');
    body {
        padding: 0;
        margin: 0;
        font-family: 'Pathway Gothic One', sans-serif;
    }
`;

function init() {
    let bg_image = new Image();
    ReactDOM.render(
        <Loading />,
        document.getElementById('root')
    );

    bg_image.onload = () => {
        ReactDOM.render(
            <Provider store={Store.configureStore()}>
                <Fragment>
                    <GlobalStyle />
                    <Main />
                </Fragment>
            </Provider>,
            document.getElementById('root')
        );
    };

    bg_image.src = 'assets/bg.jpg';
}

document.addEventListener('DOMContentLoaded', init);
