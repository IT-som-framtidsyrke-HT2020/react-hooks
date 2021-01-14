import React from "react";

class EmailJs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
    };
  }

  handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div>
        <h1>Email JS Example</h1>
        <form className="form">
          <div className="form-control">
            <label htmlFor="name">Name: </label>
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              formNoValidate
            />
          </div>

          <div className="form-control">
            <label htmlFor="email">Email: </label>
            <input
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              formNoValidate
            />
          </div>

          <div className="form-control">
            <label htmlFor="message">Message: </label>
            <textarea
              rows="6"
              name="message"
              value={this.state.message}
              onChange={this.handleChange}
              formNoValidate
            />
          </div>
        </form>
      </div>
    );
  }
}

export default EmailJs;
