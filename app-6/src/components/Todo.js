import React, { Component } from 'react'

export default class Todo extends Component {
  render() {
    const list = this.props.list.map(item => {
      <h4>{item}</h4>
    })
    return <div>{list}</div>
  }
}
