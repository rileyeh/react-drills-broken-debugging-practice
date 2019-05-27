import React, {Component} from 'react';

export default function Image(props) {
    return (
      <div>
        <img src={props.url} />
        <caption>Error 599</caption>
      </div>
    )
}
