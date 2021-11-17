import { ChangeEvent, Component, FormEvent } from "react";
import { Users } from "./Users.type";
import axios from "axios";

export class AddUser extends Component {
  state: Users = {
    address: {
      street: "",
      geo: { lat: 0, lng: 0 },
      suite: "",
      zipcode: "",
      city: "",
    },
    company: { name: "", catchPhrase: "", bs: "" },
    email: "",
    id: 0,
    name: "",
    phone: "",
    username: "",
    website: "",
  };

  changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  geoChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({
      address: {
        ...this.state.address,
        geo: {
          ...this.state.address.geo,
          [event.target.name]: event.target.value,
        },
      },
    });
  };

  addressChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({
      address: {
        ...this.state.address,
        [event.target.name]: event.target.value,
      },
    });
    console.log(this.state);
  };

  companyChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({
      company: {
        ...this.state.company,
        [event.target.name]: event.target.value,
      },
    });
  };

  submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(this.state);
    axios
      .post("http://localhost:8080/users", this.state)
      .then((response) => {
        alert("Submitted Successfully!");
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    // console.log("Form Submitted", event);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <div>
            <label>Name : </label>
            <input
              type="text"
              name="name"
              value={this.state.name}
              placeholder="Leanne Graham"
              onChange={(event) => {
                this.setState({ [event.target.name]: event.target.value });
                console.log(this.state);
              }}
              required
            />
          </div>
          <div>
            <label>Username : </label>
            <input
              type="text"
              name="username"
              value={this.state.username}
              placeholder="Bret"
              onChange={(event) => {
                this.setState({ [event.target.name]: event.target.value });
                console.log(this.state);
              }}
              required
            />
          </div>
          <div>
            <label>Email : </label>
            <input
              type="email"
              name="email"
              value={this.state.email}
              placeholder="Sincere@april.biz"
              onChange={this.changeHandler}
              required
            />
          </div>
          <div>
            <label>Address's Street : </label>
            <input
              type="text"
              name="street"
              value={this.state.address.street}
              placeholder="Kulas Light"
              onChange={this.addressChangeHandler}
              required
            />
          </div>
          <div>
            <label>Suite : </label>
            <input
              type="text"
              name="suite"
              value={this.state.address.suite}
              placeholder="Apt. 556"
              onChange={this.addressChangeHandler}
              required
            />
          </div>
          <div>
            <label>City : </label>
            <input
              type="text"
              name="city"
              value={this.state.address.city}
              placeholder="Gwenborough"
              onChange={this.addressChangeHandler}
              required
            />
          </div>
          <div>
            <label>Zipcode : </label>
            <input
              type="text"
              name="zipcode"
              value={this.state.address.zipcode}
              placeholder="92998-3874"
              onChange={this.addressChangeHandler}
              required
            />
          </div>
          <div>
            <label>Geo Location Latitude : </label>
            <input
              type="number"
              name="lat"
              value={this.state.address.geo.lat}
              placeholder="Latitude"
              onChange={this.geoChangeHandler}
              required
            />
          </div>
          <div>
            <label>Geo Location Longitude : </label>
            <input
              type="number"
              name="lng"
              value={this.state.address.geo.lng}
              placeholder="Longitude"
              onChange={this.geoChangeHandler}
              required
            />
          </div>
          <div>
            <label>Phone : </label>
            <input
              type="tel"
              name="phone"
              value={this.state.phone}
              placeholder="000-000-0000"
              onChange={this.changeHandler}
              required
            />
          </div>
          <div>
            <label>Website : </label>
            <input
              type="text"
              name="website"
              value={this.state.website}
              placeholder="www.abc.com"
              onChange={this.changeHandler}
              required
            />
          </div>
          <div>
            <label>Company's Name : </label>
            <input
              type="text"
              name="name"
              value={this.state.company.name}
              placeholder="Romaguera-Crona"
              onChange={this.companyChangeHandler}
              required
            />
          </div>
          <div>
            <label>Catch Phrase : </label>
            <input
              type="text"
              name="catchPhrase"
              value={this.state.company.catchPhrase}
              placeholder="Multi-layered client-server neural-net"
              onChange={this.companyChangeHandler}
              required
            />
          </div>
          <div>
            <label>Bs : </label>
            <input
              type="text"
              name="bs"
              value={this.state.company.bs}
              placeholder="harness real-time e-markets"
              onChange={this.companyChangeHandler}
              required
            />
          </div>
          <button type="submit" id="submitButton">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
