import React, { Component } from "react";
var moment = require('moment');

//date Allen started working for Redskins
const bruceStartDate = new moment("2009-12-17");

//timer logic
class Timer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            bruceTimer: new moment().toLocaleString()
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
        let now = moment();
        let bruceHasWorkedFor = now.diff(bruceStartDate, 'days');
        this.setState({
            bruceTimer: bruceHasWorkedFor
        });
    }

    render() {
        return(
            <div>{this.state.bruceTimer}</div>
        );
    }
}

export default Timer