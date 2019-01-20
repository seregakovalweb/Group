import React, { Component } from 'react';

class UserList extends Component {

  itemUser = (user) => {
    const {
      id,
      img,
      last_name,
      first_name,
    } = user;

    return (
      <div key={id}>
        <img
          alt=''
          src={img}
          className='avatarUser'
        />
        <p>{last_name}</p>
        <p>{first_name}</p>
      </div>
    )
  }

  render() {
    const {
      userList,
    } = this.props;

    return (
      <div>
        {userList.map(item => this.itemUser(item))}
      </div>
    );
  }
};

export default UserList;