import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';

class App extends Component {
  constructor(props) {
    super(props);
  }

  handleClick = (name) => {
    console.log('123', name);
  }

  render() {
    console.log('RENDER', this);
    const links = [
      {
        title: 'Nav 1',
        active: true,
      },
      {
        title: 'Nav 2'
      },
    ];
    return (
      <div className="App">
        <Header
          title="Header"
          links={links}
          handleClick={this.handleClick}
        />
        <Header
          title="Header2"
        />
        
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
      </div>
    );
  }
}

export default App;
