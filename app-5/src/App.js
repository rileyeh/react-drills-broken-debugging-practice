import React, { Component } from 'react'
import Image from './components/Image'
import './App.css'

class App extends Component {
  state = {
    url: 'https://http.cat/599'
  }
  
  render() {
    return (
      <div className="App">
        <Image url={this.state.url}/>
      </div>
    )
  }
}

export default App
