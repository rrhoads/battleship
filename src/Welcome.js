import React, { Component } from 'react';

class Welcome extends Component {
  constructor(props){
    super(props)
    this.state = {player1: undefined, player2: undefined}
  }

  welcomeMessage() {
    let msg
    if((this.state.player1 != undefined && this.state.player1 != '') && (this.state.player2 != undefined && this.state.player2 != '')){
    msg = `Welcome ${this.state.player1} and ${this.state.player2}!`
    } else {
      msg = 'Please enter your names'
    }
    return msg
  }

  handleChange(e) {
    let name = e.target.name 
    this.setState({
      [name]: e.target.value
    })
  }

  render() {
    return(
      <div>
        {this.welcomeMessage()}
        <div>
        <input type='text' onChange={this.handleChange.bind(this)} name='player1' value={this.state.player1} />
        <input type='text' onChange={this.handleChange.bind(this)} name='player2' value={this.state.player2} />

      </div>
      </div>
    )
  }
}

export default Welcome
