import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import UserList from './components/UserList';

const links = [
  {
    title: 'Nav 1',
    active: true,
  },
  {
    title: 'Nav 2'
  },
];

const userList = [
  {
    id: 1,
    last_name: 'last_name',
    first_name: 'first_name',
    age: 123,
    img: 'http://echovis.tt.com.pl/images/img_avatar.png',
  },
  {
    id: 2,
    last_name: 'last_name',
    first_name: 'first_name',
    age: 123,
    img: 'http://echovis.tt.com.pl/images/img_avatar.png',
  },
];
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpenList: false,
    }
  }

  toggleUsers = () => {
    this.setState({
      isOpenList: !this.state.isOpenList,
    });
  }

  handleClick = (name) => {
    console.log('123', name);
  }

  render() {
    console.log('RENDER', this);
    const {
      isOpenList,
    } = this.state;
    
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
        <button onClick={this.toggleUsers}>
          Open
        </button>
        <div>
          <button onClick={this.toggleUsers}>
              Open
          </button>
        </div>
        {
          isOpenList &&
          <UserList
            userList={userList}
          />
        }
      </div>
    );
  }
}

export default App;
