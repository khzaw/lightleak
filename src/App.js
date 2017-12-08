import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  /* constructor(props) {
   *   super(props);

   *   /* this.onDrop = this.onDrop.bind(this);
   *    * this.onDragOver = this.onDragOver.bind(this);

   }*/
  onDrop = (e) => {
    console.log('onDrop', e);
    var types = e.dataTransfer.types;
    const supportedTypes = ['image/jpeg', 'image/png'];
    types = supportedTypes.filter(value => types.includes(value));
    if(types.length) {
      const data = e.dataTransfer.getData(types[0]);
      console.log(data);
    }
    e.preventDefault();
  }

  onDragOver = (e) =>  {
    console.log('onDragOver', e);
    e.preventDefault();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="drop-zone" onDrop={this.onDrop} onDragOver={this.onDragOver}>

        </div>
      </div>
    );
  }
}

export default App;
