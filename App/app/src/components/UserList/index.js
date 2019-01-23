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
      <div>
        UserList
      </div>
    )
  }

  render() {
    const {
      userList,
    } = this.props;

    return (
      <div>
        UserList
        {/* {userList.map(item => this.itemUser(item))} */}
      </div>
    );
  }
};

export default UserList;