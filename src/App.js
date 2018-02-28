import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {counter:0 , counterStatus:true};
    
    
  }
increaseCounter = () => {
  this.setState((prevState) => {
  return {counter: prevState.counter + 1 };
});

}

decreaseCounter = () => {
  this.setState((prevState) => {
  return {counter: prevState.counter - 1 };
});

}

toggleCounter = () => {
  this.setState((prevState) => {
    return {counterStatus:!this.state.counterStatus};
  })
  
}


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          Hello Counter.
        </p>
        <button onClick={this.increaseCounter}> Increase the counter</button>
        <button onClick={this.decreaseCounter}> Decrease the counter</button>
        <button onClick={this.toggleCounter}>Toggle Counter</button>
       {this.state.counterStatus ? <p> {this.state.counter} </p> : null}

        
      </div>
    );
  }
}

export default App;
