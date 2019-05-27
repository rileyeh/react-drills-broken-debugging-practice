import React, { Component } from 'react'

export default class Todo extends Component {
  render() {
    const list = this.props.list.map((item, i) => {
      return <h4 key={i}>{item}</h4>
    })
    return <div>{list}</div>
  }
}
