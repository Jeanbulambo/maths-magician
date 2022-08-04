import React from 'react';
import calculate from '../logic/calculate';

// eslint-disable-next-line react/prefer-stateless-function
class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState((state) => calculate(state, e.target.innerText));
  }

  render() {
    const { total, next } = this.state;
    return (
      <div className="container">
        <div className="wrapper">
          <div className="screen">{next || total}</div>
          <button type="button" className="btn num-pad" onClick={this.handleClick}>AC</button>
          <button type="button" className="btn num-pad" onClick={this.handleClick}>+ / -</button>
          <button type="button" className="btn num-pad" onClick={this.handleClick}>%</button>
          <button type="button" className="btn orange" onClick={this.handleClick}>÷</button>
          <button type="button" className="btn num-pad" onClick={this.handleClick}>7</button>
          <button type="button" className="btn num-pad" onClick={this.handleClick}>8</button>
          <button type="button" className="btn num-pad" onClick={this.handleClick}>9</button>
          <button type="button" className="btn orange" onClick={this.handleClick}>x</button>
          <button type="button" className="btn num-pad" onClick={this.handleClick}>4</button>
          <button type="button" className="btn num-pad" onClick={this.handleClick}>5</button>
          <button type="button" className="btn num-pad" onClick={this.handleClick}>6</button>
          <button type="button" className="btn orange" onClick={this.handleClick}>-</button>
          <button type="button" className="btn num-pad" onClick={this.handleClick}>1</button>
          <button type="button" className="btn num-pad" onClick={this.handleClick}>2</button>
          <button type="button" className="btn num-pad" onClick={this.handleClick}>3</button>
          <button type="button" className="btn orange" onClick={this.handleClick}>+</button>
          <button type="button" className="btn num-pad num-zero" onClick={this.handleClick}>0</button>
          <button type="button" className="btn num-pad" onClick={this.handleClick}>.</button>
          <button type="button" className="btn orange" onClick={this.handleClick}>=</button>
        </div>
      </div>
    );
  }
}

export default Calculator;
