import React, { Component } from 'react'
var moment = require('moment')

//date Allen started working for Redskins
const bruceStartDate = new moment('2009-12-17')

//timer logic
class Timer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      bruceTimer: '',
      toggleOn: false,
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState(state => ({
      toggleOn: !state.toggleOn,
    }))
  }

  componentDidMount() {
    this.intervalID = setInterval(() => this.tick(), 1000)
  }

  componentWillUnmount() {
    clearInterval(this.intervalID)
  }

  tick() {
    let now = moment()
    let bruceHasWorkedFor = now.diff(bruceStartDate, 'days')
    this.setState({
      bruceTimer: bruceHasWorkedFor,
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Is Bruce still employed?</button>
        <p>
          {this.state.toggleOn
            ? 'Bruce has worked for the Washington Redskins for ' +
              this.state.bruceTimer +
              ' days. What a bummer!'
            : 'Anything is possible - click to check!'}
        </p>
      </div>
    )
  }
}

export default Timer
