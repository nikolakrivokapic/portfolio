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
    @import url('https://fonts.googleapis.com/css?family=Amatic+SC');
    @import url('https://fonts.googleapis.com/css?family=Amatic+SC|Pathway+Gothic+One');
    body {
        padding: 0;
        margin: 0;
        font-family: 'Pathway Gothic One', sans-serif;
    }
`;

function init() {
    ReactDOM.render(
        <Loading />,
        document.getElementById('root')
    );

    let assets = require.context('./assets', false, /\.(png|jpe?g|svg)$/).keys().map((item) => item.replace('./', 'assets/'));
    let assetsProjects = require.context('./assets/projects', false, /\.(png|jpe?g|svg)$/).keys().map((item) => item.replace('./', 'assets/'));
    let assetsSkills = require.context('./assets/skills', false, /\.(png|jpe?g|svg)$/).keys().map((item) => item.replace('./', 'assets/'));
    let allAssets = [...assets, ...assetsProjects, ...assetsSkills];

    let count = 0;
    allAssets.forEach((image) => {
        let bg_image = new Image();
        bg_image.src = image;

        bg_image.onload = () => {
            count++;
            if(count !== allAssets.length) return;

            ReactDOM.render(
                <Provider store={Store.configureStore()}>
                    <Fragment>
                        <GlobalStyle />
                        <Main />
                    </Fragment>
                </Provider>,
                document.getElementById('root')
            );
        }
    });
}

document.addEventListener('DOMContentLoaded', init);
