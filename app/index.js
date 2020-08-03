import React from 'react';
import { render } from 'react-dom';
import {AppContainer} from 'react-hot-loader'
import RouteIndex from "./route/index";

if(module.hot){
    module.hot.accept(() => {
        render(
            <AppContainer>
                <RouteIndex />
            </AppContainer>,
            document.getElementById("root")
        );
    } );
}

render(
    <AppContainer>
        <RouteIndex />
    </AppContainer>,
    document.getElementById("root")
);
