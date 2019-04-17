import React, {Component} from 'react';

export default class Image extends Component {
  render() {
    return (
      <div>
        <img src={props.url} />
        <caption>Error 599</caption>
      </div>
    )
  }
}
