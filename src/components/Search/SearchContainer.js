import { Component } from "react";
import SearchList from "./SearchList";

class SearchContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  updateUsersState(newUsers) {
    this.setState({
      users: newUsers,
    });
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((resp) => resp.json())
      .then((resp) => {
        this.updateUsersState(resp);
      });
  }
  render() {
    return (
      <>
        <SearchList usersData={this.state.users} />
      </>
    );
  }
}

export default SearchContainer;
