import React, { Component } from 'react';
import './App.css';
import ResultComponent from './components/ResultComponent';
import KeypadComponent from './components/KeypadComponent';

class App extends React.Component {
   constructor() {
     super();

       this.state = {
          result: ""
       }
  }

  onClick = button => {

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
  };


  calculate = () => {
     try {
       this.setState({
        result: (eval(this.state.result) || "") + ""
       })
    } catch (e) {
        this.setState({
          result:"error"
        })
    }
  };

  backspace = () => {
    this.setState({
      result: this.state.result.slice(0, -1)
    })
  };

  render() {
     return (
       <div className="joined-body">
         <div className="calculator-body">
           <div className="shrink">
            <h1>Calculator</h1>
            <ResultComponent result={this.state.result}/>
            <KeypadComponent onClick={this.onClick}/>
           </div>
         </div>
        </div>
     )
  };
}

export default App;
