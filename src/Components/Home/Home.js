import React from "react";
import AddDetails from "./AddDetails";
import "./Home.css";
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      personDetails: [],
    };
  }
  handleAdd = (personname, email, phone, address) => {
    console.log("personoo", personname);
    const details = {
      name: personname,

      email: email,
      phone: phone,
      address: address,
      id: Math.floor(Math.random() * 100),
    };
    this.setState({ personDetails: [...this.state.personDetails, details] });
  };
  render() {
    return (
      <div className="home-container">
        <h1>Home</h1>
        <AddDetails addPersonDetails={this.handleAdd} />
        <ul>
          {this.state.personDetails.map((item) => (
            <div key={item.id} className="person-details-list">
              <li>
                <span>Name:</span>
                {item.name}
              </li>
              <li>
                <span>Email:</span>
                {item.email}
              </li>
              <li>
                <span>Phone:</span>
                {item.phone}
              </li>
              <li>
                <span>Address:</span>
                {item.address}
              </li>
            </div>
          ))}
        </ul>
      </div>
    );
  }
}
export default Home;
