import React, { Component } from 'react';
// import logo from './logo.svg';
import '../../App.css';
import Header from '../../components/Header';
import url from '../../data.txt';
import UserList from '../../components/UserList';
import ActiveUser from '../../components/ActiveUser';

const links = [
  {
    title: 'Nav 1',
    active: true,
  },
  {
    title: 'Nav 2'
  },
];

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      activeTab: 'firstTab',
      isErrorMessage: false,
    }
  }

  componentWillMount() {
    console.log('Will MOUNT');
  }

  componentDidMount() {
  fetch(url)
    .then(respone => respone.json())
    .then(data => {
      this.setState({
        data,
      })
    });
    console.log('DID MOUNT');

  }


  render() {
    console.log('STATE', this.state);
    const {

    } = this.state;

    return (
      <div className="App home">
        <Header
          title="Header"
          links={links}
          handleClick={this.handleClick}
        />
        <div className="home__content">
          <div className="home__sidebar">
            <ActiveUser

            />
          </div>
          <div className='home__wrapUsers'>
            <UserList

            />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
