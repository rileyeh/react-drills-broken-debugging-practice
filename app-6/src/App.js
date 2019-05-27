import React, { Component } from 'react'
import './App.css'
import Todo from './components/Todo'

class App extends Component {
  state = {
    list: [],
    input: ''
  }

  add() {
    const newList = [...this.state.list, this.state.input]
    this.setState({
      list: newList
  })
}

  handleInput = (e) => {
    this.setState({
      input: e.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <h1>My to-do list:</h1>
        <div>
          <input value={this.state.input} type="text" onChange={this.handleInput}/>
          <button onClick={() => this.add()}>Add</button>
        </div>
        <Todo list={this.state.list} />
      </div>
    )
  }
}

export default App
