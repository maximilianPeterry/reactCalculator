import React, { Component } from 'react';
import './App.css';
// import ResultComponent from './components/ResultComponent';
// import KeypadComponent from './components/KeypadComponent';

class App extends React.Component { 

  state = {
    result: ""
  }

  handleButtonClick = button => {

    if(button === "="){
      this.calculate()
    }

    else if(button === "C"){
      this.setState({
        result: ""
      })
    }

    else if(button === "CE"){
      this.backspace()
    }

    else {
       this.setState({
         result: this.state.result + button
       })
    }
  }


  calculate = () => {
    try {
      this.setState({
        result: (eval(this.state.result) || "") + ""
      })
    } catch (e) {
      this.setState({
        result: "error"
      })
    }
  }

  backspace = () => {
    this.setState({
      result: this.state.result.slice(0, -1)
    })
  }

  render() {
    const buttonArr = ['(', 'CE',')','C','1','2','3','+','4','5','6','-','7','8','9','*','.','0','=','/']

    return (
      <div className="joined-body">
        <div className="calculator-body">
          <div className="shrink">
          <h1>Calculator</h1>
          <ResultComponent result={this.state.result}/>
          <KeypadComponent handleButtonClick={this.handleButtonClick} buttons={buttonArr}/>
          </div>
        </div>
      </div>
     )
  };
}

const ResultComponent = ({ result }) => {
      return (
        <div className="result">
            <p>{result}</p>
        </div>
      )
}

const KeypadComponent = props => (
    <div className="button">
      {
        props.buttons.map(buttonVal => {
          return <button name={buttonVal} onClick={e => props.handleButtonClick(e.target.name)}>{buttonVal}</button>
        })
      }
    </div>
)

export default App;
