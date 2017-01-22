import React, { Component, PropTypes } from 'react';

import Value from './Value'
import Control from './Control'
import { connect, bindActionCreators } from 'react-redux'
import * as actions from '../actions'

class Counter extends Component {

    constructor(props){
        super(props);

        this.setRandomColor = this.setRandomColor.bind(this)
    }

    setRandomColor(){
        const color = [
            Math.floor(Math.random()*55+200),
            Math.floor(Math.random()*55+200),
            Math.floor(Math.random()*55+200)
        ];

        this.props.handleSetColor(color);
    }

    render() {

        const color = this.props.color;
        const style = {
            background : `rgb(${color[0]},${color[1]},${color[2]})`
        };

        return (
          <div style={style}>
              <Value number={this.props.number}/>
              <Control
                  onPlus={this.props.handleIncrement}
                  onSubtract={this.props.handleDecrement}
                  onRandomizeColor={this.setRandomColor}
              />
          </div>
      );
    }
}

Counter.propTypes = {};
Counter.defaultProps = {};

const mapStateToProps = (state) => {
    return {
        number : state.counter.number,
        color : state.ui.color
    };
};

const mapDispatchToProps = (dispatch) => {
    // 방법 1
    return {
        handleIncrement : () => { dispatch(actions.increment())},
        handleDecrement : () => { dispatch(actions.decrement())},
        handleSetColor : (color) => { dispatch(actions.setColor(color))}
    }

    // 방법 2
    // return bindActionCreators(actions, dispatch); // 이름 지정을 못함, 액션생성자를 그대로 사용한다.
};


// react-redux 기능
// 파라미터를 전달하지 않을 경우 this.props.store로 store에 접근 가
export default connect(mapStateToProps, mapDispatchToProps)(Counter);