import React, {Component} from 'react'

export default class Login extends Component {
  constructor() {
    super()
    this.state = {
      username: '',
      password: ''
    }
  }
  changeUsername(e) {
    this.setState({
      username: e.target.value
    })
  }
  changePassword(e) {
    this.setState({
      password: e.target.value
    })
  }
  login() {
    alert('Logged in with username: ${this.state.username} and password: ${this.state.password}')
  }

  render() {
    return (
      <div>
        <input onChange={() => this.changeUsername(e)} type="text" />
        <input onChange={() => this.changePassword(e)} type="password" />
        <button onClick={() => this.login()}>Login</button>
      </div>
    )
  }
}