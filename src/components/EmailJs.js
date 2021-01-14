import React from "react";
import emailjs from "emailjs-com";

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

  handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, message } = this.state;

    // emailjs: servide id, template id, template params, user id

    let templateParams = {
      name: name,
      email: email,
      message: message,
    };

    emailjs.send(
      "<YOUR SERVICE ID>",
      "<YOUR TEMPLATE ID>",
      templateParams,
      "<YOUR USER ID>"
    );

    console.log(`
        --SUBMITTING--
        Name: ${name}
        Email: ${email}
        Message: ${message}`);

    this.resetForm();
  };

  resetForm() {
    this.setState({
      name: "",
      email: "",
      message: "",
    });
  }

  render() {
    return (
      <div>
        <h1>Email JS Example</h1>
        <form className="form" onSubmit={this.handleSubmit} noValidate>
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
          <button className="form-btn" type="submit">
            Send
          </button>
        </form>
      </div>
    );
  }
}

export default EmailJs;
