/* eslint flowtype-errors/show-errors: 0 */

import React from 'react';
import { Switch, Route } from 'react-router';
import {HashRouter} from "react-router-dom"
import ViewsIndex from "@/views"

class Routes extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
        };
    }

    render() {
        return (
            <HashRouter>
                <Route to="/" exact component={ViewsIndex} />
            </HashRouter>
        );
    }
}

export default Routes;
