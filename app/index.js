import React from 'react';
import { render } from 'react-dom';
import {AppContainer} from 'react-hot-loader'
import Index from "./components/index.jsx";

if(module.hot){
    module.hot.accept(() => {
        render(
            <AppContainer>
                <Index />
            </AppContainer>,
            document.getElementById("root")
        );
    } );
}

render(
    <AppContainer>
        <Index />
    </AppContainer>,
    document.getElementById("root")
);