/* eslint flowtype-errors/show-errors: 0 */

import React from 'react';
// import { Switch, Route } from 'react-router';
import Routes from "./routes"

class RouteIndex extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
        };
    }

    render() {
        return (
            <div style={{ height: '100%' }}>
                <Routes />
            </div>
        );
    }
}

export default RouteIndex;
