import _ from 'lodash';

import "../sytle.css";

import React from "react";
import { render } from "react-dom";

function component () {
  var element = document.createElement('div');

  /* lodash is required for the next line to work */
  element.innerHTML = _.join(['Hello','webpack'], ' ');

  return element;
}

document.body.appendChild(component());

class HelloReact extends React.Component {
  render() {
    return (
      <div id='helloReact'>
        Hello from React!
      </div>
    )
  }
}

render (<HelloReact />, document.getElementById('root-app'))