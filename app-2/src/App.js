import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super()

    this.state = {
      foods: ['spaghetti', 'ice cream', 'sushi', 'bologna', 'cheese']
    }
  }

  render() {
    const list = this.state.foods.map((item, i) => {
      return (<h1 key={i}> {item} </h1>)    
    })
    
    return (
      <div className="App">
        {list}
      </div>
    );
  }
}

export default App;
