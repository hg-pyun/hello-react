import React, { Component, PropTypes } from 'react';
import Value from './Value'
import Control from './Control'

export default class Counter extends Component {

  constructor(props){
      super(props)
  }

  render() {
    return (
      <div>
          <Value/>
          <Control/>
      </div>
    );
  }
}

Counter.propTypes = {};
Counter.defaultProps = {};