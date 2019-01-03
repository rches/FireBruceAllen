import React from 'react';

//timer logic
class Timer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            bruceTimer: new Date().toLocaleString()
        };
    }

    componentDidMount() {
        this.intervalID = setInterval(
            () => this.tick(), 1000
        );
    }
    componentWillUnmount() {
        clearInterval(this.intervalID);
    }

    tick() {
        this.setState({
            time: new Date().toLocaleString
        });
    }
    
    render() {
        return(
            <div>{this.state.bruceTimer}</div>
        );
    }

const bruceStartDate = new Date("2009-12-17");
let bruceTimer = new Date().toLocaleString();

}