import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import StudentContainer from "./components/StudentContainer/StudentContainer";
import UserContainer from "./components/Users/UserContainer";
import SearchContainer from "./components/Search/SearchContainer";
import UserEdit from "./components/Users/UserList";
import DataList from "./components/DataList/DataList";

import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Students</Link>
            </li>
            <li>
              <Link to="/search">Search</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
            <li>
              <Link to="/datalist">Data List</Link>
            </li>
          </ul>
        </nav>
      </div>
      <Switch>
        <Route path="/search">
          <SearchContainer />
        </Route>
        <Route path="/users">
          <UserContainer />
        </Route>
        <Route path="/users/:id">
          <UserEdit />
        </Route>
        <Route path="/datalist">
          <DataList />
        </Route>
        <Route path="/">
          <StudentContainer />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
