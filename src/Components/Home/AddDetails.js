import React from "react";
import "./AddDetails.css";

class AddDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      personName: "",
      email: "",
      phone: "",
      address: "",
      id: null,
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { personName, email, phone, address, id } = this.state;
    this.props.addPersonDetails(personName, email, phone, address, id);
    this.setState({
      personName: "",
      email: "",
      phone: "",
      address: "",
      id: null,
    });
  };
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="add-details-container">
        <h1 className="text-align">Add User Details</h1>
        <form onSubmit={this.handleSubmit}>
          <label>Name</label>
          <input
            type="text"
            value={this.state.personName}
            onChange={this.handleChange}
            name="personName"
            placeholder="Enter Name"
            className="input-name"
            required
          />
          <br />
          <label>E-mail</label>
          <input
            type="text"
            value={this.state.email}
            onChange={this.handleChange}
            name="email"
            placeholder="Enter Email"
            className="input-email"
            required
          />
          <br />
          <label>Phone</label>
          <input
            type="number"
            value={this.state.phone}
            onChange={this.handleChange}
            name="phone"
            placeholder="Enter Phone number"
            className="input-phone"
            required
          />
          <br />
          <label>Address</label>
          <input
            type="text"
            value={this.state.address}
            onChange={this.handleChange}
            name="address"
            placeholder="Enter Address"
            className="input-address"
            required
          />
          <br />
          <input type="submit" value="submit" />
        </form>
      </div>
    );
  }
}

export default AddDetails;
