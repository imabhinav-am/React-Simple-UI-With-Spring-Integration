import { Component } from "react";
import axios from "axios";
import { Users } from "./Users.type";
import "./GetUsers.css";

export class GetUsers extends Component {
  state = {
    users: [],
    err: "",
  };

  componentDidMount() {
    axios
      .get(" https://jsonplaceholder.typicode.com/users")
      .then((response: { data: Users }) => {
        console.log(response);
        this.setState({ users: response.data });
      })
      .catch((error: string) => {
        console.log(error);
        this.setState({ Error: "Error retreiving data" });
      });
  }

  renderTableHeader() {
    let tableHeader = Object.keys(this.state.users[0]);
    return tableHeader.map((key) => {
      return <th key={key}>{key.toUpperCase()}</th>;
    });
  }

  renderTableData() {
    return this.state.users.map((user: Users) => {
      return (
        <tr key={user.id}>
          <td>{user.id}</td>
          <td>{user.name}</td>
          <td>{user.username}</td>
          <td>{user.email}</td>
          <td>
            {user.address.street}
            <br /> {user.address.suite}
            <br /> {user.address.city}
            <br /> ZipCode : {user.address.zipcode}
            <br /> Location : {user.address.geo.lat}, {user.address.geo.lng}
          </td>
          <td>{user.phone}</td>
          <td>{user.website}</td>
          <td>
            {user.company.name}
            <br /> {user.company.catchPhrase}
            <br /> {user.company.bs}
          </td>
        </tr>
      );
    });
  }

  render() {
    return (
      <div className="GetUsers">
        {this.state.users.length ? (
          <div>
            <h1 id="heading">List of Users</h1>
            <table id="users">
              <thead>
                <tr>{this.renderTableHeader()}</tr>
              </thead>
              <tbody>{this.renderTableData()}</tbody>
            </table>
          </div>
        ) : null}
        {this.state.err ? <div>{this.state.err}</div> : null}
      </div>
    );
  }
}
