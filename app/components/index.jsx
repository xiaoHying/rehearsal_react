import * as React from 'react';

class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount(){
        console.log("componentDidMount");
    }

    render() {
        return (<div>123456</div>)
    }
}

export default Index;
