import { React, Component } from "react";
import UserList from "./UserList";

class UserContainer extends Component {
  /*
    promise in javascript
        resolve
        reject 
        pending 

    routing in single page application
        react-dom-router
    
*/
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  updateUsers(newUsers) {
    this.setState({
      users: newUsers,
    });
  }

  componentDidMount() {
    fetch("https://reqres.in/api/users")
      .then((res) => res.json())
      .then((res) => {
        if (res && res.data && res.data.length > 0) {
          this.updateUsers(res.data);
        }
      });
  }

  render() {
    return (
      <>
        <UserList listItems = {this.state.users} />
      </>
    );
  }
}

export default UserContainer;
