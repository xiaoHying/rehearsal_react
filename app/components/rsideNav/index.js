// @flow
import * as React from 'react';
import { Link } from 'react-router-dom';


class RsideNav extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
        };
    }

    render() {
        return (
            <Link to="/animation">CSS3~animation</Link>
        );
    }
}

export default RsideNav;
